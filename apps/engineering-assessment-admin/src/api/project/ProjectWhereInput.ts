import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IndicatorWhereUniqueInput } from "../indicator/IndicatorWhereUniqueInput";

export type ProjectWhereInput = {
  desciprion?: StringNullableFilter;
  id?: StringFilter;
  indicators?: IndicatorWhereUniqueInput;
  linkToBpm?: StringNullableFilter;
  linkToConfluence?: StringNullableFilter;
  manager?: StringNullableFilter;
  team?: StringNullableFilter;
  title?: StringNullableFilter;
};
