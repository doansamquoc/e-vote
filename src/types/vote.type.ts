import type { Answer } from "./answer.type";
import type { Voter } from "./voter.type";
import type { Status } from "./status.type";
import type { User } from "./user.type";

export type Vote = {
  id: string;
  creator: User;
  title: string;
  description?: string;
  startAt: number;
  endAt: number;
  status: Status;
  answers: Answer[];
  voters: Voter[];
  totalVotes: number;
  createdAt: number;
  isMultipleAnswer: boolean;

  hasVoted: boolean;
  selectedAnswerIds: string[];
};
