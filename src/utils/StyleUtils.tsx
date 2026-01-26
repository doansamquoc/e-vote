import type { Status } from "@/types/status.type";

export function getStatusStyles(status: Status) {
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
}
