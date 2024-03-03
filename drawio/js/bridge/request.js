/**
 * 这里后续计划做一个 js-bridge，用来处理前端后端的自定义逻辑
 * 比如：可以重写这里的接口去实现图表的增删改查
 */
// 服务端接口，可以自行修改
window.SERVER_URL = "http://146.56.219.142:8888";

class Request {
  constructor() {
    this.request = window.fetch.bind(window);
  }

  /**
   * 获取图表列表
   * @param {Object} params 参数，比如分页参数，日期参数等
   */
  getDiagramList() {
    return this.request(`${window.SERVER_URL}/api/atchitect/topo/topoList`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data);
  }

  /**
   * 获取图表详情
   * @param {String} id 图表id
   */
  getDiagramDetail(id) {
    return this.request(
      `${window.SERVER_URL}/api/atchitect/topo/topoDetail?id=${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => data);
  }

  /**
   * 保存图表
   * @param {Object} data 图表数据
   */
  saveDiagram(data) {
    return this.request(`${window.SERVER_URL}/api/atchitect/topo/createTopo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data);
  }

  /**
   * 删除图表
   * @param {String} id 图表id
   */
  deleteDiagram(id) {
    return this.request(
      `${window.SERVER_URL}/api/atchitect/topo/delTopo?id=${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => data);
  }

  /**
   * 修改图表数据
   * @param {String} id 图表id
   */
  updateDiagram(id, data) {
    return this.request(`${window.SERVER_URL}/api/atchitect/topo/saveTopo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => data);
  }
}

window.REQUEST = new Request();
