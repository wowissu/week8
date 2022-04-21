<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  level?: number, active?: boolean,
}>(), {
  level: 0,
  active: false
})

const activeClass = computed(() => props.active ? "text-primary" : "");

</script>

<template>
  <div class="hover:bg-neutral-6/[.65] cursor-pointer py-2 px-4" :class="activeClass">
    <div :class="`px-${level}`">
      <slot></slot>
    </div>
  </div>
</template>