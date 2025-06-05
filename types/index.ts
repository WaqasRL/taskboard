export interface TaskModel {
  id: string
  listId: string
  description: string
  dueDate: Date | null
  priority: 'Low' | 'High' | 'Urgent'
}

export interface ListModel {
  id: string
  title: string
}

export interface FilterModel {
  search: string
  priority: string
  dueDate: Date | null
}

export type Priority = 'Low' | 'High' | 'Urgent'
