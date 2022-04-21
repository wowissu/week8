<script setup lang="ts">
import Mdi from "./Mdi.vue";

interface BtnProps {
  loading?: boolean;
  disable?: boolean;
  outline?: boolean;
  tag?: "button" | "a";
  type?: "submit" | "reset" | "button";
  href?: string;
}

const props = withDefaults(defineProps<BtnProps>(), {
  tag: 'button',
});

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void;
  (e: 'update:loading', val: boolean): void;
  (e: 'update:disable', val: boolean): void;
}>();

defineExpose({
  setLoading: (val: boolean) => emits('update:loading', val),
  setDisable: (val: boolean) => emits('update:disable', val),
})
</script>

<template>
  <component
    :is="props.tag"
    :href="props.href"
    class="btn flex flex-row justify-center items-center rounded border px-4 py-2 font-semibold text-md"
    :class="{
      'btn-loading': props.loading,
      'btn-disable': props.disable,
      'btn-outline': props.outline
    }"
    @click="emits('click', $event)"
  >
    <template v-if="props.loading">
      <Mdi name="loading" class="loading-icon animate-spin" />
    </template>
    <template v-else>
      <slot name="default"></slot>
    </template>
  </component>
</template>

<style scoped>
.btn {
  --btn-color: #fff;
  --btn-bg: #00AC8E;
  --btn-border: #00AC8E;
  /* hover */
  --btn-hover-color: #fff;
  --btn-hover-bg: #008A72;
  --btn-hover-border: #008A72;
  /* disable */
  --btn-disable-color: #A1A1A1;
  --btn-disable-bg: #DDDEDE;
  --btn-disable-border: #DDDEDE;
  /* loading */
  --btn-loading-fill: #fff;

  background-color: var(--btn-bg);
  border-color: var(--btn-border);
  color: var(--btn-color);
}

.btn:hover, .btn.hovered {
  color: var(--btn-hover-color);
  background-color: var(--btn-hover-bg);
  border-color: var(--btn-hover-border);
}

.btn.btn-disable {
  color: var(--btn-disable-color);
  background-color: var(--btn-disable-bg);
  border-color: var(--btn-disable-border);
}

.btn.btn-loading {
  fill: var(--btn-loading-color);
}

.btn.btn-outline {
  --btn-color: #00AC8E;
  --btn-bg: transparent;
  --btn-border: #00AC8E;
  /* hover */
  --btn-hover-color: #008A72;
  --btn-hover-bg: #F2FBF9;
  --btn-hover-border: #008A72;
  /* disable */
  --btn-disable-color: #A1A1A1;
  --btn-disable-bg: transparent;
  --btn-disable-border: #A1A1A1;
  /* loading */
  --btn-loading-fill: #00AC8E;
}
</style>