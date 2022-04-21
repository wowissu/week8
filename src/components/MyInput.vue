
<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
  placeholder: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void;
}>()

function onInput(e: Event) {

  emit('update:modelValue', (e.target as HTMLInputElement).value);
}

</script>

<template>
  <div class="border border-blue-50">
    <input type="text" :placeholder="placeholder" :value="props.modelValue" @input="onInput($event)">
  </div>
</template>