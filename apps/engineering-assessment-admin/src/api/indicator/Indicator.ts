import { Answer } from "../answer/Answer";
import { Project } from "../project/Project";

export type Indicator = {
  answer?: Answer | null;
  createdAt: Date;
  id: string;
  projectId?: Project | null;
  score: string | null;
  title: string | null;
  updatedAt: Date;
  userId: string | null;
};
