import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const MenuShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="itemName" source="itemName" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="restaurant"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
