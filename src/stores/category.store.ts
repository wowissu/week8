import type { CategoryDetail, CategoryHasChildren } from '@/types/data';
import { defineStore } from 'pinia'
import { useApi } from '@/plugins/api.plugin';
import { ref } from 'vue';

export const useCategoryStore = defineStore('category', () => {

  const api = useApi();
  const categories = ref<CategoryHasChildren[]>([]);
  const categoryDetails = ref<CategoryDetail[]>([]);

  async function update () {
    const [resCategories, resCategoryDetails] = await Promise.all([
      api.getCategories().then(res => res.data.data),
      api.getCategoryDetails().then(res => res.data.data)
    ]);

    const categoryHasChildrenList = resCategories.map<CategoryHasChildren>(c => {
      return {
        ...c,
        children: resCategoryDetails.filter(d => d.categoryId === c.categoryId)
      };
    });

    categories.value = categoryHasChildrenList;
    categoryDetails.value = resCategoryDetails;

    return [ categoryHasChildrenList, resCategoryDetails ];
  }

  function findDetailById (id: CategoryDetail["categoryDetailId"]) {
    return categoryDetails.value.find(detail => detail.categoryDetailId === id);
  }

  function findParentByDetail(detail: CategoryDetail) {
    return categories.value.find(category => category.categoryId === detail.categoryId);
  }

  update();

  return {
    categories,
    categoryDetails,
    update,
    findDetailById,
    findParentByDetail
  }
})
