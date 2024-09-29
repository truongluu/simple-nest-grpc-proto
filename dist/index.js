"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROTO_PATH = void 0;
const path_1 = require("path");
__exportStar(require("./interfaces/order"), exports);
__exportStar(require("./interfaces/product"), exports);
__exportStar(require("./interfaces/user"), exports);
exports.PROTO_PATH = {
    order: (0, path_1.join)(__dirname, "./proto/order.proto"),
    product: (0, path_1.join)(__dirname, "./proto/product.proto"),
    user: (0, path_1.join)(__dirname, "./proto/user.proto"),
};
