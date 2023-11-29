import { CriterionWhereUniqueInput } from "../criterion/CriterionWhereUniqueInput";

export type AreaCreateInput = {
  criteria?: CriterionWhereUniqueInput | null;
  title: string;
};
