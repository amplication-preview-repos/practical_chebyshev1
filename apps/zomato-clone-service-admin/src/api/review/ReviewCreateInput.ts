import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ReviewCreateInput = {
  rating?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
