# umi-request-cancel

umi-request 取消请求第三方库, 你可以很方便的中断 umi-request 请求

[中文文档](https://github.com/itkui/umi-request-cancel/blob/master/README.md)|[英文文档](https://github.com/itkui/umi-request-cancel/blob/master/en.README.md)

[![NPM version](https://img.shields.io/badge/npm-v1.1.0-blue?style=flat)](https://www.npmjs.com/package/umi-request-cancel)

## 安装

```shell
yarn add umi-request-cancel
npm install --save umi-request-cancel
```

## 扩展属性

| 属性                                                                | 描述                                    | 类型             | 可选值                           | 默认值                 |
| ------------------------------------------------------------------- | --------------------------------------- | ---------------- | -------------------------------- | ---------------------- |
| cancelKey                                                           | 中断请求唯一 ID, 最高优先级             | String           |                                  |                        |
| urlUnique                                                           | 使用 URL 进行比较                       | String \| Regexp | 'host'、'path'、'search'、RegExp |                        |
| [urlBase](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL) | URL 构造函数的第二个参数                | DOMString        |                                  | window.location.origin |
| urlUniqueList                                                       | 匹配地址集合，可以和`urlUnique`共同使用 | Array            |                                  |                        |

## 参数详情

### urlUnique

- -- host [string]

  使用请求地址的 host 进行比较，如果两个请求匹配内容相同，则会中断上一个请求

- -- path [string]

  使用请求地址的 host 与 pathname 进行比较，如果两个请求匹配内容相同，则会中断上一个请求

- -- search [string]

  使用请求地址的 host 与 pathname 与 search 进行比较，如果两个请求匹配内容相同，则会中断上一个请求

- -- RegExp [RegExp]

  使用正则表达式对两个请求的 href 进行比较，如果两个请求匹配内容相同，则会中断上一个请求

## 案例

```javascript
import request, { extend } from "umi-request-cancel";

const req = extend({
  timeout: 3000,
  urlBase: process.env.NODE_ENV === 'development' ? 'http://localhost': ''
  urlUnique: 'search'
})

/* cancelKey */
request
  .get("/api/v1/xxx?id=1", {
    cancelKey: "cancelKey1", // 第一优先级
  })

```

## 感谢

[umi-request](#https://github.com/umijs/umi-request)
