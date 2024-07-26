import { Menu } from "../menu/Menu";
import { Review } from "../review/Review";
import { Order } from "../order/Order";

export type Restaurant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  phone: string | null;
  owner: string | null;
  name: string | null;
  menus?: Array<Menu>;
  reviews?: Array<Review>;
  orders?: Array<Order>;
};
