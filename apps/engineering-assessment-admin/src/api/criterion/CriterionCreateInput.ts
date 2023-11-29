import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type CriterionCreateInput = {
  areaId?: AreaWhereUniqueInput | null;
  title?: string | null;
};
