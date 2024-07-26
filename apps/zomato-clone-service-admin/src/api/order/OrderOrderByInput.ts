import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  items?: SortOrder;
  userId?: SortOrder;
  restaurantId?: SortOrder;
};
