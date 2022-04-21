<script setup lang="ts">
const props = withDefaults(defineProps<{ dark?: boolean }>(), { dark: false });
</script>

<template>
  <div class="relative w-[132px] h-[40px]">
    <img v-if="props.dark" src="@/assets/image/logo_dark.png" alt="logo"/>
    <img v-else src="@/assets/image/logo_white.png" alt="logo"/>
  </div>
</template>