// NewTask.spec.ts
import { describe, it, expect } from 'vitest'
import { fireEvent } from '@testing-library/vue'
import NewTask from '~/components/NewTask.vue'
import { renderWithQuasar } from '~/test/util'

describe('NewTask.vue', () => {
  // Test cancel button emits the cancel event
  it('emits cancel event when cancel icon is clicked', async () => {
    const { getByTestId, emitted } = renderWithQuasar(NewTask)

    const cancelIcon = getByTestId('cancel-icon')
    await fireEvent.click(cancelIcon)

    expect(emitted().cancel).toBeTruthy()
  })

  // Test save button emits the save event with input value
  it('emits save event with task description', async () => {
    const { getByPlaceholderText, getByTestId, emitted } = renderWithQuasar(NewTask)

    const input = getByPlaceholderText('Add new task...')
    await fireEvent.update(input, 'Buy milk')

    const saveIcon = getByTestId('save-icon')
    await fireEvent.click(saveIcon)

    expect(emitted().save).toBeTruthy()
    expect(emitted().save[0]).toEqual(['Buy milk'])
  })
})
