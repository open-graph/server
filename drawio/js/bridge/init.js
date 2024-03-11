/**
 * 自定义系统 LOGO
 * 建议尺寸：32px * 32px
 */
window.LOGO_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABMJJREFUWEfFl3uIVHUUx7/nXnPXEmV9zPzOnbXMFo2KWrD+MkILNcmQ7KFZbigFRa5omY8gVAKz7aGogVAmPiqzTIgiWyn7Qwkqw0KXDLPFZu65u22GZem6zj3Nb5pZ9jEzd0cFf//MzO9xvp977nn8hnCZB12MvjFmpD0fBEHzhdq5IABmXuq6mJ1O4wYr7LpoSqexTURWlwtSNgAzNwKYeHttf1xt+mX1TgTnsf/QOft1r4hMKgeiLADP8+ao6tsLZg3EwocHdtNZ895prH33NIhoru/7m/sKURZAzSjvxEjuN2JXwxAMqOh+9Ey7Ytqikx3HTpxvTqb80ZccIBaLXee67rEXnxyEunuuLGh/66f/4oWNfyGdTte0trb+0heIPnvAGDOeiPa9XD8YMycNKGh7R+MZLFl/Cqo6IQiCry4ZgDHmOSJqsAbvvLUCm5dXFbQ9Z+Wf+PK79uyaqi4OguCVKIhIDzDzZwDuBmCf6GsAyxrmD8aMid298P7eM1i87pTVewnANQBmAdgjIlNKQZQEYOYFANZY8aqqqslNTU3nmPlNAI/bTBjl/Z+Gx/3z2QwYOsjZefhoaoadY2YLshTAQhFZWwyiKAAzPwpgG4AjInJTVwPGmHWVFc4j7ed0iJ2v6E8nz7aH7wRBML/rvnzNADBbRLYXgigIkEgkhoZheChDf8p13TuSyeTJQofj8fhUO9/S0vJJsSdk5u8BDHccpzaVSv3Rc19BAGZeCOB1ANNFZHdUIJVaZ+b7AHwE4BkRsa+z2ygGYJ/+HxEZdzHi+bPMfADAVSJSGwnged4wVf1dVRcFQfDaJQJYBmAVEV3v+/7RrjZ7ecDzvDGq+lM5xSQK0hhTR0RbiGia7/sfRwGMU9X9HR0dg9ra2v6OMt6X9VgsFnddNyCiJb7vZwtafvTyADPPBrA1V3h+y+R8UkSe74tQzz3MvApANYARGXvjMyWjTkRsavcGiMfjMcdxbDrdBqANwGFVHU1EHoBmEbm2HAhm/hXASFX1iehnALaWDAPwbRiGU1taWlqtvU4PMPOHAO5X1YeCIPggL5ZvQgAaRWRyXyCY+XMAk3rGkTHmQSLaCWCXiDzQCeB53lxV3ZRx11si8kRPEc/z6lV1naquDIJgRSkIY8wKIlpORPN9319f4LVkS3kYhvfaApb1gDFmk73JuK57SzKZ/LGQADMnAXwhIo+VAmDmLQDuEhH77nuN6urqm9Pp9A8Z2Y0i8lQWgJn32SARkVK9we6BiEyIAIjcx8xqg9zaygNkO1eUB1R1TVRxMsY8S0S2A0Z5YLWILMsD2H5v+37JGHAcZ0wqlbIRXXQkEonRYRgejYoBAFNEZE+nyz3Pm6eq61V1h+M4G3zfP8DMY21WENHibMQSvRqG4RvF/ojYPyqO4zxty7jdr6oNNupF5KDneePCMJxHRDOJqN73/Q3d0jAXC7Zr2e7VcxwBkLKplVuwtyMB4Od+21rBuWJjp+z6cAA3FrC1W0Sm5+cLVUIrMjYndkxVU/nUy0VwHQAbiLaw9O8icISIvgnDcGv+QppLyQSAGltHABwUEfvZOSLvhCVe9xXMXJOpDVRZWXm8ubn5bKnYKLZ2MQAXotfrzGUH+A/HLAI/OqRgkQAAAABJRU5ErkJggg==";

/**
 * 自定义系统 LOGO 点击事件
 */
function logoClick() {
  console.log("==========> 这里实现 logo 图标的点击事件 <==========");
}

window.LOGO_CLICK = logoClick;

/**
 * 自定义退出 icon
 */
