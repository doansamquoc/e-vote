import type { Status } from "@/types/status.type";

export function getStatusStyles(status: Status) {
  switch (status) {
    case "OPEN":
      return "text-green-600";
    case "CLOSED":
      return "text-red-600";
    case "UPCOMING":
      return "text-blue-600";
    case "DRAFT":
      return "text-yellow-600";
  }
}

export function statusConvert(status: Status) {
  switch (status) {
    case "OPEN":
      return "Đang diễn ra";
    case "CLOSED":
      return "Đã kết thúc";
    case "UPCOMING":
      return "Sắp diễn ra";
    case "DRAFT":
      return "Bản nháp";
  }
}

export function getAlertStyleByStatus(status: Status) {
  switch (status) {
    case "CLOSED":
      return "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-50";
    case "UPCOMING":
      return "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-50";
    case "DRAFT":
      return "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50";
  }
}
