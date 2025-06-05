import { render, fireEvent, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import { vi, describe, it, expect } from 'vitest'
import Task from '~/components/Task.vue'
import type { TaskModel } from '~/types'

// --- Mock Task Data ---
const task: TaskModel = {
  id: '1',
  listId: 'a',
  description: 'Test task',
  priority: 'High',
  dueDate: new Date('2025-06-10')
}

// --- Mock Store Implementation ---
const mockTaskStore = {
  deleteTask: vi.fn(),
  updateTaskPriority: vi.fn(),
  updateTaskDueDate: vi.fn(),
  moveTaskToList: vi.fn(),
  moveableLists: () => [{ id: 'b', title: 'Another List' }]
}

// --- Mock useTask Pinia Store ---
vi.mock('~/stores/task', () => ({
  useTask: () => mockTaskStore
}))

// --- Task Component Tests ---
describe('Task.vue', () => {
  // Test delete task functionality
  it('calls deleteTask when "Delete Task" is clicked', async () => {
    render(Task, {
      props: { task },
      global: {
        plugins: [
          createTestingPinia({
            initialState: { task: mockTaskStore },
            stubActions: false
          })
        ]
      }
    })

    const deleteBtn = screen.getByTestId('delete-btn')
    await fireEvent.click(deleteBtn)

    expect(mockTaskStore.deleteTask).toHaveBeenCalledWith(task.id)
  })

  // Test priority change functionality
  it('calls updateTaskPriority when a priority is selected', async () => {
    render(Task, {
      props: { task },
      global: {
        plugins: [
          createTestingPinia({
            initialState: { task: mockTaskStore },
            stubActions: false
          })
        ]
      }
    })

    const priorityBtn = screen.getByTestId('priority-btn')
    await fireEvent.click(priorityBtn)

    const urgentOption = screen.getByText('Urgent')
    await fireEvent.click(urgentOption)

    expect(mockTaskStore.updateTaskPriority).toHaveBeenCalledWith(task.id, 'Urgent')
  })

  // Test due date update functionality (To be implemented)
  it('calls updateTaskDueDate when a new date is selected', async () => {
    // TODO: simulate opening the due date picker and selecting a new date
    // await fireEvent.click(screen.getByTestId('due-date-btn'))
    // await fireEvent.click(screen.getByText('2025-06-15'))
    // expect(mockTaskStore.updateTaskDueDate).toHaveBeenCalledWith(task.id, new Date('2025-06-15'))
  })

  // Test moving task to another list
  it('calls moveTaskToList when a list is selected', async () => {
    render(Task, {
      props: { task },
      global: {
        plugins: [
          createTestingPinia({
            initialState: { task: mockTaskStore },
            stubActions: false
          })
        ]
      }
    })

    const moveBtn = screen.getByTestId('move-btn')
    await fireEvent.click(moveBtn)

    const targetList = await screen.findByText('Another List')
    await fireEvent.click(targetList)

    expect(mockTaskStore.moveTaskToList).toHaveBeenCalledWith(task.id, 'b')
  })
})
