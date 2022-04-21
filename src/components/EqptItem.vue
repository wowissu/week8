<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { EquipmentItem } from '@/types/data';
import Mdi from '@/components/Mdi.vue';
import Tag from '@/components/Tag.vue';
import { RouteNameEnum } from '@/const/router.const';

const props = defineProps<{
  item: EquipmentItem
}>();

</script>

<template>
  <RouterLink :to="{ name: RouteNameEnum.Index }" v-slot="{ href }">
    <a class="block text-sm border border-neutral-5 rounded p-4" :href="href">
      <div class="flex flex-col gap-y-2">
        <div v-if="item.pictureUrls && item.pictureUrls.length">
          <div class="flex justify-center items-center">
            <img :src="item.pictureUrls[0]" :alt="`${item.publishedEqptName}_picture`" class="w-full object-cover">
          </div>
        </div>
        <div v-if="props.item.characteristics.length" class="flex flex-wrap -ml-1 -mt-1">
          <div v-for="c in props.item.characteristics" :key="c" class="ml-1 mt-1">
            <Tag>{{ c }}</Tag>
          </div>
        </div>
        <div class="font-medium">{{ props.item.brandName }}</div>
        <div class="line-clamp-1 overflow-ellipsis break-all">
          {{ props.item.publishedEqptName }}
        </div>
        <div class="flex items-center gap-x-2">
          <div class="flex items-center gap-x-1">
            <Mdi name="star" class="text-yellow-300 w-5" />
            <span>{{ props.item.averageRate }}</span>
          </div>
          <div v-if="props.item.reviewCount">({{ props.item.reviewCount }} 則評論)</div>
        </div>
        <div class="font-medium">
          {{ $price(item.averagePrice) }} 元
        </div>
      </div>
    </a>
  </RouterLink>
</template>