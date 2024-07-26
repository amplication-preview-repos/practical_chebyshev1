import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Restaurant } from "../restaurant/Restaurant";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  totalAmount: number | null;
  items: JsonValue;
  user?: User | null;
  restaurant?: Restaurant | null;
};
