# server

Graphs Server

## Get Started

> nodejs >= 18.0.0

```bash
# 安装依赖
npm install

# 启动应用
npm run start
```

> 项目启动后，访问 http://localhost:3006。

## 项目简介

项目使用 `express` 框架搭建，提供了一些简单的接口，同时既模拟了文件存储方式，也模拟了数据库服务系统。

### 文件存储服务

在前端新建图表或者更新图表的时候，会将图表数据保存到本地文件中，文件存储服务就是用来模拟这个过程的。
具体目录为：`/database/graphs`。每个文件都会自动生成一个随机 id，随机 id 会作为文件夹名称，然后里面会有两个文件，一个 xml 文件，一个缩略图，具体格式如下：

```bash
| —— database
  | -- graphs
    | -- 随机id
      | -- title1.xml
      | -- thumbnail.png
    | -- 随机id
      | -- title2.xml
      | -- thumbnail.png
    | -- 随机id
      | -- title3.xml
      | -- thumbnail.png
    | -- ...
```

### 数据库服务系统

数据库服务系统是用来模拟数据库服务的，具体目录为：`/database/data.json`。每个文件都会自动生成一个随机 id，具体格式如下：

```json
[
  {
    "id": "nanoid",
    "title": "图表名称",
    "author": "luffyzh",
    "xml": "图表字符串",
    "thumbnail": "缩略图地址",
    "created_at": "创建时间",
    "updated_at": "更新时间"
  },
  ....
]
```
