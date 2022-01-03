import request from "umi-request";
declare module "umi-request-cancel" {
    interface RequestOptionsInit {
        cancelKey?: string;
    }
}
export * from "umi-request";
export default request;
