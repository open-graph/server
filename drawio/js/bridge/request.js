/**
 * 这里后续计划做一个 js-bridge，用来处理前端后端的自定义逻辑
 * 比如：可以重写这里的接口去实现图表的增删改查
 */
// 服务端接口，可以自行修改
window.SERVER_URL = "http://127.0.0.1:3006";

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
      .then((data) => data?.res?.topo || {});
  }

  /**
   * 创建图表
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
      .then((res) => {
        Toastify({
          text: "图表创建成功",
          duration: 2000,
        }).showToast();
        // FIXME: 新建模式，如果新建成功，跳转到编辑，前提是后端返回了 id
        res.data &&
          setTimeout(() => {
            const targetHref = window.location.href.includes("?")
              ? `${window.location.href}&id=${res.data}`
              : `${window.location.href}?id=${res.data}`;
            window.location.href = targetHref;
          }, 2000);
      });
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
      .then((res) => {
        console.log("图表删除成功");
      });
  }

  /**
   * 修改图表数据
   * @param {String} id 图表id
   * @param {Object} data 图表数据
   * @param {Boolean} toast 是否显示成功失败提示，可以设置自动保存的时候不提示用户保存成功
   */
  updateDiagram(id, data, toast = true) {
    return this.request(`${window.SERVER_URL}/api/atchitect/topo/saveTopo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        // 把 ID 变成整形
        id: +id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        toast &&
          Toastify({
            text: "图表更新成功",
            duration: 2000,
          }).showToast();
      });
  }
}

window.REQUEST = new Request();
