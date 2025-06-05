<template>
  <div class="q-gutter-sm row items-center">

    <!-- Due Date Filter -->
    <q-btn flat push no-caps class="text-black">
      <span class="q-ml-xs q-pr-xs">{{ dueDateLabel }}</span>
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-date
          v-model="dueDate"
          minimal
          @update:model-value="onDateChange"
        />
      </q-popup-proxy>
    </q-btn>

    <q-separator dark vertical inset />

    <!-- Priority Filter -->
    <q-select
      v-model="priority"
      :options="priorityOptions"
      option-label="label"
      option-value="label"
      emit-value
      map-options
      clearable
      label="Priority"
      label-color="black"
      color="black"
      class="q-ml-xs text-black"
      style="width: 150px"
      @update:model-value="onPriorityChange"
    >
      <template #option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar>
            <q-icon :color="scope.opt.color" name="tour" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>

    <q-separator dark vertical class="q-mr-md" />

    <!-- Search Filter -->
    <q-input
      v-model="search"
      borderless
      debounce="500"
      placeholder="Search task..."
      class="text-black"
      @update:model-value="onSearch"
    >
      <template #append>
        <q-icon name="search" color="black" />
      </template>
    </q-input>

  </div>
</template>

 <script setup lang="ts">
import { ref, computed } from 'vue'
import { formatDate, priorityOptions } from '~/helpers/util'

const taskStore = useTask()

// Filter states
const dueDate = ref<Date>()
const priority = ref('')
const search = ref('')


// Computed due date label
const dueDateLabel = computed(() => {
  return dueDate.value
    ? formatDate(dueDate.value)
    : 'Due Date'
})

// Event Handlers
const onPriorityChange = (value: string) => {
  taskStore.setFilter({ priority: value })
}

const onDateChange = (value: Date) => {
  taskStore.setFilter({ dueDate: value })
}

const onSearch = (value: string | number | null) => {
  const search = value != null ? String(value) : '';
  taskStore.setFilter({ search });
}
</script>