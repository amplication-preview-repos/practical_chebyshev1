import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  itemName?: string | null;
  description?: string | null;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
