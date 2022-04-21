import type { Plugin } from 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $price: (val: number) => string
  }
}

export default {
  install(app) {
    const NTDFormatter = new Intl.NumberFormat("zh-tw", {
      style: "currency",
      currency: "NTD",
      // currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    });

    app.config.globalProperties.$price = (val: number) => {
      return NTDFormatter.format(val);
    }
  }
} as Plugin;