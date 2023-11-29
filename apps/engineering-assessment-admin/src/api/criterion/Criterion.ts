import { Area } from "../area/Area";

export type Criterion = {
  areaId?: Area | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
