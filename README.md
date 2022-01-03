# umi-request-cancel

umi-request cancel lib, you can easy cancel your request. just add option cancelKey.

[![NPM version](https://img.shields.io/badge/npm-v1.0.2-blue?style=flat)](https://www.npmjs.com/package/umi-request-cancel)

## Installation

```shell
yarn add umi-request-cancel
npm install --save umi-request-cancel
```

## Example

```javascript
import request from "umi-request-cancel";

request
  .get("/api/v1/xxx?id=1", {
    cancelKey: "cancelKey1",
  })
  .then(function (response) {
    console.log(response);
  });
```

## Thanks

[umi-request](#https://github.com/umijs/umi-request)
