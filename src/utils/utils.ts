import { ResponseError } from "umi-request";
import { RequestOptions } from "../types";
import { setController } from './abort'
import { symbolCancelKey, urlUniqueCancelKey, urlUniqueListCancelKey } from "./cancelKey";

export const errorMerge = (options: RequestOptions, handle: (error: ResponseError<any>) => void) => {
  const _errorHandler = options.errorHandler;
  options.errorHandler = (error) => {
    handle(error)
    if (_errorHandler) {
      _errorHandler(error);
    } else {
      throw error;
    }
  };
}

export const cancelKeyCheck = (options: RequestOptions, url: string) => {
  const { cancelKey, urlUnique, urlUniqueList } = options

  if (cancelKey) {
    return symbolCancelKey(cancelKey)
  }

  if (urlUniqueList) {
    return urlUniqueListCancelKey(options)
  }

  if (urlUnique) {
    return urlUniqueCancelKey(options)
  }
}

export const signalMerge = (options: RequestOptions, cancelKey: Symbol) => {
  // 如果有传递abort key的参数，则默认相同标识的请求同时发生会自动中断上一次请求。

  const { signal } = setController(cancelKey)

  options.signal = signal;
  delete options.cancelKey;

  return cancelKey
}