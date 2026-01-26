import VoteItem, { type VoteProps } from "./VoteItem";
const votes: VoteProps[] = [
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "CLOSED",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "UPCOMING",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "OPEN",
    totalVotes: 125,
  },
  {
    creator: "Nguyễn Văn A",
    title: "Bình chọn địa điểm Team Building 2024",
    startAt: Date.now(),
    endAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    status: "UPCOMING",
    totalVotes: 125,
  },
];

export default function VoteView() {
  return (
    <div className='grid grid-cols-1 gap-2'>
      {votes.map((vote, index) => (
        <VoteItem {...vote} onClick={vote.onClick} />
      ))}
    </div>
  );
}
