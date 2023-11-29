import { IndicatorWhereUniqueInput } from "../indicator/IndicatorWhereUniqueInput";

export type AnswerUpdateInput = {
  indicators?: IndicatorWhereUniqueInput | null;
  projectId?: string | null;
  text?: string | null;
};
