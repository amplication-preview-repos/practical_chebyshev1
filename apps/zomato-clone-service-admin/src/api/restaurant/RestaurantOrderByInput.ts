import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  phone?: SortOrder;
  owner?: SortOrder;
  name?: SortOrder;
};
