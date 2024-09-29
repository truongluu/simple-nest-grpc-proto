import { join } from "path";
export * from "./interfaces/order";
export * from "./interfaces/product";
export * from "./interfaces/user";

export const PROTO_PATH = {
  order: join(__dirname, "../proto/order.proto"),
  product: join(__dirname, "../proto/product.proto"),
  user: join(__dirname, "../proto/user.proto"),
};
