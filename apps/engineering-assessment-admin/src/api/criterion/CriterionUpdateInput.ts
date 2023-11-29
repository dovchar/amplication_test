import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type CriterionUpdateInput = {
  areaId?: AreaWhereUniqueInput | null;
  title?: string | null;
};
