import { Observable } from "rxjs";
import { Timestamp } from "./google/protobuf/timestamp";
export declare enum ProductStatus {
    AVAILABLE = 0,
    OUT_OF_STOCK = 1,
    DISCONTINUED = 2,
    UNRECOGNIZED = -1
}
export interface GetProductRequest {
    id: number;
}
export interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
    categoryId: number;
}
export interface UpdateProductRequest {
    id: number;
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    categoryId?: number | undefined;
}
export interface DeleteProductRequest {
    id: number;
}
export interface DeleteProductResponse {
    success: boolean;
}
export interface ListProductsRequest {
    pageSize: number;
    pageNumber: number;
    categoryId?: number | undefined;
}
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    status: ProductStatus;
    createdAt: Timestamp | undefined;
    updatedAt: Timestamp | undefined;
}
export interface ProductServiceClient {
    getProduct(request: GetProductRequest): Observable<Product>;
    createProduct(request: CreateProductRequest): Observable<Product>;
    updateProduct(request: UpdateProductRequest): Observable<Product>;
    deleteProduct(request: DeleteProductRequest): Observable<DeleteProductResponse>;
    listProducts(request: ListProductsRequest): Observable<Product>;
}
export interface ProductServiceController {
    getProduct(request: GetProductRequest): Promise<Product> | Observable<Product> | Product;
    createProduct(request: CreateProductRequest): Promise<Product> | Observable<Product> | Product;
    updateProduct(request: UpdateProductRequest): Promise<Product> | Observable<Product> | Product;
    deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> | Observable<DeleteProductResponse> | DeleteProductResponse;
    listProducts(request: ListProductsRequest): Observable<Product>;
}
export declare function ProductServiceControllerMethods(): (constructor: Function) => void;
export declare const PRODUCT_SERVICE_NAME = "ProductService";
