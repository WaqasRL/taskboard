<template>
  <q-card flat bordered class="my-card bg-yellow-1 text-grey-9">
    <q-card-section class="relative">

      <!-- Options Menu -->
      <q-btn
        flat
        round
        dense
        icon="more_vert"
        class="absolute"
        style="top: 0; right: 0"
        color="grey-7"
      >
        <q-menu cover>
          <q-list>
            <!-- Delete Task -->
            <q-item clickable data-testid="delete-btn" @click="deleteTask">
              <q-item-section>Delete Task</q-item-section>
            </q-item>

            <!-- Move To Submenu -->
            <q-item clickable data-testid="move-btn">
              <q-item-section>
                <div class="row items-center justify-between no-wrap">
                  Move To
                  <q-icon name="chevron_right" size="16px" />
                </div>
                <q-menu anchor="top end" self="top start">
                  <q-list>
                    <q-item
                      v-for="list in moveableLists"
                      :key="list.id"
                      clickable
                      @click="moveTask(list.id)"
                    >
                      <q-item-section>{{ list.title }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <!-- Task Description -->
      <div class="text-h8 q-mr-sm">
        {{ task.description }}
      </div>

    </q-card-section>

    <q-separator />

    <q-card-actions>
      <!-- Due Date -->
      <q-btn flat push icon="event" no-caps color="grey-7" data-testid="due-date-btn">
        <q-tooltip anchor="bottom middle" self="top middle">
          Due Date
        </q-tooltip>
        <span class="q-ml-xs text-grey-7">{{ formatDate(task.dueDate) ?? 'Due Date' }}</span>

        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date v-model="dueDate" minimal  :options="dateOptions" @update:model-value="onDateChange" />
        </q-popup-proxy>
      </q-btn>

      <!-- Priority -->
      <q-btn
        flat
        push
        icon="tour"
        :color="priorityColor"
        no-caps
        class="float-right"
        data-testid="priority-btn"
      >
        <q-tooltip anchor="bottom middle" self="top middle">
          Priority
        </q-tooltip>
        <span class="q-ml-xs">{{ task.priority }}</span>

        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-list bordered>
            <q-item
              v-for="opt in priorityOptions"
              :key="opt.label"
              v-close-popup
              clickable
              @click="setPriority(opt.label)"
            >
              <q-item-section avatar>
                <q-icon :color="opt.color" name="tour" />
              </q-item-section>
              <q-item-section>{{ opt.label }}</q-item-section>
              <q-item-section v-if="task.priority === opt.label" side>
                <q-icon name="check" color="green" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-popup-proxy>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Priority, TaskModel } from '~/types'
import { useTask } from '~/stores/task'
import { formatDate, priorityOptions } from '~/helpers/util'

const props = defineProps<{
  task: TaskModel
}>()

const taskStore = useTask()
const dueDate = ref<Date>()

// Computed
const priorityColor = computed(() => {
  return priorityOptions.find(opt => opt.label === props.task.priority)?.color || 'grey'
})

const moveableLists = computed(() =>
   taskStore.moveableLists(props.task.listId)
)

// Methods
const setPriority = (value: Priority) => {
  taskStore.updateTaskPriority(props.task.id, value)
}

const onDateChange = (value: Date) => {
  taskStore.updateTaskDueDate(props.task.id, value)
}

const deleteTask = () => {
  taskStore.deleteTask(props.task.id)
}

const moveTask = (listId: string) => {
  taskStore.moveTaskToList(props.task.id, listId)
}

const dateOptions = (date: string) => {
  const normalized = new Date(date).toISOString().split('T')[0]
  const today = new Date().toISOString().split('T')[0]
  return normalized >= today
}
</script>

<style scoped lang="sass">
.my-card
  width: 100%
</style>
