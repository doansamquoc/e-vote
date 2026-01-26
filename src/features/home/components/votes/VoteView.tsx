import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircle2,
  Clock,
  Users,
  Calendar,
  MoreVertical,
  FileDown,
  Trash2,
  TrendingUp,
} from "lucide-react";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import { getStatusStyles } from "@/utils/StyleUtils";
import type { Vote } from "@/types/vote.type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { formatDate } from "@/utils/DateUtils";
import { Progress } from "@/components/ui/progress";

// Schemas
const multipleVoteSchema = z.object({
  id: z.string(),
  selectedOptions: z
    .array(z.string())
    .min(1, "Bạn phải chọn ít nhất một đáp án"),
});

const singleVoteSchema = z.object({
  id: z.string(),
  selectedOption: z.string().min(1, "Bạn phải chọn một đáp án"),
});

// Sample data
const sampleVote: Vote = {
  id: "vote-123",
  creator: {
    publicAddress: "user1",
    name: "Nguyễn Văn An",
    email: "Doan Sam Quoc",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=An",
  },
  title: "Chọn địa điểm team building quý 2/2026",
  description:
    "Cùng nhau quyết định địa điểm cho chuyến team building sắp tới. Hãy bình chọn để chúng ta có thể lên kế hoạch tốt nhất!",
  startAt: Date.now() - 86400000,
  endAt: Date.now() + 172800000,
  status: "OPEN",
  answers: [
    { id: "a1", name: "Đà Lạt - Thành phố ngàn hoa", totalVotes: 15 },
    { id: "a2", name: "Phú Quốc - Đảo ngọc", totalVotes: 23 },
    { id: "a3", name: "Sapa - Vùng cao tây bắc", totalVotes: 8 },
    { id: "a4", name: "Vũng Tàu - Biển gần Sài Gòn", totalVotes: 12 },
  ],
  voters: [],
  totalVotes: 58,
  createdAt: Date.now() - 86400000,
  isMultipleAnswer: false,
  hasVoted: false,
  selectedAnswerIds: [],
};

