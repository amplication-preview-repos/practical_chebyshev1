import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  isAdmin?: BooleanNullableFilter;
  reviews?: ReviewListRelationFilter;
  orders?: OrderListRelationFilter;
};
