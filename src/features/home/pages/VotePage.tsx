import type { Vote } from "@/types/vote.type";
import VoteView from "../components/votes/VoteView";
import { uuid } from "zod";

const VotePage = () => {
  const vote: Vote = {
    id: uuid.toString(),
    creator: {
      name: "Sam Quoc Doan",
      avatarUrl:
        "https://sm.ign.com/t/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.600.jpg",
      email: "doansamquoc@gmail.com",
      publicAddress: "12319028319238912873",
    },
    title: "Day la tieu de cua mot cuoc bau cu",
    description: "Day la mo ta cho mot cuoc bau cu",
    startAt: 12391293,
    endAt: 1231982389,
    answers: [
      {
        id: "1",
        name: "Day la option 1 Day la tieu de cua mot cuoc bau cu Day la tieu de cua mot cuoc bau cu Day la tieu de cua mot cuoc bau cu Day la tieu de cua mot cuoc bau cu",
        totalVotes: 100,
      },
      { id: "2", name: "Day la option 2", totalVotes: 100 },
      { id: "3", name: "Day la option 4", totalVotes: 100 },
    ],
    status: "OPEN",
    totalVotes: 1000,
    voters: [],
    createdAt: 91298319283,
    isMultipleAnswer: true,
    hasVoted: true,
    selectedAnswerIds: ["1", "3"],
  };
  return (
    <div className='flex flex-col w-full max-w-2xl mx-auto'>
      <VoteView />
    </div>
  );
};

export default VotePage;
