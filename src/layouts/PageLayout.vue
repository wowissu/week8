<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from '@/components/Logo.vue';
import AppContainer from "@/layouts/AppContainer.vue";
import { RouteNameEnum } from '@/const/router.const'

const props = withDefaults(defineProps<{
  noFooter?: boolean,
}>(), {
  noFooter: false
});

</script>

<template>
  <!-- <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
  </Head> -->
  <div class="min-h-screen flex flex-col">
    <!-- header -->
    <header ref={headerRef} class="absolute z-10 w-full border-b border-b-neutral-5 h-16">
      <AppContainer class="h-full flex flex-row justify-between items-center">
        <div class="flex-shrink">
          <RouterLink :to="{ name: RouteNameEnum.Index }" v-slot="{ href }">
            <a :href="href"><Logo /></a>
          </RouterLink>
        </div>
        <div class="flex-shrink">
          <slot name="header-after"></slot>
        </div>
      </AppContainer>
    </header>
    <!-- main -->
    <main class="flex-grow pt-16">
      <slot></slot>
    </main>
    <!-- footer -->
    <footer v-if="!props.noFooter" class="bg-neutral-1 text-white">
      <div class="grid grid-cols-3 grid-start-2 py-8">
        <div class="col-span-1 col-start-2 flex flex-col items-center gap-y-4">
          <Logo />
          <div class="text-center text-sm">
            登山者能於山裝分享裝備體驗，幫助其他登山者快速找到屬於他們需求的登山裝備。
          </div>
          <div>
            聯絡信箱：service@xgear.com
          </div>
        </div>
      </div>
      <div class="text-xs bg-black text-white py-4 text-center">
        © 2022 山裝版權所有
      </div>
    </footer>
  </div>
</template>