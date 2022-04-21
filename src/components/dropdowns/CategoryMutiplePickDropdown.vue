<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import type { CategoryDetail, CategoryHasChildren } from '@/types/data';
import type { DropdownHeirBaseProps } from '@/types/dropdown';
import { useCategoryStore } from '@/stores/category.store';
import CheckBox from '../CheckBox.vue';
import { computed, ref } from 'vue';
import ListGroup from '../ListGroup.vue';
import ListItem from '../ListItem.vue';
import _ from 'lodash';
import { storeToRefs } from 'pinia';

export type MutipleTrueProps = DropdownHeirBaseProps<CategoryDetail[]>;

const props = defineProps<{
  label?: string;
  modelValue?: CategoryDetail['categoryDetailId'][];
}>();

const categoryStore = useCategoryStore();
const { categories, categoryDetails } = storeToRefs(categoryStore);
const pickedChildren = computed(() => categoryDetails.value.filter(row => props.modelValue?.includes(row.categoryDetailId)));
const pickedChildrenIds = computed(() => pickedChildren.value.map(row => row.categoryDetailId));
const pickedChildrenCategories = computed(() => pickedChildren.value.map(row => row.categoryId));

const emit = defineEmits<{
  (e: 'update:modelValue', children: CategoryDetail['categoryDetailId'][]): void;
}>()

function emitPickedChildren(children: CategoryDetail[]) {
  return emit('update:modelValue', children.map(row => row.categoryDetailId));
}

function clear() {
  emitPickedChildren([]);
}

function isAllPicked(category: CategoryHasChildren) {
  return category.children.every(child => pickedChildren.value.findIndex(row => row === child) > -1);
}

function triggerPickChildren(child: CategoryDetail) {
  const oldChildren = pickedChildren.value;

  const newChildren = oldChildren.indexOf(child) > -1
    ? oldChildren.filter(row => row !== child)
    : _.unionBy(oldChildren, [child], "categoryDetailId");

  emitPickedChildren(newChildren);
}

function triggerChildrenByCategory(category: CategoryHasChildren) {
  const oldChildren = pickedChildren.value;
  const newChildren = isAllPicked(category)
    ? oldChildren.filter(row => row.categoryId !== category.categoryId)
    : _.unionBy(oldChildren, category.children, "categoryDetailId");

  emitPickedChildren(newChildren);
}

defineExpose({ clear });

</script>

<template>
  <Dropdown mutiple>
    <template #label>
      <slot name="label" :pickedChildren="pickedChildren">
        {{ props.label }}
      </slot>
    </template>
    <template #default>
      <ListGroup
        v-for="category in categories"
        :key="category.categoryId"
        :active="pickedChildrenCategories.includes(category.categoryId)"
      >
        <template #label>
          <div class="flex flex-row items-baseline gap-x-2 cursor-pointer">
            <div>
              <CheckBox
                :value="isAllPicked(category)"
                @click.stop="triggerChildrenByCategory(category)"
              />
            </div>
            <span>
              {{ category.categoryName }}
            </span>
          </div>
        </template>
        <ListItem
          v-for="child in category.children"
          :key="child.categoryDetailId"
          :level="2"
          :active="pickedChildrenIds.includes(child.categoryDetailId)"
          @click="triggerPickChildren(child)"
        >
          <div class="flex flex-row items-baseline gap-x-2 cursor-pointer">
            <div>
              <CheckBox :value="pickedChildrenIds.includes(child.categoryDetailId)" />
            </div>
            <span>
              {{ child.categoryDetailName }}
            </span>
          </div>
        </ListItem>
      </ListGroup>
    </template>
  </Dropdown>
</template>