<template>
  <NexusUVC public-key='2222222222222222222222222222222222222222222222222222222222222222' @completed="completed"
    @retry="retry" :options="options" />
</template>

<script lang='ts'>
import type { UVCOptions } from '@nexusuvc/frontend';
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    /** fires on completion */
    completed: (v: string) => {
      alert(`completed fired with ${v}`)
    },
    /** fires on uvc internal remount - no guarantees for this one */
    retry: () => {
      alert(`retry fired`)
    },
  },
  data() {
    return {
      options: {
        slider: false,
      } as UVCOptions
    }
  }
});
</script>

<style>
html {
  background: #1a1a1a;
  color: #fff;
}
</style>