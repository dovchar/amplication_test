import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "projectId";

export const AnswerTitle = (record: TAnswer): string => {
  return record.projectId?.toString() || String(record.id);
};
