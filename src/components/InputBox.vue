<script setup lang="ts">
import { ref, useSlots } from 'vue';

const props = defineProps<{
  modelValue?: string;
  placeholder?: string;
  afterClass?: string;
  beforeClass?: string;
  prependClass?: string;
  appendClass?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const slots = useSlots();

const hasError = ref(false);

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

</script>

<template>
  <div class="w-full">
    <div class="flex flex-row items-center">
      <!-- before -->
      <div v-if="slots.before" class="justify-self-start" :class="props.beforeClass">
        <slot name="before"></slot>
      </div>

      <div
        class="flex-grow border rounded"
        :class="{
          'border-neutral-5': !hasError,
          'border-secondary-1': hasError
        }"
      >
        <div class="flex flex-row items-stech">
          <!-- prepend -->
          <div v-if="slots.prepend" class="justify-self-start px-3 py-2" :class="props.prependClass">
            <slot name="prepend"></slot>
          </div>

          <div class="flex-grow px-3 py-2">
            <input
              type="text"
              class="w-full h-full outline-none"
              :value="modelValue"
              @input="onInput"
              :placeholder="props.placeholder"
            />
          </div>
          <div v-if="slots.append" class="justify-self-end px-3 py-2" :class="props.appendClass">
            <slot name="append"></slot>
          </div>

        </div>
      </div>
      <div v-if="slots.after" class="justify-self-end" :class="props.afterClass">
        <slot name="after"></slot>
      </div>
    </div>
  </div>
</template>