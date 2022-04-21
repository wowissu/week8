<!-- My Dropdown -->
<script setup lang="ts">
import { ref } from 'vue';
import useMyOffset from '@/composables/useMyOffset';

const props = defineProps<{
  label?: string;
}>();

const { elRef: labelRef, locate } = useMyOffset();

// const labelRef = ref<HTMLDivElement>();
const showing = ref(false);
const menuStyle = ref<{ top: number, left: number, width: number }>({
  top: 0,
  left: 0,
  width: 0
})

function hide() {
  showing.value = false;

  document.removeEventListener('scroll', scrollHandler);
}

function show() {
  showing.value = true;

  locateMenu();
  document.addEventListener('scroll', scrollHandler);
}

function trigger() {
  showing.value ? hide() : show();
}

function scrollHandler() {
  locateMenu();
}

function locateMenu () {
  const labelRefRect = locate();

  menuStyle.value = {
    left: labelRefRect.left,
    top: labelRefRect.bottom,
    width: labelRefRect.width
  }
}
</script>

<template>
  <div class="my-dropdown">
    <!-- label -->
    <div ref="labelRef" class="border border-gray-500 px-4 py-2 rounded" @click="trigger">
      <slot name="label">
        <div class="my-dropdown-label--default">
          {{ props.label }}
        </div>
      </slot>
    </div>
    <!-- menu -->
    <Teleport to="body">
      <div v-if="showing"
        class="my-dropdown-menu fixed z-50 pt-1"
        :style="{
          left: `${menuStyle.left}px`,
          top: `${menuStyle.top}px`,
          width: `${menuStyle.width}px`,
        }"
      >
        <div class="border border-gray-500 bg-white rounded px-4 py-2">
          <slot name="default"></slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>