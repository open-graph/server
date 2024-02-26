const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nanoid = require('nanoid');

const app = express();
const port = 3006;

// 设置存储图表的文件夹
const databaseDir = path.join(__dirname, 'database');
const graphsDir = path.join(databaseDir, 'graphs');
const dataFile = path.join(databaseDir, 'data.json');

// 确保图表文件夹和数据文件存在
if (!fs.existsSync(graphsDir)) {
	fs.mkdirSync(graphsDir, { recursive: true });
}
if (!fs.existsSync(dataFile)) {
	fs.writeFileSync(dataFile, JSON.stringify([]));
}

// 使用 bodyParser 中间件解析 JSON 数据
app.use(bodyParser.json());

// 读取或初始化数据库
function readDatabase() {
	let data;
	try {
		data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
	} catch (err) {
		console.error('Error reading database:', err);
		data = [];
	}
	return data;
}

// 写入数据库
function writeDatabase(data) {
    try {
			fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
			console.error('Error writing database:', err);
			throw new Error('Error writing to database');
    }
}

/**
 * 保存图表的 POST 请求
 * 此方法存储的时候使用的是两种方式
 * 1 - 将图表的 XML 内容和缩略图存储在文件系统中
 * 2 - 将图表的基本信息存储在 JSON 文件中，模拟数据库
 */
app.post('/api/diagram', (req, res) => {
	const { title, xml, thumbnail, author = 'luffyzh' } = req.body;
	const id = nanoid();
	const folderName = id;
	const diagramPath = path.join(graphsDir, folderName);

	// 创建存储图表的文件夹
	if (!fs.existsSync(diagramPath)) {
		fs.mkdirSync(diagramPath);
	}

	// 保存图表文件和缩略图
	fs.writeFileSync(path.join(diagramPath, `${title}.xml`), xml);
	fs.writeFileSync(path.join(diagramPath, 'thumbnail.png'), thumbnail, 'base64');

	// 更新数据库
	const diagrams = readDatabase();
	diagrams.push({ id, title, author, timestamp });
	writeDatabase(diagrams);

	res.status(200).json({
		code: 0,
		data: id,
		message: 'Diagram saved successfullly',
	});
});

/**
 * 获取图表列表的 GET 请求
 * 该方法返回一个 JSON 数组，包含所有图表的基本信息
 * 此方法获取的是 database 目录下的 data.json 文件中的数据
 * 此方法模拟的后端是数据库形式的存储
 */
app.get('/api/diagram/list', (req, res) => {
	try {
			const diagrams = readDatabase();
			// 可以根据需要添加其他逻辑，比如过滤、排序等
			res.status(200).json(diagrams);
	} catch (err) {
			console.error('Error fetching diagram list:', err);
			res.status(500).send('Error fetching diagram list');
	}
});

/**
 * 获取图表内容的 GET 请求
 * @param {string} id - 图表 ID
 * @returns {object} - 包含图表 XML 内容和缩略图的 Base64 编码
 * 此方法获取的是 database 目录下的 graphs 目录中的图表文件
 * 此方法模拟的后端是文件系统形式的存储
 */
app.get('/api/diagram/:id', (req, res) => {
	const { id } = req.params;
	const diagramPath = path.join(graphsDir, id);

	if (!fs.existsSync(diagramPath)) {
			return res.status(404).json({
				code: -1,
				message: 'Diagram not found',
			});
	}

	try {
			// 读取 XML 文件和缩略图
			const xmlContent = fs.readFileSync(path.join(diagramPath, 'drawio.xml'), 'utf8');
			const thumbnailContent = fs.readFileSync(path.join(diagramPath, 'thumbnail.png'));

			// 以 JSON 格式返回 XML 内容和缩略图的 Base64 编码
			res.status(200).json({
					xml: xmlContent,
					thumbnail: thumbnailContent.toString('base64'), // 编码为 Base64
			});
	} catch (err) {
			console.error('Error fetching diagram:', err);
			res.status(500).send('Error fetching diagram');
	}
});

// 处理更新图表的 PUT 请求
app.put('/api/diagram/:id', (req, res) => {
	const { id } = req.params;
	const { xml, thumbnail } = req.body; // 假设我们只更新XML内容和缩略图
	const diagramPath = path.join(graphsDir, id);

	if (!fs.existsSync(diagramPath)) {
		return res.status(404).json({
			code: -1,
			message: 'Diagram not found',
		});
	}

	try {
		// 更新图表文件和缩略图
		fs.writeFileSync(path.join(diagramPath, 'drawio.xml'), xml);
		if (thumbnail) { // 如果提供了新的缩略图，则更新它
			fs.writeFileSync(path.join(diagramPath, 'thumbnail.png'), thumbnail, 'base64');
		}

		res.status(200).json({
			code: 0,
			data: true,
			message: 'Diagram updated successfully',
		});
	} catch (err) {
		console.error('Error updating diagram:', err);
		res.status(500).json({
			code: -1,
			message: 'Error updating diagram',
		});
	}
});

// 删除图表的辅助函数
function deleteDiagram(diagrams, id) {
	// 从数据库中移除图表数据
	const index = diagrams.findIndex(d => d.id === id);
	if (index > -1) {
			diagrams.splice(index, 1);
			writeDatabase(diagrams);
	}

	// 删除文件夹及其下面所有内容
	const diagramPath = path.join(graphsDir, id);
	fs.rmdirSync(diagramPath, { recursive: true });
}

// 处理删除图表的 DELETE 请求
app.delete('/api/diagram/:id', (req, res) => {
	const { id } = req.params;
	try {
			const diagrams = readDatabase();
			deleteDiagram(diagrams, id);
			res.status(200).json({
				code: 0,
				data: true,
				message: 'Diagram deleted successfully',
			});
	} catch (err) {
			console.error('Error deleting diagram:', err);
			res.status(500).json({
				code: -1,
				message: 'Error deleting diagram',
			});
	}
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});