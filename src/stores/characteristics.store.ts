import type { Characteristic } from '@/types/data';
import { defineStore } from 'pinia'
import { useApi } from '@/plugins/api.plugin';
import { readonly, ref } from 'vue';

export const useCharacteristicsStore = defineStore('characteristics', () => {
  const api = useApi();
  const characteristics = ref<Characteristic[]>([]);

  async function update () {
    characteristics.value = await api.getCharacteristics().then(res => res.data.data);
  }

  update();

  return {
    characteristics: readonly(characteristics),
    update
  }
})
