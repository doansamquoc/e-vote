import type { Status } from "@/types/status.type";

export function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calcStatus(start: number, end: number): Status {
  if (start - Date.now() <= 0) {
    return "UPCOMING";
  } else if (start - Date.now() >= 0 && end <= Date.now()) {
    return "OPEN";
  } else {
    return "CLOSED";
  }
}
