import { Criterion as TCriterion } from "../api/criterion/Criterion";

export const CRITERION_TITLE_FIELD = "title";

export const CriterionTitle = (record: TCriterion): string => {
  return record.title?.toString() || String(record.id);
};
