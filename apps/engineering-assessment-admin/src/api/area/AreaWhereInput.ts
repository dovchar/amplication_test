import { CriterionWhereUniqueInput } from "../criterion/CriterionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AreaWhereInput = {
  criteria?: CriterionWhereUniqueInput;
  id?: StringFilter;
  title?: StringFilter;
};
