"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_SERVICE_NAME = exports.OrderServiceControllerMethods = exports.OrderStatus = void 0;
const microservices_1 = require("@nestjs/microservices");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["PROCESSING"] = 1] = "PROCESSING";
    OrderStatus[OrderStatus["SHIPPED"] = 2] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 3] = "DELIVERED";
    OrderStatus[OrderStatus["CANCELLED"] = 4] = "CANCELLED";
    OrderStatus[OrderStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
function OrderServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["createOrder", "getOrder", "updateOrderStatus", "listOrders"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("OrderService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("OrderService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.OrderServiceControllerMethods = OrderServiceControllerMethods;
exports.ORDER_SERVICE_NAME = "OrderService";
