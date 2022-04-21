<script setup lang="ts">
import * as mdijs from '@mdi/js'

const props = withDefaults(defineProps<{
  name: string;
  full?: boolean;
  width?: number;
  height?: number;
  viewBox?: string;
}>(), {
  full: false,
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
});

const iconPath = (mdijs as Record<string, string>)[`mdi${toName(props.name)}`] || mdijs.mdiAlert;

function ucFirst (str: string) { return str.charAt(0).toUpperCase() + str.slice(1) }
function toName (str: string) { return str.split('-').map(ucFirst).join('') }
</script>

<template>
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    :viewBox="props.viewBox"
    :class="{ 'w-full h-full': props.full }"
  >
    <path :d="iconPath"></path>
  </svg>
</template>