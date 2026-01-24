import type { Option } from "./option.type";
import type { Voter } from "./voter.type";
import type { Status } from "./status.type";

export type Vote = {
  id: string;
  creator: string;
  title: string;
  description?: string;
  startAt: number;
  endAt: number;
  status: Status;
  options: Option[];
  voter: Voter[];
  totalVotes: number;
};
