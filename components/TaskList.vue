<template>
  <div class="col">
    <q-scroll-area style="height: 480px;">
      <q-layout view="lHh lpr lFf" class="shadow-2" style="border: 2px solid #e9e9e9; height: 480px;">
        <!-- Header -->
        <q-header bordered class="bg-orange-2 text-grey-8">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              {{ list.title }}
            </q-toolbar-title>
            <q-btn flat round dense icon="add" @click="addingNew = true">
              <q-tooltip>Add new task</q-tooltip>
            </q-btn>
          </q-toolbar>
        </q-header>

        <!-- Page Container -->
        <q-page-container>
          <q-page class="q-pa-md">
            <div class="q-pa-md column items-start q-gutter-md">
              <!-- New Task Input -->
              <NewTask v-if="addingNew || tasksInList.length === 0" @save="onSave" @cancel="onCancel" />
              <!-- Render Tasks -->
              <task v-for="task in tasksInList" v-else :key="task.id" :task="task" />
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts">
import type { ListModel } from '~/types';


const props = defineProps({
  list: {
    type: Object as PropType<ListModel>,
    required: true
  }
})

const addingNew = ref<boolean>(false)
const taskStore = useTask()
const tasksInList = computed(() => {
  return taskStore.tasksForList(props.list.id)

})

const onSave = (task: string) => {
  taskStore.addTask(props.list.id, task)
  addingNew.value = false
}
const onCancel = () => {
  addingNew.value = false
}

</script>

<style lang="scss" scoped></style>