window.EXIT_SYSTEM_ICON =
  "data:image/svg+xml;base64,PHN2ZyB0PSIxNzA5NjI4MDMyMTE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMjk5IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik04MjkuNDQgODgyLjY4OGgtNjM0Ljg4Yy0yOC42NzIgMC01My4yNDgtMjQuNTc2LTUzLjI0OC01My4yNDh2LTYzNC44OGMwLTI4LjY3MiAyNC41NzYtNTMuMjQ4IDUzLjI0OC01My4yNDhoNjM0Ljg4YzI4LjY3MiAwIDUzLjI0OCAyNC41NzYgNTMuMjQ4IDUzLjI0OHYxMDcuODYxMzMzYzAgMTEuNjA1MzMzLTguODc0NjY3IDIwLjQ4LTIwLjQ4IDIwLjQ4cy0yMC40OC04Ljg3NDY2Ny0yMC40OC0yMC40OFYxOTQuNTZjMC02LjE0NC02LjE0NC0xMi4yODgtMTIuMjg4LTEyLjI4OGgtNjM0Ljg4Yy02LjE0NCAwLTEyLjI4OCA2LjE0NC0xMi4yODggMTIuMjg4djYzNC44OGMwIDYuMTQ0IDYuMTQ0IDEyLjI4OCAxMi4yODggMTIuMjg4aDYzNC44OGM2LjE0NCAwIDEyLjI4OC02LjE0NCAxMi4yODgtMTIuMjg4di0xMDcuMTc4NjY3YzAtMTEuNjA1MzMzIDguODc0NjY3LTIwLjQ4IDIwLjQ4LTIwLjQ4czIwLjQ4IDguODc0NjY3IDIwLjQ4IDIwLjQ4djEwNy4xNzg2NjdjMCAyOC42NzItMjQuNTc2IDUzLjI0OC01My4yNDggNTMuMjQ4eiIgZmlsbD0iIzAwMDAwMCIgcC1pZD0iMTAzMDAiPjwvcGF0aD48cGF0aCBkPSJNODYyLjIwOCA1MzIuNDhIMzcxLjM3MDY2N2MtMTEuNjA1MzMzIDAtMjAuNDgtOC44NzQ2NjctMjAuNDgtMjAuNDhzOC44NzQ2NjctMjAuNDggMjAuNDgtMjAuNDhoNDkwLjgzNzMzM2MxMS42MDUzMzMgMCAyMC40OCA4Ljg3NDY2NyAyMC40OCAyMC40OHMtOC44NzQ2NjcgMjAuNDgtMjAuNDggMjAuNDh6IiBmaWxsPSIjMDAwMDAwIiBwLWlkPSIxMDMwMSI+PC9wYXRoPjxwYXRoIGQ9Ik04NjIuMjA4IDUzMi40OGMtNS40NjEzMzMgMC0xMC4yNC0yLjA0OC0xNC4zMzYtNi4xNDRsLTE3MC42NjY2NjctMTcwLjY2NjY2N2MtOC4xOTItOC4xOTItOC4xOTItMjEuMTYyNjY3IDAtMjguNjcyIDguMTkyLTguMTkyIDIxLjE2MjY2Ny04LjE5MiAyOC42NzIgMGwxNzAuNjY2NjY3IDE3MC42NjY2NjdjOC4xOTIgOC4xOTIgOC4xOTIgMjEuMTYyNjY3IDAgMjguNjcyLTQuMDk2IDQuMDk2LTguODc0NjY3IDYuMTQ0LTE0LjMzNiA2LjE0NHoiIGZpbGw9IiMwMDAwMDAiIHAtaWQ9IjEwMzAyIj48L3BhdGg+PHBhdGggZD0iTTY5MS41NDEzMzMgNzAzLjE0NjY2N2MtNS40NjEzMzMgMC0xMC4yNC0yLjA0OC0xNC4zMzYtNi4xNDQtOC4xOTItOC4xOTItOC4xOTItMjEuMTYyNjY3IDAtMjguNjcybDE3MC42NjY2NjctMTcwLjY2NjY2N2M4LjE5Mi04LjE5MiAyMS4xNjI2NjctOC4xOTIgMjguNjcyIDAgOC4xOTIgOC4xOTIgOC4xOTIgMjEuMTYyNjY3IDAgMjguNjcybC0xNzAuNjY2NjY3IDE3MC42NjY2NjdjLTQuMDk2IDQuMDk2LTguODc0NjY3IDYuMTQ0LTE0LjMzNiA2LjE0NHoiIGZpbGw9IiMwMDAwMDAiIHAtaWQ9IjEwMzAzIj48L3BhdGg+PC9zdmc+";

/**
 * 自定义退出系统函数
 * 与父页面交互
 */
