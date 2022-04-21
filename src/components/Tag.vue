<script setup lang="ts">
import Mdi from "./Mdi.vue";

const props = withDefaults(defineProps<{
  removeable?: boolean
}>(), {
  removeable: false
})

const emit = defineEmits<{
  (e: 'remove'): void
}>()

</script>

<template>
  <div class="rounded-sm text-xs px-1 py-[1px] bg-primary-4 hover:bg-primary-3 border border-primary-1 whitespace-nowrap flex items-center">
    <div>
      <slot></slot>
    </div>
    <Mdi v-if="props.removeable" name="close" class="ml-1 cursor-pointer" size="0.8rem" @click="emit('remove')" />
  </div>
</template>