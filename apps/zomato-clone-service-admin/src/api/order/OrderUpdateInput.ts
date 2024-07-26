import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  totalAmount?: number | null;
  items?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
