import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="itemName" source="itemName" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
