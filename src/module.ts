import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'uvc',
    configKey: 'uvc',
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);

    addComponent({
      name: 'NexusUVC',
      filePath: resolver.resolve('runtime/components/UVC-Bind.vue'),
    });
  },
});
