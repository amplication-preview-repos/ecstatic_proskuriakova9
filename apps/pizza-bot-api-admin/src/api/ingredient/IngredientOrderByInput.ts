import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isAvailable?: SortOrder;
  name?: SortOrder;
};
