const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

// 设置存储图表的文件夹
const graphsDir = path.join(__dirname, 'graphs');

// 确保图表文件夹存在
if (!fs.existsSync(graphsDir)){
    fs.mkdirSync(graphsDir);
}

// 使用 bodyParser 中间件解析 JSON 数据
app.use(bodyParser.json());

// 处理保存图表的 POST 请求
app.post('/api/diagram', (req, res) => {
  const { filename, xml } = req.body;
  const filePath = path.join(graphsDir, `${filename}.xml`);

  fs.writeFile(filePath, xml, (err) => {
      if (err) {
          console.error('Error saving diagram:', err);
          return res.status(500).send('Error saving diagram');
      }
      res.status(200).send('Diagram saved successfully');
  });
});

// 处理删除图表的 DELETE 请求
app.delete('/api/diagram/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(graphsDir, `${filename}.xml`);

  fs.unlink(filePath, (err) => {
      if (err) {
          console.error('Error deleting diagram:', err);
          return res.status(500).send('Error deleting diagram');
      }
      res.status(200).send('Diagram deleted successfully');
  });
});

// 处理更新图表的 PUT 请求
app.put('/api/diagram/:filename', (req, res) => {
  const filename = req.params.filename;
  const { xml } = req.body; // 假设我们只更新XML内容
  const filePath = path.join(graphsDir, `${filename}.xml`);

  fs.writeFile(filePath, xml, (err) => {
      if (err) {
          console.error('Error updating diagram:', err);
          return res.status(500).send('Error updating diagram');
      }
      res.status(200).send('Diagram updated successfully');
  });
});


// 处理获取图表的 GET 请求
app.get('/api/diagram/:filename', (req, res) => {
  const filename = req.params.filename;
    const filePath = path.join(graphsDir, `${filename}.xml`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading diagram:', err);
            return res.status(404).send('Diagram not found');
        }
        res.status(200).json({ filename: filename, xml: data });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});