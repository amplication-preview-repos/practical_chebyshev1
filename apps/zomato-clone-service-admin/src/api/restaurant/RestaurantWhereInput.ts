import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type RestaurantWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  phone?: StringNullableFilter;
  owner?: StringNullableFilter;
  name?: StringNullableFilter;
  menus?: MenuListRelationFilter;
  reviews?: ReviewListRelationFilter;
  orders?: OrderListRelationFilter;
};
