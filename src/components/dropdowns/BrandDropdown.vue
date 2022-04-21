<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import InputBox from "../InputBox.vue";
import { computed, ref } from 'vue';
import Mdi from '../Mdi.vue';
import List from '../List.vue';
import { storeToRefs } from 'pinia';
import { useBrandsStore } from '@/stores/brands.store';
import ListItem from '../ListItem.vue';
import type { Brand } from '@/types/data';

const props = defineProps<{
  modelValue?: Brand['brandId']
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', b: Brand['brandId'] | undefined): void
}>()

const brandsStore = useBrandsStore();
const { brands } = storeToRefs(brandsStore);

const pickedBrand = computed(() => brands.value.find(row => row.brandId === props.modelValue));
const filterText = ref<string>('');
const filteredBrands = computed(() => brands.value.filter(brand => filterText.value ? (new RegExp(`${filterText.value}`, "i").exec(brand.name)) : true));

function onPickItem (brand: Brand) {
  emit('update:modelValue', brand.brandId);
}

function clear() {
  emit('update:modelValue', undefined);
}

defineExpose({
  clear
})

</script>

<template>
  <Dropdown>
    <template #label>
      <slot name="label" :pickedBrand="pickedBrand"></slot>
    </template>

    <template #default>
      <div class="py-2 px-2 sticky top-0 bg-white shadow-sm" @click.stop>
        <InputBox
          v-model="filterText"
          appendClass="border-l border-l-neutral-5"
          placeholder="請輸入品牌名稱"
        >
          <template name="append">
            <div class="cursor-pointer hover:bg-neutral-6">
              <Mdi name="search" class="text-neutral-4"></Mdi>
            </div>
          </template>
        </InputBox>
      </div>
      <List>
        <ListItem v-for="brand in filteredBrands" :key="brand.brandId" @click="() => onPickItem(brand)">
          {{ brand.name }}
        </ListItem>
      </List>
    </template>
  </Dropdown>
</template>