import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  isAdmin?: boolean | null;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  orders?: OrderUpdateManyWithoutUsersInput;
};
