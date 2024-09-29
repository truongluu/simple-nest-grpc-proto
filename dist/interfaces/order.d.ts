import { Observable } from "rxjs";
import { Timestamp } from "./google/protobuf/timestamp";
import { Product } from "./product";
import { User } from "./user";
export declare enum OrderStatus {
    PENDING = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
    UNRECOGNIZED = -1
}
export interface CreateOrderRequest {
    userId: number;
    items: OrderItem[];
}
export interface OrderItem {
    productId: number;
    quantity: number;
}
export interface GetOrderRequest {
    id: number;
}
export interface UpdateOrderStatusRequest {
    id: number;
    newStatus: OrderStatus;
}
export interface ListOrdersRequest {
    pageSize: number;
    pageNumber: number;
    userId?: number | undefined;
}
export interface Order {
    id: number;
    userId: number;
    user: User | undefined;
    items: OrderItem[];
    products: Product[];
    totalAmount: number;
    status: OrderStatus;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface OrderServiceClient {
    createOrder(request: CreateOrderRequest): Observable<Order>;
    getOrder(request: GetOrderRequest): Observable<Order>;
    updateOrderStatus(request: UpdateOrderStatusRequest): Observable<Order>;
    listOrders(request: ListOrdersRequest): Observable<Order>;
}
export interface OrderServiceController {
    createOrder(request: CreateOrderRequest): Promise<Order> | Observable<Order> | Order;
    getOrder(request: GetOrderRequest): Promise<Order> | Observable<Order> | Order;
    updateOrderStatus(request: UpdateOrderStatusRequest): Promise<Order> | Observable<Order> | Order;
    listOrders(request: ListOrdersRequest): Observable<Order>;
}
export declare function OrderServiceControllerMethods(): (constructor: Function) => void;
export declare const ORDER_SERVICE_NAME = "OrderService";
