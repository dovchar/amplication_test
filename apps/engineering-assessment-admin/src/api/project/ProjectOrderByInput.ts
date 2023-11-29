import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  desciprion?: SortOrder;
  id?: SortOrder;
  indicatorsId?: SortOrder;
  linkToBpm?: SortOrder;
  linkToConfluence?: SortOrder;
  manager?: SortOrder;
  team?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
