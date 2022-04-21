<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import List from "../List.vue";
import ListItem from "../ListItem.vue";
import { useCharacteristicsStore } from '@/stores/characteristics.store';
import { storeToRefs } from 'pinia';
import CheckBox from '../CheckBox.vue';
import type { Characteristic } from '@/types/data';
import { ref } from 'vue';

type CharacteristicId = Characteristic["characteristicId"];

const props = defineProps<{
  modelValue: CharacteristicId[];
  limit?: number;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: CharacteristicId[]): void
}>()

const characteristicsStore = useCharacteristicsStore();
const { characteristics } = storeToRefs(characteristicsStore);
const pickedCharacteristicIds = ref<CharacteristicId[]>([]);

function triggerCharacteristics(row: CharacteristicId) {
  const old = pickedCharacteristicIds.value;

  const newlist = old.includes(row) ? old.filter(r => r !== row) : [...old, row];
  pickedCharacteristicIds.value = props.limit && newlist.length > props.limit ? newlist.splice(1, props.limit) : newlist;

  emit('update:modelValue', pickedCharacteristicIds.value);
}

function clear() {
  emit('update:modelValue', []);
}

defineExpose({
  clear
})

</script>

<template>
  <Dropdown mutiple >
    <template #label>
      <slot name="label" :pickedCharacteristicIds="pickedCharacteristicIds"></slot>
    </template>
    <template #default>
      <List>
        <ListItem
          v-for="row in characteristics"
          :key="row.characteristicId"
          @click.stop="triggerCharacteristics(row.characteristicId)"
        >
          <div className="flex flex-row items-center gap-x-2 cursor-pointer">
            <CheckBox :value="pickedCharacteristicIds.includes(row.characteristicId)" />
            <span>
              {{row.name}}
            </span>
          </div>
        </ListItem>
      </List>
    </template>
  </Dropdown>
</template>