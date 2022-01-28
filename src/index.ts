import request from "umi-request";
import easyCancel from 'easy-umi-request-cancel'
request.use(
  easyCancel,
  { core: true }
);

export * from "umi-request";
export default request;
