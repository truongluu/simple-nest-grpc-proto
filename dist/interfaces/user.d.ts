import { Observable } from "rxjs";
import { Timestamp } from "./google/protobuf/timestamp";
export declare enum UserStatus {
    ACTIVE = 0,
    INACTIVE = 1,
    SUSPENDED = 2,
    UNRECOGNIZED = -1
}
export interface GetUserRequest {
    id: number;
}
export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}
export interface UpdateUserRequest {
    id: number;
    name?: string | undefined;
    email?: string | undefined;
}
export interface DeleteUserRequest {
    id: number;
}
export interface DeleteUserResponse {
    success: boolean;
}
export interface ListUsersRequest {
    pageSize: number;
    pageNumber: number;
}
export interface User {
    id: number;
    name: string;
    email: string;
    status: UserStatus;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface UserServiceClient {
    getUser(request: GetUserRequest): Observable<User>;
    createUser(request: CreateUserRequest): Observable<User>;
    updateUser(request: UpdateUserRequest): Observable<User>;
    deleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;
    listUsers(request: ListUsersRequest): Observable<User>;
}
export interface UserServiceController {
    getUser(request: GetUserRequest): Promise<User> | Observable<User> | User;
    createUser(request: CreateUserRequest): Promise<User> | Observable<User> | User;
    updateUser(request: UpdateUserRequest): Promise<User> | Observable<User> | User;
    deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
    listUsers(request: ListUsersRequest): Observable<User>;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
