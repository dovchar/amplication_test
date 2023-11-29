import { Criterion } from "../criterion/Criterion";

export type Area = {
  createdAt: Date;
  criteria?: Criterion | null;
  id: string;
  title: string;
  updatedAt: Date;
};
