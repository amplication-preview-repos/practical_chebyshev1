import { InputJsonValue } from "../../types";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  isAdmin?: boolean | null;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  orders?: OrderCreateNestedManyWithoutUsersInput;
};
