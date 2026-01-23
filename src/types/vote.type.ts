import type { Option } from "./option.type";
import type { Voter } from "./voter.type";
import type { Status } from "./status.type";

export type Vote = {
  id: string;
  creator: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  status: Status;
  options: Option[];
  voter: Voter[];
  participants: number;
};
