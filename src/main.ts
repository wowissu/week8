import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import clickOutsidePlugin from '@/plugins/clickOutside.plugin'
import pricePlugin from '@/plugins/price.plugin'
import apiPlugin from '@/plugins/api.plugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apiPlugin);
app.use(pricePlugin);
app.use(clickOutsidePlugin);

app.mount('#app')
