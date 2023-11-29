import { Indicator } from "../indicator/Indicator";

export type Project = {
  createdAt: Date;
  desciprion: string | null;
  id: string;
  indicators?: Indicator | null;
  linkToBpm: string | null;
  linkToConfluence: string | null;
  manager: string | null;
  team: string | null;
  title: string | null;
  updatedAt: Date;
};
