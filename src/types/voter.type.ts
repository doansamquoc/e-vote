import type { User } from "./user.type";

export type Voter = {
  user: User;
  answerIds: string[];
  votedAt: number;
};
