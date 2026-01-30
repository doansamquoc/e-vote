import type { Status } from "./status.type";
import type { User } from "./user.type";

export type VoteSummary = {
  id: string;
  user: User;
  title: string;
  status: Status;
  participants: number;
  createdAt: number;
};
