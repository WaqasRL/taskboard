import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { defaultLists, matchesFilter } from '~/helpers/task'
import type { FilterModel, ListModel, Priority, TaskModel } from '~/types'

interface TaskState {
  lists: Array<ListModel>
  tasks: Array<TaskModel>
  filter: FilterModel
}


export const useTask = defineStore('TaskStore', {
  state: (): TaskState => ({
    lists: [...defaultLists],
    tasks: [],
    filter: {
      search: '',
      priority: '',
      dueDate: null
    }
  }),
persist: true,

  getters: {
    tasksForList: (state) => (listId: string): TaskModel[] => {
      return state.tasks.filter(task =>
        task.listId === listId && matchesFilter(task, state.filter)
      )
    },

    getTaskById: (state) => {
      return (id: string): TaskModel | undefined => {
        return state.tasks.find(task => task.id === id)
      }
    },

    moveableLists: (state) => {
      return (currentListId: string): ListModel[] => {
        return state.lists.filter(list => list.id !== currentListId)
      }
    }
  },

  actions: {
    addTask(listId: string, description: string) {
      const newTask: TaskModel = {
        id: uuidv4(),
        description,
        dueDate: null,
        priority: 'Low',
        listId
      }
      this.tasks.push(newTask)
    },

    updateTaskDescription(taskId: string, description: string) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) task.description = description
    },

    updateTaskDueDate(taskId: string, dueDate: Date) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) task.dueDate = dueDate
    },

    updateTaskPriority(taskId: string, priority: Priority) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) task.priority = priority
    },

    deleteTask(taskId: string) {
      this.tasks = this.tasks.filter(t => t.id !== taskId)
    },

    moveTaskToList(taskId: string, newListId: string) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) task.listId = newListId
    },

    setFilter(filter: Partial<FilterModel>) {
      this.filter = { ...this.filter, ...filter }
    }
  }
})
