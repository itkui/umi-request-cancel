export * from 'umi-request'
import request from "umi-request";

export type UrlUnique = 'host' | 'path' | 'search' | RegExp;

export interface CancelOptions {
  cancelKey?: string;
  urlUnique?: UrlUnique;
  urlBase?: string;
  urlUniqueList?: string[];
}

declare module "umi-request-cancel" {
  interface RequestOptionsInit extends CancelOptions {
  }
}

export default request;
