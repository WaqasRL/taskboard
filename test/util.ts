// test/util.ts
import { render } from '@testing-library/vue'
import type { RenderOptions } from '@testing-library/vue'
import type { Component } from 'vue'

export function renderWithQuasar(component: Component, options?: RenderOptions<any>) {
  return render(component, {
    global: {
      stubs: {
        // stub QInput so it renders an <input> instead of the real Quasar widget
        'q-input': {
          template: `
            <input
              v-bind="$attrs"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          `
        },
        // stub QIcon but forward all attrs (incl. data-testid)
        'q-icon': {
          template: `<span class="stub-q-icon" v-bind="$attrs"><slot /></span>`
        },
        'q-tooltip': true,
        'q-btn': {
          template: `<button v-bind="$attrs" @click="$emit('click')"><slot /></button>`
        },
        'q-form': {
          template: `<form @submit.prevent><slot /></form>`
        },
      }
    },
    ...options,
  })
}
