import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  indicatorsId?: SortOrder;
  projectId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
