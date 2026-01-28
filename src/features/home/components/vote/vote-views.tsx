import type { VoteSummary } from "@/types/vote-summary.type";
import VoteItem from "./vote-item";
const votes: VoteSummary[] = [
  {
    id: "123-123-123-123",
    user: {
      publicAddress: "",
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "CLOSED",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "UPCOMING",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "OPEN",
    participants: 125,
  },
  {
    user: {
      email: "abc@gmail.com",
      name: "Doan Sam Quoc",
      avatarUrl: "",
      publicAddress: "",
    },
    title: "Bình chọn địa điểm Team Building 2024",
    id: "",
    status: "UPCOMING",
    participants: 125,
  },
];

export default function VoteView() {
  return (
    <div className='grid grid-cols-1 gap-2'>
      {votes.map((vote, index) => (
        <VoteItem vote={vote} key={index} />
      ))}
    </div>
  );
}
