import { Users2 } from "lucide-react";
import { getStatusStyles, statusConvert } from "@/utils/style-utils";
import type { VoteSummary } from "@/types/vote-summary.type";
import { Link } from "react-router-dom";
import DotSeparator from "@/components/dot-separator";

export interface VoteProps {
  vote: VoteSummary;
}

const VoteItem = ({ vote }: VoteProps) => {
  return (
    <Link to={"/votes"}>
      <div className='group flex flex-col gap-1 rounded-md border p-3 hover:bg-muted/50 transition-colors cursor-pointer'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='font-medium text-base text-foreground group-hover:underline'>
            {vote.title}
          </h3>
        </div>

        <div className='flex items-center gap-3 text-xs text-muted-foreground mt-1'>
          <span>
            bởi{" "}
            <span className='font-semibold text-foreground'>
              {vote.user.name}
            </span>
          </span>
          <DotSeparator />
          <span className='flex items-center gap-1'>
            <Users2 className='size-3' /> {vote.participants}
          </span>
          <DotSeparator />
          <span className={getStatusStyles(vote.status)}>
            {statusConvert(vote.status)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VoteItem;
