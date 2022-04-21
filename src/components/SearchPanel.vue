<script setup lang="ts">
import { defaultQuery, PriceTypeEnum } from '@/const/data.const';
import type { EquipmentItem, EquipmentQuery } from '@/types/data';
import { computed, onMounted, ref } from 'vue';
import CategoryMutiplePickDropdown from './dropdowns/CategoryMutiplePickDropdown.vue';
// import CharacteristicsDropdown from './dropdowns/CharacteristicsDropdown.vue';
import BrandDropdown from './dropdowns/BrandDropdown.vue';
import EqptListSortingDropdown from './dropdowns/EqptListSortingDropdown.vue';
import Dropdown from './dropdowns/Dropdown.vue';
import ListItem from './ListItem.vue';
import List from './List.vue';
import Btn from './Btn.vue';
import Circle from "./Circle.vue";
import InputBox from "./InputBox.vue";
import { useApi } from '@/plugins/api.plugin';
import MyInput from './MyInput.vue';
import MyDropdown from './MyDropdown.vue';

interface PickedPriceRange {
  id: number;
  name: string;
}

const ratesOptions = [
  { name: "5 顆星", value: 5 },
  { name: "4 顆星", value: 4 },
  { name: "3 顆星", value: 3 },
  { name: "2 顆星", value: 2 },
  { name: "1 顆星", value: 1 },
];

const priceRangeOptions: PickedPriceRange[] = [
  {
    id: PriceTypeEnum.Higer_Than_5000,
    name: "5000 元以上"
  },
  {
    id: PriceTypeEnum.Between_3001_to_5000,
    name: "3001 - 5000 元"
  },
  {
    id: PriceTypeEnum.Between_1001_to_3000,
    name: "1001 - 3000 元"
  },
  {
    id: PriceTypeEnum.Between_0_to_1000,
    name: "0 - 1000 元"
  },
];

const props = withDefaults(defineProps<{
  list?: EquipmentItem[]
}>(), {
  list: () => []
})

const emit = defineEmits<{
  (e: 'update:list', value: EquipmentItem[]): void
}>()

const api = useApi();
const categoryDropdownRef = ref<InstanceType<typeof CategoryMutiplePickDropdown>>();
const brandDropdownRef = ref<InstanceType<typeof BrandDropdown>>();
// const characteristicsDropdownRef = ref<InstanceType<typeof CharacteristicsDropdown>>();

const query = ref<EquipmentQuery>(defaultQuery);
const totalCount = ref(0);
const pickedPriceRange = computed(() => priceRangeOptions.find(row => query.value.priceType === row.id))
const maxPage = computed(() => Math.round(totalCount.value / query.value.size));
const keepList = true;

function submit (q = query.value, keepList: EquipmentItem[] = []) {
  return api.getPublishedEqpt(q)
    .then(res => {
      const count = res.data.data.count;
      const newlist = res.data.data.eqptList

      emit('update:list', [...keepList, ...newlist]);
      totalCount.value = count;
    });
}

function reset() {
  query.value = defaultQuery;

  submit();
}

function loadNextPage() {
  const nextOrMaxPage = Math.min(maxPage.value, query.value.page + 1);

  if (nextOrMaxPage > query.value.page) {
    setPageAndSubmit(nextOrMaxPage, keepList);
  }
}

function setPageAndSubmit(page: number, keep = false) {
  query.value = { ...query.value, page };

  return submit(query.value, keep ? props.list : []);
}

onMounted(() => {
  setPageAndSubmit(1);
})

defineExpose({
  loadNextPage,
  totalCount,
  list: props.list
})

</script>

<template>
  <div>
    <div class="border rounded bg-white p-4 flex flex-col gap-4">
      <div>
        <InputBox
          v-model="query.keyWord"
          placeholder="請輸入裝備名稱"
          appendclass="border-l border-l-neutral-5"
        />
        <MyInput
          v-model="query.keyWord"
          placeholder="我的新input"
        ></MyInput>
        <div>
          keyWord: {{ query.keyWord }}
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 flex-nowrap">
        <div class="flex-grow w-full">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <!-- 裝備分類 -->
            <div>
              <CategoryMutiplePickDropdown
                mutiple
                ref="categoryDropdownRef"
                v-model="query.eqptCategoryDetailIds"
              >
                <template #label="{ pickedChildren }">
                  <span>裝備分類</span>
                  <Circle>{{ pickedChildren.length }}</Circle>
                </template>
              </CategoryMutiplePickDropdown>
            </div>
            <!-- 發行品牌 -->
            <div>
              <BrandDropdown
                ref="brandDropdownRef"
                v-model="query.brandId"
              >
                <template #label="{ pickedBrand }">
                  {{ pickedBrand ? pickedBrand.name : "發行品牌" }}
                </template>
              </BrandDropdown>
            </div>
            <!-- 裝備特色 -->
            <!-- <div>
              <CharacteristicsDropdown
                ref="characteristicsDropdownRef"
                v-model="query.characteristicIds"
              >
                <template #label="{ pickedCharacteristicIds }">
                  <span>裝備特色</span>
                  <Circle>{{ pickedCharacteristicIds.length }}</Circle>
                </template>
              </CharacteristicsDropdown>
            </div> -->
            <!-- 裝備評價 -->
            <!-- <div>
              <Dropdown>
                <template #label>
                  {{ query.rate === undefined ? "裝備評價" : `${query.rate} 顆星` }}
                </template>
                <List>
                  <ListItem v-for="(row, index) in ratesOptions" :key="index" @click="query.rate = row.value">
                    <span>{{ row.name }}</span>
                  </ListItem>
                </List>
              </Dropdown>
            </div> -->
            <!-- 價格範圍 -->
            <div>
              <Dropdown>
                <template #label>
                  {{ pickedPriceRange?.name ?? "價格範圍" }}
                </template>
                <template #default>
                  <List>
                    <ListItem v-for="(row) in priceRangeOptions" :key="row.id" @click="query.priceType = row.id">
                      <span>{{ row.name }}</span>
                    </ListItem>
                  </List>
                </template>
              </Dropdown>
            </div>
            <!-- new dropdown -->
            <div>
              <MyDropdown label="props label" >
                <!-- <template #label>
                  <div>
                    slot label
                  </div>
                </template> -->
                <template #default>
                  <div>
                    list
                  </div>
                </template>
              </MyDropdown>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 self-end">
          <div class="w-full flex flex-nowrap gap-x-4 justify-end whitespace-nowrap">
            <Btn type="submit" @click="setPageAndSubmit(1)">搜尋</Btn>
            <Btn outline @click="reset()" >重設篩選</Btn>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row flex-nowrap justify-between items-center py-4 gap-y-4">
      <div class="self-stretch lg:order-2">
        <EqptListSortingDropdown v-model="query.sortingType" @update:modelValue="submit()" />
      </div>
      <div class="self-start font-bold text-2xl">
        共有 <span class="text-primary">{{ totalCount }}</span> 項裝備
      </div>
    </div>
  </div>
</template>

