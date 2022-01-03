import request from "umi-request";

const abortMaps = new Map<Symbol, AbortController>();

request.use(
  async ({ req: { options }, req }, next) => {
    if (!Object.prototype.hasOwnProperty.call(options, "cancelKey")) {
      return await next();
    }
    // 如果有传递abort key的参数，则默认相同标识的请求同时发生会自动中断上一次请求。
    const cancelKey = options["cancelKey"];
    let controller: AbortController;

    if (!abortMaps.has(cancelKey)) {
      controller = new AbortController();
      abortMaps.set(cancelKey, controller);
    } else {
      controller = abortMaps.get(cancelKey)!;
      const { abort } = controller;
      abort.call(controller);
      controller = new AbortController();
      abortMaps.set(cancelKey, controller);
    }
    const { signal } = controller;
    req.options.signal = signal;
    delete req.options.cancelKey;

    const _errorHandler = req.options.errorHandler;
    req.options.errorHandler = (error) => {
      // 如果出现非中断请求错误，这里需要将此次的AbortController清除掉，防止内存泄漏
      if (error.type !== "AbortError") {
        abortMaps.delete(cancelKey);
      }
      if (_errorHandler) {
        _errorHandler(error);
      } else {
        throw error;
      }
    };
    await next();
    abortMaps.delete(cancelKey);
  },
  { core: true }
);

declare module "umi-request-cancel" {
  export interface RequestOptionsInit {
    cancelKey?: string;
  }
}

export * from "umi-request";
export default request;