function exitSystemCallback() {
  // 如果不是 iframe，这个方法啥也不做
  if (self === top) return;
  // 发送消息给父页面
  window.parent.postMessage("hideDrawIOEditor", window.origin);
}
window.EXIT_SYSTEM_CALLBACK = exitSystemCallback;

/**
 * 自定义图形提前引入
 * 其中 id 必须唯一，属性是想要添加的属性数组
 * 然后 properties 就是想要增加的属性，还可以内置默认值
 * content 是 svg 图形的 base64 编码，建议是 svg 图形，可扩展性更好
 * base64 编码需要转换后去掉 base64，否则会出现解析错误
 * FIXME: data:image/svg+xml;base64,PHN2ZyB0PSIxNzA5Njk1NTcw => data:image/svg+xml,PHN2ZyB0PSIxNzA5Njk1NTcw
 * FIXME: 注意，properties 所有的 key 都不能包含空格，否则会报错
 */
window.OPEN_GRAPH_CUSTOM_SHAPES_DEFAULT_PROPERTIES = [
  {
    key: "厂商",
    value: "",
  },
  {
    key: "产品名称",
    value: "",
  },
];
const OPEN_GRAPH_CUSTOM_SHAPES = [
  {
    title: "自定义网络",
    tags: ["custom", "network"],
    id: "custom-network",
    properties: [
      {
        key: "子网号",
        value: "",
      },
      {
        key: "子网掩码",
        value: "",
      },
      {
        key: "VLAN号",
        value: "",
      },
      {
        key: "安全域",
        value: "",
      },
    ],
    width: 128,
    height: 128,
    content:
      "data:image/svg+xml,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBjbGFzcz0iaWNvbiI+PHBhdGggZmlsbD0iIzE2NzdGRiIgZD0iTTUxMiA5NmMyMjkuNzYgMCA0MTYgMTg2LjI0IDQxNiA0MTZTNzQxLjc2IDkyOCA1MTIgOTI4IDk2IDc0MS43NiA5NiA1MTIgMjgyLjI0IDk2IDUxMiA5NnogbS0zMiA0NDhsLTEyNy4zMTczMzMgMC4wMjEzMzNjMC44OTYgMjAuNDggMi42MjQgNDAuNDA1MzMzIDUuMTIgNTkuNjY5MzM0bDEuOTg0IDE0LjI5MzMzMyAyLjQ3NDY2NiAxNS4yNTMzMzNjMTkuNzU0NjY3IDExMi44OTYgNjUuNzI4IDE5Ny43Mzg2NjcgMTE3Ljc2IDIyMi45OTczMzRMNDgwIDU0NHogbTE5MS4zMTczMzMgMC4wMjEzMzNMNTQ0IDU0NHYzMTIuMjM0NjY3YzUwLjg1ODY2Ny0yNC43MjUzMzMgOTUuOTM2LTEwNi4zNjggMTE2LjM3MzMzMy0yMTUuNTA5MzM0bDEuMzY1MzM0LTcuNDg4IDIuNDc0NjY2LTE1LjIzMmE3MDEuMDEzMzMzIDcwMS4wMTMzMzMgMCAwIDAgNy4xMDQtNzMuOTg0eiBtLTM4Mi42OTg2NjYgMEgxNjEuNDI5MzMzYzExLjY0OCAxMjkuMDY2NjY3IDkyLjk5MiAyMzguMDggMjA2LjEwMTMzNCAyODkuMDY2NjY3LTIyLjEyMjY2Ny0zNC4yODI2NjctNDAuMzYyNjY3LTc2LjQxNi01My43Ni0xMjQuMDMybC0zLjAyOTMzNC0xMS4wOTMzMzMtMy41Mi0xNC4xNjUzMzQtMy4yNDI2NjYtMTQuNDY0YTc0NC40OTA2NjcgNzQ0LjQ5MDY2NyAwIDAgMS0xNS4zNi0xMjUuMzEyeiBtNTczLjk1MiAwSDczNS4zNmE3NTIuNjYxMzMzIDc1Mi42NjEzMzMgMCAwIDEtMTIuNjcyIDExMi4xMjhsLTIuNjg4IDEzLjE4NC0zLjI0MjY2NyAxNC40NjQtMy41MiAxNC4xODY2NjdjLTEzLjY1MzMzMyA1Mi4xMzg2NjctMzIuOTYgOTguMTk3MzMzLTU2Ljc4OTMzMyAxMzUuMTA0IDExMy4xMDkzMzMtNTAuOTg2NjY3IDE5NC40NTMzMzMtMTYwIDIwNi4wOC0yODkuMDY2NjY3ek0zNjcuNTMwNjY3IDE5MC44OTA2NjdsLTIuODU4NjY3IDEuMzAxMzMzQzI1My4wMTMzMzMgMjQzLjczMzMzMyAxNzIuOTcwNjY3IDM1MiAxNjEuNDI5MzMzIDQ4MGgxMjcuMTg5MzM0YzEuNTM2LTM5LjA0IDUuODY2NjY3LTc2LjY5MzMzMyAxMi42NzItMTEyLjE0OTMzM2wyLjY4OC0xMy4xODQgMy4yNDI2NjYtMTQuNDY0IDMuNTItMTQuMTg2NjY3YzEzLjY1MzMzMy01Mi4xMzg2NjcgMzIuOTYtOTguMTk3MzMzIDU2Ljc4OTMzNC0xMzUuMTA0ek00ODAgMTY3Ljc2NTMzM2MtNTAuNzA5MzMzIDI0LjYxODY2Ny05NS42OCAxMDUuODk4NjY3LTExNi4yMDI2NjcgMjE0LjU5MmwtMS41MzYgOC40MDUzMzQtMi40NzQ2NjYgMTUuMjMyYTcwMS4wMzQ2NjcgNzAxLjAzNDY2NyAwIDAgMC03LjEwNCA3NC4wMDUzMzNINDgwVjE2Ny43NjUzMzN6IG0xNzYuNDY5MzMzIDIzLjE0NjY2N2wyLjU2IDQuMDUzMzMzYzIwLjkwNjY2NyAzMy40MjkzMzMgMzguMjI5MzMzIDczLjk4NCA1MS4wOTMzMzQgMTE5LjU1MmwzLjEzNiAxMS41MiAzLjUyIDE0LjE2NTMzNCAzLjI0MjY2NiAxNC40NjRjOC4zNjI2NjcgMzkuMjUzMzMzIDEzLjYzMiA4MS40MDggMTUuMzYgMTI1LjMzMzMzM2gxMjcuMTg5MzM0Yy0xMS42MjY2NjctMTI5LjA4OC05Mi45NzA2NjctMjM4LjEwMTMzMy0yMDYuMTAxMzM0LTI4OS4wNjY2Njd6TTU0NCAxNjcuNzY1MzMzTDU0NCA0ODBoMTI3LjMxNzMzM2E3MDcuMTM2IDcwNy4xMzYgMCAwIDAtNS4zMzMzMzMtNjEuMzc2bC0xLjc3MDY2Ny0xMi42MjkzMzMtMi40NzQ2NjYtMTUuMjMyYy0xOS43NTQ2NjctMTEyLjg3NDY2Ny02NS43MDY2NjctMTk3LjcxNzMzMy0xMTcuNzE3MzM0LTIyMi45OTczMzR6Ii8+PC9zdmc+;",
  },
  {
    title: "自定义服务器",
    tags: ["custom", "network", "server"],
    id: "custom-server",
    properties: [
      {
        key: "厂商",
        value: "",
      },
      {
        key: "产品名称",
        value: "",
      },
    ],
    width: 128,
    height: 128,
    content:
      "data:image/svg+xml,PHN2ZyB0PSIxNzA5Njk1NzMxMDE1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDE1MDAgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYwNjkiIGlkPSJteF9uXzE3MDk2OTU3MzEwMTYiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48cGF0aCBkPSJNMCAzMTEuNTUydjM5My45NjYzNDVjMi41ODY0ODMgMTYxLjU0NDgyOCAzMzcuNDE2ODI4IDMxNi4zODA2OSA3NDkuOTkxNzI0IDMxNi4zODA2ODkgNDEyLjYwMTM3OSAwIDc0Ny4yNTUxNzItMTU0LjgzNTg2MiA3NTAuMDA5Mzc5LTMxNi4zODA2ODlWMzExLjU1MkgweiIgZmlsbD0iIzBEQkE5MCIgcC1pZD0iNjA3MCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAwLjAwMTEwMyAzMTAuMzQyNjIxYzAgMTcxLjM3ODc1OS0zMzUuODYzMTcyIDMzNC40NzcyNDEtNzUwLjAwMDU1MSAzMzQuNDc3MjQxUzAgNDgxLjcyMTM3OSAwIDMxMC4zNTE0NDggMzM1Ljg2MzE3MiAwIDc0OS45OTE3MjQgMGM0MTQuMTQ2MjA3IDAgNzUwLjAwOTM3OSAxMzguNzk2MTM4IDc1MC4wMDkzNzkgMzEwLjM0MjYyMXoiIGZpbGw9IiMyMEQyQTYiIHAtaWQ9IjYwNzEiPjwvcGF0aD48cGF0aCBkPSJNNjg0LjY1ODc1OSAxNTIuOTI5MTAzaDQ5LjgyMjg5NmwwLjE3NjU1MiAxMDguOTY3NzI1aDUwLjg1NTcyNGwtMS4yMDA1NTItMTA4Ljk2NzcyNWg0OS44MjI4OTdMNzU4Ljc5MjgyOCAyMy40NDYwNjlsLTc0LjEzNDA2OSAxMjkuNDgzMDM0eiBtMTAxLjU1MjU1MSAxODIuNDEzMjQyaC01MS41NTMxMDNsMC4xNzY1NTIgMTI3LjQxNzM3OWgtNTIuNzYyNDgzbDc5LjY1MTMxIDEyOS42NTA3NTkgNzguNDUwNzU5LTEyOS42NTA3NTloLTUyLjc2MjQ4M2wtMS4yMDA1NTItMTI3LjQxNzM3OXogbTIwOS40Nzg2MjEtNjIuNTg3NTg2bC0yLjQwOTkzMS01MS43MjA4MjgtMTI0LjMxMDA2OSA3Ny41OTQ0ODMgMTMxLjcxNjQxNCA3Ny43NTMzNzktMi40MDk5MzEtNTEuNzI5NjU1aDIxNy41ODIzNDVsLTQuNDc1NTg3LTUxLjg5NzM3OWgtMjE1LjY5MzI0MXogbS00NzEuMzc1NDQ4IDBIMzA4Ljc4ODk2NmwtMy45NjM1ODcgNTEuOTA2MjA3SDUyMi40MTY1NTJsLTEuODk3OTMxIDUxLjcyMDgyNyAxMzAuODYwMTM4LTc3Ljc2MjIwNy0xMjQuOTk4NjIxLTc3LjU4NTY1NS0yLjA2NTY1NSA1MS43Mjk2NTV6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI2MDcyIj48L3BhdGg+PC9zdmc+",
  },
];

