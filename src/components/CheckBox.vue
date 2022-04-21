<script setup lang="ts">
import Mdi from './Mdi.vue'

const props = defineProps<{
  value: boolean
}>();
</script>

<template>
  <div class="rounded-sm w-4 h-4">
    <div v-if="props.value" class="border border-primary bg-primary text-white w-4 h-4" >
      <Mdi name="check-bold" full/>
    </div>
    <div v-else class="border border-neutral-5 bg-white w-full h-full"></div>
  </div>
</template>