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
  AlertTriangle,
  ChartPie,
  Share,
  Send,
} from "lucide-react";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import type { Vote } from "@/types/vote.type";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { calcStatus, formatDate } from "@/utils/date-utils";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAlertStyleByStatus } from "@/utils/style-utils";
import { Link } from "react-router-dom";

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
    email: "doansamquoc@gmail.com",
  },
  title: "Chọn địa điểm team building quý 2/2026",
  description:
    "Cùng nhau quyết định địa điểm cho chuyến team building sắp tới. Hãy bình chọn để chúng ta có thể lên kế hoạch tốt nhất!",
  startAt: Date.now() + 86400000,
  endAt: Date.now() + 86400000 * 2,
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
  hasVoted: true,
  selectedAnswerIds: ["a1"],
  resultVisibility: "PRIVATE",
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
    <div className='w-full py-6 space-y-4'>
      <div className='space-y-4'>
        <Alert
          className={getAlertStyleByStatus(
            calcStatus(vote.startAt, vote.endAt),
          )}
        >
          <AlertTriangle />
          <AlertTitle>Cuộc bỏ phiếu đã kết thúc!</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </AlertDescription>
        </Alert>
        <div className='flex items-center gap-3'>
          <Avatar className='h-10 w-10'>
            <AvatarImage
              src={`https://api.dicebear.com/9.x/notionists/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${vote.creator.publicAddress}`}
            />
            <AvatarFallback>{vote.creator.email.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-medium text-sm'>{vote.creator.email}</p>
            <p className='text-xs text-muted-foreground'>
              {formatDate(vote.createdAt)}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='h-8 w-8 ml-auto'>
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

        {/* Title and description */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold leading-tight'>{vote.title}</h1>
          {vote.description && (
            <p className='text-muted-foreground'>{vote.description}</p>
          )}
        </div>

        {/* Stats bar */}
        <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
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
      </div>

      <div className='space-y-4'>
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

          {vote.hasVoted && (
            <Alert className='border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-50'>
              <CheckCircle2 />
              <AlertTitle>Cảm ơn bạn đã bình chọn!</AlertTitle>
              <AlertDescription>
                Bình chọn của bạn là minh bạch, sẽ không thể sửa đổi hoặc xóa
                bỏ.
              </AlertDescription>
            </Alert>
          )}
          <div className='flex gap-2'>
            <Button type='submit'>
              <Send />
              Bình chọn ngay
            </Button>
            <Button variant={"outline"} asChild>
              <Link to={`/votes/${vote.id}/result`}>
                <ChartPie />
                <span className='hidden md:block'>Kết quả</span>
              </Link>
            </Button>
            <Button variant={"outline"} className='ml-auto'>
              <Share />
              <span className='hidden md:block'>Chia sẻ</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VoteView;