window.OPEN_GRAPH_CUSTOM_SHAPES = OPEN_GRAPH_CUSTOM_SHAPES;

/**
 * 这里可以做一些初始化逻辑，比如公司内置的一些信息，全局变量等等
 * 抑或是初始化获取用户登录信息等等
 */
function graphInit() {
  // 图表程序初始化逻辑
  console.log("==========> 这里做初始化逻辑 <==========");
}

window.GRAPH_INIT = graphInit;

/**
 * 自动保存逻辑
 * FIXME: 注意，自动保存只有在编辑的时候才会生效
 */
window.autosave = {
  enable: false,
  interval: 1000 * 60, // 1分钟自动保存一次
};

/**
 * 常用变量配置
 */
window.CONST_MSG = {
  CREATE_DIAGRAM_SUCCESS: "图表创建成功",
  CREATE_DIAGRAM_FAIL: "图表创建失败",
  UPDATE_DIAGRAM_SUCCESS: "图表更新成功",
  UPDATE_DIAGRAM_FAIL: "图表更新失败",
  DELETE_DIAGRAM_SUCCESS: "图表删除成功",
  DELETE_DIAGRAM_FAIL: "图表删除失败",
  FETCH_DIAGRAM_SUCCESS: "图表获取成功",
  FETCH_DIAGRAM_FAIL: "图表获取失败",
  SAVE_DIAGRAM_SUCCESS: "图表保存成功",
  SAVE_DIAGRAM_FAIL: "图表保存失败",
};

/**
 * SVG 外接方法
 */
function downloadSVG(svgData, fileName) {
  console.log("生成的 SVG 数据：", svgData, fileName);
  // 为 SVG 数据创建 Blob 对象
  var blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });

  // 创建一个指向 Blob 的 URL
  var url = URL.createObjectURL(blob);

  // 创建一个隐藏的 a 元素，设置下载属性并模拟点击
  var downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = fileName; // 设定下载文件名
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // 清理：撤销 Blob 对象的 URL 并移除 a 元素
  URL.revokeObjectURL(url);
  document.body.removeChild(downloadLink);
}

/**
 * 如果不设置这个方法，那么就不会处理 SVG 数据
 * 如果设置了这个方法，就会在保存的时候将 svg 数据赋值给 window.svgData
 */
window.DEAL_SVG_CALLBACK = function (svgData, filename) {
  console.log(svgData, filename);
};
