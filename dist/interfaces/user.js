"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SERVICE_NAME = exports.UserServiceControllerMethods = exports.UserStatus = void 0;
const microservices_1 = require("@nestjs/microservices");
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["ACTIVE"] = 0] = "ACTIVE";
    UserStatus[UserStatus["INACTIVE"] = 1] = "INACTIVE";
    UserStatus[UserStatus["SUSPENDED"] = 2] = "SUSPENDED";
    UserStatus[UserStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
function UserServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getUser", "createUser", "updateUser", "deleteUser", "listUsers"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UserServiceControllerMethods = UserServiceControllerMethods;
exports.USER_SERVICE_NAME = "UserService";
