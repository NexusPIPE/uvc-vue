import {
  defineNuxtModule,
  createResolver,
  addComponent,
} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'uvc',
    configKey: 'uvc',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // From the runtime directory
    addComponent({
      name: 'NexusUVC',
      filePath: resolver.resolve('runtime/components/UVC-Bind.vue'),
    });
  },
});
