import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const MenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
