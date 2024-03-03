import express from "express";
import fs from "fs-extra";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import { nanoid } from "nanoid";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = 3006;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, "public")));

// 允许跨域请求
app.use(cors());

// 设置存储图表的文件夹
const databaseDir = path.join(__dirname, "database");
const graphsDir = path.join(databaseDir, "graphs");
const dataFile = path.join(databaseDir, "data.json");

// 确保图表文件夹和数据文件存在
if (!fs.existsSync(graphsDir)) {
  fs.mkdirSync(graphsDir, { recursive: true });
}
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

// 使用 bodyParser 中间件解析 JSON 数据
app.use(
  bodyParser.json({
    limit: "10mb",
    extended: true,
  })
);

// 读取或初始化数据库
function readDatabase() {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
  } catch (err) {
    console.error("Error reading database:", err);
    data = [];
  }
  return data;
}

// 写入数据库
function writeDatabase(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing database:", err);
    throw new Error("Error writing to database");
  }
}

/**
 * 保存图表的 POST 请求
 * 此方法存储的时候使用的是两种方式
 * 1 - 将图表的 XML 内容和缩略图存储在文件系统中
 * 2 - 将图表的基本信息存储在 JSON 文件中，模拟数据库
 */
app.post("/api/atchitect/topo/createTopo", (req, res) => {
  const { title, topodata, thumbnail, author = "luffyzh" } = req.body;
  const id = nanoid();
  const folderName = id;
  const diagramPath = path.join(graphsDir, folderName);

  // 创建存储图表的文件夹
  if (!fs.existsSync(diagramPath)) {
    fs.mkdirSync(diagramPath);
  }

  // 保存图表文件和缩略图
  fs.writeFileSync(
    path.join(
      diagramPath,
      `${title?.endsWith(".xml") ? title : title + ".xml"}`
    ),
    topodata
  );
  // 过滤data:URL
  const base64Data = thumbnail.replace(/^data:image\/\w+;base64,/, "");
  // 返回一个被 string 的值初始化的新的 Buffer 实例, 原始二进制数据存储在 Buffer 类的实例中, 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
  const imageBuffer = Buffer.from(base64Data, "base64");
  fs.writeFileSync(path.join(diagramPath, "thumbnail.png"), imageBuffer);

  // 更新数据库
  const diagrams = readDatabase();
  diagrams.push({
    id,
    title,
    thumbnail,
    author,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  writeDatabase(diagrams);

  res.status(200).json({
    code: 0,
    data: id,
    message: "Diagram saved successfullly",
  });
});

/**
 * 获取图表列表的 GET 请求
 * 该方法返回一个 JSON 数组，包含所有图表的基本信息
 * 此方法获取的是 database 目录下的 data.json 文件中的数据
 * 此方法模拟的后端是数据库形式的存储
 */
app.get("/api/atchitect/topo/topoList", (req, res) => {
  try {
    const diagrams = readDatabase();
    // 可以根据需要添加其他逻辑，比如过滤、排序等
    res.status(200).json(diagrams);
  } catch (err) {
    console.error("Error fetching diagram list:", err);
    res.status(500).json({
      code: -1,
      message: "Error fetching diagram list",
    });
  }
});

/**
 * 获取图表内容的 GET 请求
 * @param {string} id - 图表 ID
 * @returns {object} - 包含图表 XML 内容和缩略图的 Base64 编码
 * 此方法获取的是 database 目录下的 graphs 目录中的图表文件
 * 此方法模拟的后端是文件系统形式的存储
 */
app.get("/api/atchitect/topo/topoDetail", (req, res) => {
  const { id } = req.query;

  const diagramPath = path.join(graphsDir, id);

  if (!fs.existsSync(diagramPath)) {
    return res.status(404).json({
      code: -1,
      message: "Diagram not found",
    });
  }

  try {
    // 这个文件夹下有个后缀是 .xml 的文件，这个文件就是我们的图表文件
    // 读取 XML 文件和缩略图
    const diagrams = readDatabase();
    const targetDiagram = diagrams.find((d) => d.id === id);
    const xmlContent = fs.readFileSync(
      path.join(diagramPath, targetDiagram.title),
      "utf8"
    );
    const thumbnailContent = fs.readFileSync(
      path.join(diagramPath, "thumbnail.png")
    );

    // 以 JSON 格式返回 XML 内容和缩略图的 Base64 编码
    res.status(200).json({
      title: targetDiagram.title.replace(".xml", ""),
      topodata: xmlContent,
      thumbnail: thumbnailContent.toString("base64"), // 编码为 Base64
    });
  } catch (err) {
    console.error("Error fetching diagram:", err);
    res.status(500).send("Error fetching diagram");
  }
});

// 处理更新图表的 PUT 请求
app.post("/api/atchitect/topo/saveTopo", (req, res) => {
  const { id, title, topodata, thumbnail } = req.body; // 假设我们只更新XML内容和缩略图
  const diagramPath = path.join(graphsDir, id);

  if (!fs.existsSync(diagramPath)) {
    return res.status(404).json({
      code: -1,
      message: "Diagram not found",
    });
  }

  // 先清空文件夹，但是不删除文件夹本身
  fs.emptyDirSync(diagramPath);

  try {
    // 更新图表文件和缩略图
    fs.writeFileSync(
      path.join(
        diagramPath,
        `${title?.endsWith(".xml") ? title : title + ".xml"}`
      ),
      topodata
    );
    if (thumbnail) {
      // 过滤data:URL
      const base64Data = thumbnail.replace(/^data:image\/\w+;base64,/, "");
      // 返回一个被 string 的值初始化的新的 Buffer 实例, 原始二进制数据存储在 Buffer 类的实例中, 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
      const imageBuffer = Buffer.from(base64Data, "base64");
      fs.writeFileSync(path.join(diagramPath, "thumbnail.png"), imageBuffer);
    }

    // 更新数据库的标题和时间
    const diagrams = readDatabase();
    const diagram = diagrams.find((d) => d.id === id);
    if (diagram) {
      diagram.title = title;
      diagram.updated_at = new Date().toISOString();
    }

    res.status(200).json({
      code: 0,
      data: true,
      message: "Diagram updated successfully",
    });
  } catch (err) {
    console.error("Error updating diagram:", err);
    res.status(500).json({
      code: -1,
      message: "Error updating diagram",
    });
  }
});

// 删除图表的辅助函数
function deleteDiagram(diagrams, id) {
  // 从数据库中移除图表数据
  const index = diagrams.findIndex((d) => d.id === id);
  if (index > -1) {
    diagrams.splice(index, 1);
    writeDatabase(diagrams);
  }

  // 删除文件夹及其下面所有内容
  const diagramPath = path.join(graphsDir, id);
  fs.rmdirSync(diagramPath, { recursive: true });
}

// 处理删除图表的 DELETE 请求
app.get("/api/atchitect/topo/delTopo", (req, res) => {
  const { id } = req.query;
  try {
    const diagrams = readDatabase();
    deleteDiagram(diagrams, id);
    res.status(200).json({
      code: 0,
      data: true,
      message: "Diagram deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting diagram:", err);
    res.status(500).json({
      code: -1,
      message: "Error deleting diagram",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
