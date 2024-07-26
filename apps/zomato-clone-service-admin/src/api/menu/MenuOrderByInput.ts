import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemName?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  restaurantId?: SortOrder;
};
