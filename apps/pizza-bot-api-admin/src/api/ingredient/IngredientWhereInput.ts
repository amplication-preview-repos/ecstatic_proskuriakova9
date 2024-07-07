import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IngredientWhereInput = {
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
