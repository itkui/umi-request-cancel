"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const umi_request_1 = __importDefault(require("umi-request"));
const abortMaps = new Map();
umi_request_1.default.use(({ req: { options }, req }, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!Object.prototype.hasOwnProperty.call(options, 'cancelKey')) {
        return yield next();
    }
    // 如果有传递abort key的参数，则默认相同标识的请求同时发生会自动中断上一次请求。
    const cancelKey = options['cancelKey'];
    let controller;
    if (!abortMaps.has(cancelKey)) {
        controller = new AbortController();
        abortMaps.set(cancelKey, controller);
    }
    else {
        controller = abortMaps.get(cancelKey);
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
        if (error.type !== 'AbortError') {
            abortMaps.delete(cancelKey);
        }
        if (_errorHandler) {
            _errorHandler(error);
        }
        else {
            throw error;
        }
    };
    yield next();
    abortMaps.delete(cancelKey);
}), { core: true });
__exportStar(require("umi-request"), exports);
exports.default = umi_request_1.default;
