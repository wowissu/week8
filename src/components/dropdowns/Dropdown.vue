<script setup lang="ts">
import { computed, ref } from 'vue';
import { useOffset } from '@/composables/useOffset';
import Mdi from '../Mdi.vue';

defineExpose({
  hide,
  show
});

const props = defineProps<{
  mutiple?: boolean;
  label?: string;
  // placeholder?: ReactNode;
}>()

const showing = ref(false);
const [ elRef, elOffset, updateOffset ] = useOffset<HTMLDivElement>();
const hasError = false;

function show() {
  showing.value = true;

  updateOffset();
}

function hide () {
  showing.value = false;
}

function onContentClick() {
  // auto hide without mutiple mode
  if (props.mutiple === false) {
    hide();
  }
}

function onClickOutside(e: Event) {
  if (e.target && (elRef.value === e.target || elRef.value?.contains(e.target as Node))) {
    return;
  }

  hide();
}

const trigger = () => {
  showing.value ? hide() : show();
};

const isShowing = computed(() => showing.value && !!elOffset);

</script>

<template>
  <div
    ref="elRef"
    class="rounded border"
    :class="{
      'border-primary': isShowing && !hasError,
      'border-neutral-5': !isShowing && !hasError,
      'border-secondary-1': hasError
    }"
  >
    <div class="flex items-center cursor-pointer py-2 px-2" @click.stop="trigger">
      <div class="flex-auto">
        <div class="flex flex-row items-center gap-x-2">
          <slot name="label">
            {{ props.label }}
          </slot>
        </div>
      </div>
      <div class="flex-shrink">
        <Mdi :name="showing ? 'chevron-up' : 'chevron-down'" />
      </div>
    </div>
    <Teleport to="body">
      <div
        v-if="showing && elOffset"
        class="border rounded mt-1 bg-white fixed z-50"
        @click.stop="onContentClick"
        :style="{
          left: `${elOffset.left}px`,
          top: `${elOffset.top + elOffset.height}px`,
          width: `${elOffset.width}px`
        }"
        v-click-outside="onClickOutside"
      >
        <!-- beforeContent -->
        <slot name="beforeContent"></slot>
        <!-- mainContent -->
        <div class="overflow-y-auto max-h-80 relative">
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>