import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  items?: SortOrder;
  totalAmount?: SortOrder;
  status?: SortOrder;
  orderedAt?: SortOrder;
  userId?: SortOrder;
};
