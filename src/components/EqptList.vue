<script setup lang="ts">
import { computed } from 'vue'
import type { EquipmentItem } from '@/types/data';
import EqptItem from './EqptItem.vue';

const props = defineProps<{
  list: EquipmentItem[]
}>()

const listCols = computed(() => {
  return props.list.reduce((acc, row, index) => {
    const colIndex = index % 4;

    (acc[colIndex] = acc[colIndex] || []).push(row);

    return acc;
  }, [] as EquipmentItem[][])
});

</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="(rows, index) in listCols" :key="`cols_${index}`" class="flex flex-col flex-wrap gap-y-4">
      <div v-for="row in rows" :key="`cols_${index}_${row.publishedEqptId}`">
        <EqptItem :item="row" />
      </div>
    </div>
  </div>
</template>