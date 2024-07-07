import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  status?: "Option1";
  orderedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
