import { Indicator } from "../indicator/Indicator";

export type Answer = {
  createdAt: Date;
  id: string;
  indicators?: Indicator | null;
  projectId: string | null;
  text: string | null;
  updatedAt: Date;
};
