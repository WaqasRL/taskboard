<template>
  <div class="row q-col-gutter-md justify-between q-pa-md">

    <!-- Filter Banner Section -->
    <div class="w-full" style="width:100%">
      <q-banner dense inline-actions rounded class="text-grey-8 w-full">
        <template #action>
          <span class="text-h7 q-mr-sm">Filter By:</span>
          <Filters />
        </template>
      </q-banner>
    </div>

    <!-- Task Lists -->
    <template v-for="list in taskStore.lists" :key="list.id">
      <Tasklist :list="list" />
    </template>

  </div>
</template>

<script setup lang="ts">
import Tasklist from '~/components/TaskList.vue'
import Filters from '~/components/Filters.vue'

const taskStore = useTask()
</script>

<style lang="sass" scoped>
.q-banner--dense
  padding: 0
</style>
