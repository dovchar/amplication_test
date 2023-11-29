import { AnswerWhereUniqueInput } from "../answer/AnswerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IndicatorWhereInput = {
  answer?: AnswerWhereUniqueInput;
  id?: StringFilter;
  projectId?: ProjectWhereUniqueInput;
  score?: StringNullableFilter;
  title?: StringNullableFilter;
  userId?: StringNullableFilter;
};
