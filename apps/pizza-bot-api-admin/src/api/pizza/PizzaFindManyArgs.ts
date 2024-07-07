import { PizzaWhereInput } from "./PizzaWhereInput";
import { PizzaOrderByInput } from "./PizzaOrderByInput";

export type PizzaFindManyArgs = {
  where?: PizzaWhereInput;
  orderBy?: Array<PizzaOrderByInput>;
  skip?: number;
  take?: number;
};
