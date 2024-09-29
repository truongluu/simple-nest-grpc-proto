"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_SERVICE_NAME = exports.ProductServiceControllerMethods = exports.ProductStatus = void 0;
const microservices_1 = require("@nestjs/microservices");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus[ProductStatus["AVAILABLE"] = 0] = "AVAILABLE";
    ProductStatus[ProductStatus["OUT_OF_STOCK"] = 1] = "OUT_OF_STOCK";
    ProductStatus[ProductStatus["DISCONTINUED"] = 2] = "DISCONTINUED";
    ProductStatus[ProductStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
function ProductServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getProduct", "createProduct", "updateProduct", "deleteProduct", "listProducts"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ProductService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ProductService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ProductServiceControllerMethods = ProductServiceControllerMethods;
exports.PRODUCT_SERVICE_NAME = "ProductService";
