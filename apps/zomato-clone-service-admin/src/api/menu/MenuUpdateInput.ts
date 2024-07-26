import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  itemName?: string | null;
  description?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
