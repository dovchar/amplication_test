import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CriterionWhereInput = {
  areaId?: AreaWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
