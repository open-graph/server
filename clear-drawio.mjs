/* 清空不必要的文件，精简 Drawio 文件夹，移除开发环境代码 */
import fs from "fs-extra";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/**
 * 清空 drawio 文件夹下面的部分文件夹
 * 具体来说：js 文件夹里 除了 bridge/ 和 dropbox/ 以外的文件夹都可以删除
 */
const drawioPath = path.join(__dirname, "drawio");
const jsPath = path.join(drawioPath, "js");

const keepDirs = ["bridge", "dropbox"];
const dirs = fs.readdirSync(jsDir);

for (const dir of dirs) {
  if (!keepDirs.includes(dir)) {
    const diagramPath = path.join(jsPath, dir);
    fs.rmdirSync(diagramPath, { recursive: true });
  }
}
