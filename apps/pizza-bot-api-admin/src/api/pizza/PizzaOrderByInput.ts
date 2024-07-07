import { SortOrder } from "../../util/SortOrder";

export type PizzaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  ingredients?: SortOrder;
};
