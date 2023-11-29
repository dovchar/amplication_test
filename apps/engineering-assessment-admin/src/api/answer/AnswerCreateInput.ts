import { IndicatorWhereUniqueInput } from "../indicator/IndicatorWhereUniqueInput";

export type AnswerCreateInput = {
  indicators?: IndicatorWhereUniqueInput | null;
  projectId?: string | null;
  text?: string | null;
};
