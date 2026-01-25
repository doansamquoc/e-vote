import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ChevronRight,
  Box,
  ArrowRight,
  Users2,
} from "lucide-react";
import type { Status } from "@/types/status.type";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export interface VoteProps {
  creator: string;
  title: string;
  startAt: number;
  endAt: number;
  status: Status;
  totalVotes: number;
  onClick?: () => void;
}

const VoteItem = ({
  creator,
  title,
  startAt,
  endAt,
  status,
  totalVotes,
  onClick,
}: VoteProps) => {
  // Hàm format ngày tháng (từ timestamp số sang chuỗi dễ đọc)
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Hàm xác định màu sắc dựa trên trạng thái
  const getStatusStyles = (status: Status) => {
    // Chuyển status về string để so sánh an toàn nếu status là enum
    const s = String(status).toUpperCase();

    switch (s) {
      case "OPEN":
        return "bg-green-100 dark:bg-green-950 text-green-600";
      case "CLOSED":
        return "bg-red-100 dark:bg-red-950 text-red-600";
      case "UPCOMING":
        return "bg-yellow-100 dark:bg-yellow-950 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      onClick={onClick}
      className='flex flex-col gap-2 border rounded-lg bg-card'
    >
      <div className='flex flex-col gap-2 p-2'>
        <Badge className={`${getStatusStyles(status)}`}>{status}</Badge>

        <h1>{title}</h1>
        <span className='text-sm text-muted-foreground'>
          Creator: {creator}
        </span>
      </div>
      <div className='flex justify-between border-t p-2 items-center'>
        <span className='flex items-center gap-1 text-muted-foreground text-sm'>
          <Users2 className='size-4' /> {totalVotes} participants
        </span>
        <Button variant={"ghost"} size={"sm"} asChild>
          <Link to={"/vote-details"}>
            View details <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default VoteItem;
