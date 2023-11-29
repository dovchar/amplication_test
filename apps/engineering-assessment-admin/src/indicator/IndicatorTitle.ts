import { Indicator as TIndicator } from "../api/indicator/Indicator";

export const INDICATOR_TITLE_FIELD = "title";

export const IndicatorTitle = (record: TIndicator): string => {
  return record.title?.toString() || String(record.id);
};
