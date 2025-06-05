import type { Priority } from "~/types";

export function formatDate(date?: Date | string | null): string {
  if (!date) return 'Due Date'

  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'short',  // e.g. "Jun"
    day: 'numeric',  // e.g. "5"
    year: 'numeric'  // e.g. "2025"
  })
}


export const priorityOptions: { label: Priority; color: string }[] = [
  { label: 'Urgent', color: 'red' },
  { label: 'High', color: 'orange' },
  { label: 'Low', color: 'primary' }
]

