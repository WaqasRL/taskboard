import type { TaskModel, FilterModel, ListModel } from '~/types'

export function matchesFilter(task: TaskModel, filter: FilterModel): boolean | null {
  const matchesSearch = !filter.search || task.description.toLowerCase().includes(filter.search.toLowerCase())
  const matchesPriority = !filter.priority || task.priority === filter.priority
  const matchesDueDate = !filter.dueDate || (
    task.dueDate && task.dueDate.toDateString() === filter.dueDate.toDateString()
  )
  return matchesSearch && matchesPriority && matchesDueDate
}

export const defaultLists: ListModel[] = [
  { id: 'todo', title: 'Todo' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'done', title: 'Done' }
]
