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
