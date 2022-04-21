<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue';
import Btn from '@/components/Btn.vue';
import AppContainer from '../layouts/AppContainer.vue';
import { RouterLink } from 'vue-router';
import { RouteNameEnum } from '@/const/router.const';
import SearchPanel from '../components/SearchPanel.vue';
import { ref } from 'vue';
import type { EquipmentItem } from '@/types/data';
import EqptList from '../components/EqptList.vue';

const list = ref<EquipmentItem[]>([]);

const searchRef = ref<InstanceType<typeof SearchPanel>>();

function onScroll () {
  searchRef.value?.loadNextPage();
}

</script>

<template>
  <PageLayout>
    <template #header-after>
      <RouterLink :to="{ name: RouteNameEnum.Publish }" v-slot="{ href }">
        <Btn tag="a" :href="href">發布你的裝備</Btn>
      </RouterLink>
    </template>

    <div class="w-full text-center py-1 text-white bg-gradient-to-r from-brand-from to-brand-to">
      為避免版權問題，發布裝備時，請勿上傳品牌官方商品照，請上傳自身所拍攝的裝備實體照。
    </div>

    <AppContainer class="grid grid-cols-1 lg:grid-cols-3 content-center items-center pt-24 pb-28">
      <div class="col-span-1 lg:col-span-2 lg:order-2">
        <img class="w-full" src="@/assets/image/banner2x.png" alt="">
      </div>
      <div class="col-span-1">
        <div class="grid justify-items-start gap-y-6">
          <div class="text-3xl lg:text-2xl font-semibold">
            山裝 ─ 探索與分享登山裝備資訊
          </div>
          <div class="text-neutral-2">
            在山裝分享裝備資訊與使用心得，作為其他登山者購買裝備的參考依據。
          </div>
          <div class="">
            <RouterLink :to="{ name: RouteNameEnum.Publish }" v-slot="{ href }">
              <Btn tag="a" :href="href">開始發布你的裝備</Btn>
            </RouterLink>
          </div>
        </div>
      </div>
    </AppContainer>

    <div class="bg-white pb-[10rem]">
      <AppContainer class="sticky top-0 p-4 bg-white z-50">
        <SearchPanel ref="searchRef" v-model:list="list" />
        <hr />
      </AppContainer>
      <AppContainer class="grid gap-y-6">
        <div v-if="list.length">
          <EqptList :list="list" />
        </div>
        <div v-else>
          <div class="grid grid-cols-5 pb-36 pt-10">
            <div class="col-span-3 col-start-2 flex flex-col justify-center items-center gap-y-4 text-center">
              <div>
                <img
                  src="@/assets/image/empty.png"
                  alt="empty"
                />
              </div>
              <div class="font-bold text-2xl">
                很抱歉，目前沒有相關的登山裝備資訊
              </div>
              <div>
                點擊「發布你的裝備」分享自身裝備使用心得，作為其他登山者購買裝備的參考依據。
              </div>
              <div>
                <RouterLink :to="{ name: RouteNameEnum.Publish }" v-slot="{ href }">
                  <Btn tag="a" :href="href">發布你的裝備</Btn>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div ref="scrollFireRef"></div>
      </AppContainer>
    </div>
  </PageLayout>
</template>
