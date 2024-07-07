import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  items?: Array<"Option1">;
  totalAmount?: number | null;
  status?: "Option1" | null;
  orderedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
