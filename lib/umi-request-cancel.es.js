import request__default from "umi-request";
export * from "umi-request";
export { default } from "umi-request";
import easyCancel from "easy-umi-request-cancel";
request__default.use(easyCancel, { core: true });
