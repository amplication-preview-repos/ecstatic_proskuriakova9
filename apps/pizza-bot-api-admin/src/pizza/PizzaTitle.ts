import { Pizza as TPizza } from "../api/pizza/Pizza";

export const PIZZA_TITLE_FIELD = "name";

export const PizzaTitle = (record: TPizza): string => {
  return record.name?.toString() || String(record.id);
};
