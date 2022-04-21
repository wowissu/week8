import { ref } from 'vue'


export default function useMyOffset () {

  const elRef = ref<HTMLElement>();

  function locate() {
    const el = elRef.value;

    if (!el) {
      throw new Error('MyDropdown Error: label ref is undefined!');
    }

    const elRect = el.getBoundingClientRect();

    return elRect
  }

  return {
    elRef,
    locate
  }
}