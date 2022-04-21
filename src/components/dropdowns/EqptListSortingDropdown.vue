<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import List from "../List.vue";
import ListItem from "../ListItem.vue";
import { SortingTypeEnum } from '@/const/data.const';
import { computed, ref } from 'vue';

interface Option {
  value: SortingTypeEnum;
  name: string;
}

const sortingOptions: Option[] = [
  {
    value: SortingTypeEnum.ByPublishedTime,
    name: "發布時間舊到新"
  },
  {
    value: SortingTypeEnum.ByPublishedTimeDesc,
    name: "發布時間新到舊"
  },
  {
    value: SortingTypeEnum.ByRateDesc,
    name: "裝備評價高到低"
  },
  {
    value: SortingTypeEnum.ByReviewCountDesc,
    name: "評價數量多到少"
  },
  // {
  //   value: SortingTypeEnum.ByPublishedTime,
  //   name: "裝備評價高到低"
  //  },
  // {
  //   value: SortingTypeEnum.ByRate,
  //   name: "裝備評價低到高"
  // },
  // {
  //   value: SortingTypeEnum.ByScoreDesc,
  //   name: "裝備評價高到低"
  //  },
  // {
  //   value: SortingTypeEnum.ByScore,
  //   name: "裝備評價高到低"
  //  },
  // {
  //   value: SortingTypeEnum.ByReviewCount,
  //   name: "裝備評價高到低"
  //  },
];

const props = defineProps<{
  modelValue?: SortingTypeEnum
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: SortingTypeEnum): void
}>()

const pickedSortingOption = computed(() => sortingOptions.find(row => row.value === props.modelValue));

</script>

<template>
  <Dropdown>
    <template #label>
      <slot name="label" :pickedSortingOption="pickedSortingOption">
        {{ pickedSortingOption?.name || '選擇排序方法' }}
      </slot>
    </template>
    <List>
      <ListItem
        v-for="opt in sortingOptions"
        :key="opt.value"
        @click="emit('update:modelValue', opt.value)"
      >
        <div className="whitespace-nowrap">
          {{ opt.name }}
        </div>
      </ListItem>
    </List>
  </Dropdown>
</template>