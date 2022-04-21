import { onMounted, onUnmounted, ref, type Ref } from 'vue';

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

type OffsetRect = Mutable<Omit<DOMRectReadOnly, 'toJSON'>>

export function useOffset<E extends HTMLElement = HTMLElement>(): [
  ref: Ref<E | undefined>,
  offset: Ref<OffsetRect | undefined>,
  update: () => void
] {
  const elRef = ref<E>();
  const offset = ref<OffsetRect>();
  const ob = new ResizeObserver(() => {
    updateOffset()
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateOffset);
    elRef.value && ob.unobserve(elRef.value);
  })

  onMounted(() => {
    elRef.value && ob.observe(elRef.value);
    window.addEventListener("scroll", updateOffset);
  });

  function updateOffset() {
    if (!elRef.value) {
      throw new Error('useOffset: target is loosing')
    }

    const o = elRef.value.getBoundingClientRect();

    offset.value = {
      width: o.width,
      height: o.height,
      left: o.left,
      bottom: o.bottom,
      right: o.right,
      top: o.top,
      x: o.x,
      y: o.y,
    };
  }

  return [elRef, offset, updateOffset];
}