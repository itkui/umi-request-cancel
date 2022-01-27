# umi-request-cancel

umi-request cancel lib, you can easy cancel your request.

[Chinese documents](https://github.com/itkui/umi-request-cancel/blob/master/README.md)|[English documents](https://github.com/itkui/umi-request-cancel/blob/master/en.README.md)

[![NPM version](https://img.shields.io/badge/npm-v1.1.0-blue?style=flat)](https://www.npmjs.com/package/umi-request-cancel)

## Installation

```shell
yarn add umi-request-cancel
npm install --save umi-request-cancel
```

## ExtraOptions

| Parameter                                                           | Description                                              | Type             | Optional Value                   | Default Value          |
| ------------------------------------------------------------------- | -------------------------------------------------------- | ---------------- | -------------------------------- | ---------------------- |
| cancelKey                                                           | cancel request unique ID, top level                      | String           |                                  |                        |
| urlUnique                                                           | cancel request compare with URL                          | String \| Regexp | 'host'、'path'、'search'、RegExp |                        |
| [urlBase](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL) | URL constructor params                                   | DOMString        |                                  | window.location.origin |
| urlUniqueList                                                       | list to match, it can be use with urlUnique to match url | Array            |                                  |                        |

## OptionDetail

### urlUnique

- -- host [string]

  compare with host, If it is the same, cancel the previous request.

- -- path [string]

  compare with host and pathname, If it is the same, cancel the previous request.

- -- search [string]

  compare with host and pathname and search, If it is the same, cancel the previous request.

- -- RegExp [RegExp]

  compare href address with `regexp`, If it is test true, cancel the previous request.

## Example

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

## Thanks

[umi-request](#https://github.com/umijs/umi-request)
