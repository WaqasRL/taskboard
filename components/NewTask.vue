
<!-- NewTask.vue -->
<template>
  <div class="input-wrapper">
    <q-input
      v-model="task"
      filled
      autogrow
      bg-color="yellow-1"
      maxlength="500"
      placeholder="Add new task..."
      class="custom-input"
    />

    <!-- Save Icon -->
    <q-icon
      v-if="task"
      color="green"
      name="check"
      class="action-icon save-icon"
      data-testid="save-icon"
      @click="onSave"
    />

    <!-- Cancel Icon -->
    <q-icon
      color="red-5"
      name="cancel"
      class="action-icon cancel-icon"
      data-testid="cancel-icon"
      @click="onCancel"
    />
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const task = ref('')
const emit = defineEmits(['cancel', 'save'])

function onCancel() {
  emit('cancel')
}

function onSave() {
  emit('save', task.value)
}
</script>


<style scoped lang="scss">
::v-deep .custom-input .q-field__control {
  height: 110px;

  font-size: 16px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.custom-input {
  width: 100%;
}

.action-icon {
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  font-size: x-large;
}

.save-icon {
  right: 40px;
}

.cancel-icon {
  right: 8px;
}
</style>








