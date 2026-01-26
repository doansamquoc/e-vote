import { ArrowRight, Users2 } from "lucide-react";
import type { Status } from "@/types/status.type";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { getStatusStyles } from "@/utils/StyleUtils";

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
  status,
  totalVotes,
  onClick,
}: VoteProps) => {
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
          <Link to={"/votes"}>
            View details <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default VoteItem;
