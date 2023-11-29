import { AnswerWhereUniqueInput } from "../answer/AnswerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type IndicatorCreateInput = {
  answer?: AnswerWhereUniqueInput | null;
  projectId?: ProjectWhereUniqueInput | null;
  score?: string | null;
  title?: string | null;
  userId?: string | null;
};
