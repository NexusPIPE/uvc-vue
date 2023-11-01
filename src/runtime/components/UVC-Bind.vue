<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <nexus-uvc :id="uvcId" :publickey="publicKey"
    :options="typeof componentOptions === 'string' ? componentOptions : JSON.stringify(componentOptions)" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  type PropType,
} from 'vue';
import type { UVCOptions } from '@nexusuvc/frontend';

export default defineComponent({
  props: {
    publicKey: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<UVCOptions>,
      default: () => { },
      required: false,
    },
  },
  emits: ['completed', 'retry'],
  setup(props) {
    const componentOptions = ref(props.options);
    const uvcId = `uvc-${Math.random().toString(36).substring(2, 9)}`;

    return { componentOptions, uvcId };
  },
  async mounted() {
    let uvc: HTMLElement | null = null;
    await import('@nexusuvc/frontend/vanilla');

    uvc = document.getElementById(this.uvcId) as HTMLElement;
    if (uvc) {
      uvc.addEventListener('completed', this._completionListener as any);
      uvc.addEventListener('retry', this._retryListener as any);
    } else console.warn('Could not find UVC widget on mount!');
  },
  async unmounted() {
    const uvc = document.getElementById(this.uvcId) as HTMLElement;

    if (uvc) {
      uvc.removeEventListener('completed', this._completionListener as any);
      uvc.removeEventListener('retry', this._retryListener as any);
    }
  },
  methods: {
    _completionListener(e: CustomEvent<string>) {
      this.$emit('completed', e.detail)
    },
    _retryListener(e: CustomEvent<void>) {
      this.$emit('retry', e.detail)
    }
  }
});
</script>
