<script setup lang="ts">
import { ref, computed } from 'vue';
import List from './List.vue';
import Mdi from './Mdi.vue';

const props = withDefaults(defineProps<{
  label?: string;
  active?: boolean;
}>(), {
  active: false
})

const expand = ref(false);

function triggerExpand() {
  expand.value = !expand.value;
}

const activeClass = computed(() => props.active ? "text-primary" : "");

</script>

<template>
  <div class="cursor-pointer">
    <div class="flex items-center flex-nowrap py-2 px-4" :class="activeClass" @click.stop="triggerExpand">
      <span>
        <slot name="label">
          {{ props.label }}
        </slot>
      </span>
      <Mdi name="menu-down" />
    </div>
    <div v-show="expand">
      <List>
        <div class="-my-2">
          <slot></slot>
        </div>
      </List>
    </div>
  </div>
</template>