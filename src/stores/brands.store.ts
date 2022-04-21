import type { Brand } from '@/types/data';
import { defineStore } from 'pinia'
import { ref } from 'vue';
import { useApi } from '@/plugins/api.plugin';

export const useBrandsStore = defineStore('brands', () => {

  const api = useApi();
  const brands = ref<Brand[]>([]);

  async function update () {
    brands.value = await api.getBrands().then(res => res.data.data);
  }

  update();

  return {
    brands,
    update
  }
})
