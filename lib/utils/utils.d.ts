import { ResponseError } from "umi-request";
import { RequestOptions } from "../types";
export declare const errorMerge: (options: RequestOptions, handle: (error: ResponseError<any>) => void) => void;
export declare const cancelKeyCheck: (options: RequestOptions, url: string) => symbol;
export declare const signalMerge: (options: RequestOptions, cancelKey: Symbol) => Symbol;
