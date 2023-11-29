import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "title";

export const AreaTitle = (record: TArea): string => {
  return record.title?.toString() || String(record.id);
};
