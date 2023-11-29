import { IndicatorWhereUniqueInput } from "../indicator/IndicatorWhereUniqueInput";

export type ProjectCreateInput = {
  desciprion?: string | null;
  indicators?: IndicatorWhereUniqueInput | null;
  linkToBpm?: string | null;
  linkToConfluence?: string | null;
  manager?: string | null;
  team?: string | null;
  title?: string | null;
};
