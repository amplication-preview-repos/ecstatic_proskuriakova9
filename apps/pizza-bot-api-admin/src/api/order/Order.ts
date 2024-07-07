import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items?: Array<"Option1">;
  totalAmount: number | null;
  status?: "Option1" | null;
  orderedAt: Date | null;
  user?: User | null;
};
