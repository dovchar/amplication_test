import { StringFilter } from "../../util/StringFilter";
import { IndicatorWhereUniqueInput } from "../indicator/IndicatorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerWhereInput = {
  id?: StringFilter;
  indicators?: IndicatorWhereUniqueInput;
  projectId?: StringNullableFilter;
  text?: StringNullableFilter;
};