const VoteView = ({ vote = sampleVote }) => {
  const multipleForm = useForm({
    resolver: zodResolver(multipleVoteSchema),
    defaultValues: {
      id: vote.id,
      selectedOptions: vote.selectedAnswerIds,
    },
  });

  const singleForm = useForm({
    resolver: zodResolver(singleVoteSchema),
    defaultValues: {
      id: vote.id,
      selectedOption: vote.selectedAnswerIds[0] || "",
    },
  });

  const getTimeRemaining = () => {
    const now = Date.now();
    const diff = vote.endAt - now;
    if (diff <= 0) return "Đã kết thúc";

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);

    if (days > 0) return `Còn ${days} ngày`;
    return `Còn ${hours} giờ`;
  };

  const getPercentage = (voteCount: number) => {
    return vote.totalVotes > 0
      ? Math.round((voteCount / vote.totalVotes) * 100)
      : 0;
  };

  const getTopAnswer = () => {
    if (!vote.answers.length) return null;
    return vote.answers.reduce((max, answer) =>
      answer.totalVotes > max.totalVotes ? answer : max,
    );
  };

  const onSubmit = () => {
    console.log("Vote submitted:");
    // API call here
  };

  const topAnswer = getTopAnswer();

  return (
    <Card className='w-full max-w-3xl shadow-lg'>
      <CardHeader className='space-y-4'>
        {/* Header with status and menu */}
        <div className='flex items-center justify-between'>
          <Badge className={getStatusStyles(vote.status)}>
            {vote.status === "OPEN"
              ? "Đang diễn ra"
              : vote.status === "UPCOMING"
                ? "Sắp diễn ra"
                : "Đã kết thúc"}
          </Badge>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='h-8 w-8'>
                <MoreVertical className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>
                <FileDown className='mr-2 h-4 w-4' />
                Export result
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-destructive'>
                <Trash2 className='mr-2 h-4 w-4' />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Creator info */}
        <div className='flex items-center gap-3'>
          <Avatar className='h-10 w-10'>
            <AvatarImage src={vote.creator.avatarUrl} />
            <AvatarFallback>{vote.creator.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-medium text-sm'>{vote.creator.name}</p>
            <p className='text-xs text-muted-foreground'>
              {formatDate(vote.createdAt)}
            </p>
          </div>
        </div>

        {/* Title and description */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold leading-tight'>{vote.title}</h1>
          {vote.description && (
            <p className='text-muted-foreground'>{vote.description}</p>
          )}
        </div>

        {/* Stats bar */}
        <div className='flex flex-wrap gap-4 text-sm text-muted-foreground pt-2 border-t'>
          <div className='flex items-center gap-1.5'>
            <Clock className='w-4 h-4' />
            <span>{getTimeRemaining()}</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <Users className='w-4 h-4' />
            <span>{vote.totalVotes} lượt bình chọn</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <Calendar className='w-4 h-4' />
            <span>{formatDate(vote.endAt)}</span>
          </div>
          {topAnswer && vote.hasVoted && (
            <div className='flex items-center gap-1.5 text-primary'>
              <TrendingUp className='w-4 h-4' />
              <span>Dẫn đầu: {topAnswer.name}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-medium'>
            {vote.isMultipleAnswer ? "Chọn nhiều đáp án:" : "Chọn một đáp án:"}
          </p>
          {vote.isMultipleAnswer && !vote.hasVoted && (
            <Badge variant='outline' className='text-xs'>
              Chọn nhiều
            </Badge>
          )}
        </div>

        <form
          onSubmit={
            vote.isMultipleAnswer
              ? multipleForm.handleSubmit(onSubmit)
              : singleForm.handleSubmit(onSubmit)
          }
          className='space-y-3'
        >
          {vote.isMultipleAnswer ? (
            // Multiple choice
            <div className='space-y-3'>
              {vote.answers.map((option) => {
                const percentage = getPercentage(option.totalVotes);
                const isSelected = multipleForm
                  .watch("selectedOptions")
                  ?.includes(option.id);

                return (
                  <Controller
                    key={option.id}
                    name='selectedOptions'
                    control={multipleForm.control}
                    render={({ field }) => (
                      <div
                        className={`relative rounded-lg border-2 transition-all ${
                          vote.hasVoted
                            ? "border-border"
                            : isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Label
                          htmlFor={option.id}
                          className='flex items-start gap-3 p-4 cursor-pointer'
                        >
                          <Checkbox
                            id={option.id}
                            disabled={vote.hasVoted}
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              if (checked) {
                                field.onChange([...current, option.id]);
                              } else {
                                field.onChange(
                                  current.filter((id) => id !== option.id),
                                );
                              }
                            }}
                            className='mt-0.5'
                          />
                          <div className='flex-1 space-y-2'>
                            <div className='flex items-start justify-between gap-2'>
                              <span className='font-medium leading-tight'>
                                {option.name}
                              </span>
                              {vote.hasVoted && (
                                <span className='text-sm font-semibold text-primary whitespace-nowrap'>
                                  {percentage}%
                                </span>
                              )}
                            </div>
                            {vote.hasVoted && (
                              <div className='space-y-1'>
                                <Progress value={percentage} className='h-2' />
                                <p className='text-xs text-muted-foreground'>
                                  {option.totalVotes} lượt bình chọn
                                </p>
                              </div>
                            )}
                          </div>
                        </Label>
                      </div>
                    )}
                  />
                );
              })}
              {multipleForm.formState.errors.selectedOptions && (
                <p className='text-sm text-destructive'>
                  {multipleForm.formState.errors.selectedOptions.message}
                </p>
              )}
            </div>
          ) : (
            // Single choice
            <Controller
              name='selectedOption'
              control={singleForm.control}
              render={({ field }) => (
                <RadioGroup
                  disabled={vote.hasVoted}
                  value={field.value}
                  onValueChange={field.onChange}
                  className='space-y-3'
                >
                  {vote.answers.map((option) => {
                    const percentage = getPercentage(option.totalVotes);
                    const isSelected = field.value === option.id;

                    return (
                      <div
                        key={option.id}
                        className={`relative rounded-lg border-2 transition-all ${
                          vote.hasVoted
                            ? "border-border"
                            : isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Label
                          htmlFor={option.id}
                          className='flex items-start gap-3 p-4 cursor-pointer'
                        >
                          <RadioGroupItem
                            value={option.id}
                            id={option.id}
                            className='mt-0.5'
                          />
                          <div className='flex-1 space-y-2'>
                            <div className='flex items-start justify-between gap-2'>
                              <span className='font-medium leading-tight'>
                                {option.name}
                              </span>
                              {vote.hasVoted && (
                                <span className='text-sm font-semibold text-primary whitespace-nowrap'>
                                  {percentage}%
                                </span>
                              )}
                            </div>
                            {vote.hasVoted && (
                              <div className='space-y-1'>
                                <Progress value={percentage} className='h-2' />
                                <p className='text-xs text-muted-foreground'>
                                  {option.totalVotes} lượt bình chọn
                                </p>
                              </div>
                            )}
                          </div>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              )}
            />
          )}

          {!vote.hasVoted && (
            <Button type='submit' className='w-full' size='lg'>
              Bình chọn ngay
            </Button>
          )}
        </form>

        {vote.hasVoted && (
          <div className='flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800'>
            <CheckCircle2 className='w-5 h-5 text-green-600 dark:text-green-400' />
            <span className='font-medium text-green-600 dark:text-green-400'>
              Cảm ơn bạn đã bình chọn!
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 p-4 md:p-8 flex items-center justify-center'>
      <VoteView />
    </div>
  );
}
