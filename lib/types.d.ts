import { Context } from "umi-request";
declare global {
    export type UrlUnique = 'host' | 'path' | 'search' | RegExp;
    export interface CancelOptions {
        cancelKey?: string;
        urlUnique?: UrlUnique;
        urlBase?: string;
        urlUniqueList?: string[];
    }
}
declare module "umi-request" {
    interface RequestOptionsInit extends CancelOptions {
    }
}
declare type Options = Context["req"]["options"];
export declare type RequestOptions = CancelOptions & Options;
export {};
