import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";
import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  phone?: string | null;
  owner?: string | null;
  name?: string | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;
};
