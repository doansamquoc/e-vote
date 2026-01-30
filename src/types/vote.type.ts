import type { Answer } from "./answer.type";
import type { Voter } from "./voter.type";
import type { User } from "./user.type";
import type { ResultVisibility } from "./result-visibility.type";

export type Vote = {
  id: string;
  creator: User;
  title: string;
  description?: string;
  startAt: number;
  endAt: number;
  answers: Answer[];
  voters: Voter[];
  totalVotes: number;
  createdAt: number;
  isMultipleAnswer: boolean;
  hasVoted: boolean;
  selectedAnswerIds: string[];
  resultVisibility: ResultVisibility;
};
