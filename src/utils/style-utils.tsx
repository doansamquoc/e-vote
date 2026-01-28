import type { Status } from "@/types/status.type";

export function getStatusStyles(status: Status) {
  const s = String(status).toUpperCase();
  switch (s) {
    case "OPEN":
      return "text-green-600";
    case "CLOSED":
      return "text-red-600";
    case "UPCOMING":
      return "text-yellow-600";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}
