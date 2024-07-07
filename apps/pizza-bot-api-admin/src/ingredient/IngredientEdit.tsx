import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const IngredientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isAvailable" source="isAvailable" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
