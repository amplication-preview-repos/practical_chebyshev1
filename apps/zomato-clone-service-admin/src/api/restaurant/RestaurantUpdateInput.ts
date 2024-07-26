import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";
import { ReviewUpdateManyWithoutRestaurantsInput } from "./ReviewUpdateManyWithoutRestaurantsInput";
import { OrderUpdateManyWithoutRestaurantsInput } from "./OrderUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  phone?: string | null;
  owner?: string | null;
  name?: string | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  reviews?: ReviewUpdateManyWithoutRestaurantsInput;
  orders?: OrderUpdateManyWithoutRestaurantsInput;
};
