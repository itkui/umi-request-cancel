import { Context } from "umi-request";

declare global {
  export type UrlUnique = 'host' | 'path' | 'search' | RegExp
  export interface CancelOptions {
    cancelKey?: string;
    urlUnique?: UrlUnique;
    urlBase?: string;
    urlUniqueList?: string[];
  }
}

declare module "umi-request" {
  interface RequestOptionsInit extends CancelOptions { }
}

type Options = Context["req"]["options"];

export type RequestOptions = CancelOptions & Options;