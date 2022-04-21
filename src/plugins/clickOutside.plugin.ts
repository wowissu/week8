import type { Directive, Plugin } from 'vue';

const clickOutside: Directive = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event: MouseEvent) => {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(event);
      }
    };

    document.addEventListener("mousedown", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("mousedown", el.clickOutsideEvent);
  },
}

export default {
  install(app) {
    app.directive('click-outside', clickOutside);
  }
} as Plugin