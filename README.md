# NexusUVC/Vue

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Wrapper around [@nexusuvc/frontend](https://npm.im/@nexusuvc/frontend) for Vue.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@nexusuvc/vue?file=playground%2Fapp.vue) -->
- [📖 &nbsp;Documentation](https://docs.nexuspipe.com/uvc/integrating/)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Privacy First: NexusUVC™ prioritises your privacy. With no unnecessary logging and full compliance with global data laws, our focus is solely on whether users navigate the UVC successfully.
- 🚠 &nbsp;Frictionless: NexusUVC™ offers a seamless and rapid solution, halting bots and welcoming genuine users with open arms.
- 👋 &nbsp;Compatible: No user left behind. NexusUVC™ operates seamlessly across all browsers and operating systems, and we're continually improving accessibility on assistive devices.

## Quick Setup

1. Add `@nexusuvc/vue` dependency to your project

```zsh
# Using pnpm
pnpm add -D @nexusuvc/vue

# Using npm
npm install --save-dev @nexusuvc/vue
```

2. Add `@nexusuvc/vue` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    '@nexusuvc/vue'
  ]
})
```

3. Use the component

```html
<template>
  <NexusUVC public-key='<your public key>' @completed="<listener>" :options="<options>" />
</template>
```

That's it! You can now use NexusUVC in your Nuxt app ✨

## How it works

This component simply defines a global `NexusUVC` component, which wraps the HTML `nexus-uvc` component provided by [@nexusuvc/frontend](https://github.com/NexusPIPE/uvc-frontend/tree/master)'s [plain HTML](https://github.com/NexusPIPE/uvc-frontend/tree/master/examples/plain) library, which itself is the result of compiling the [Svelte](https://github.com/NexusPIPE/uvc-frontend/tree/master/examples/svelte) library (in the same package) to a plain HTML component.

Tl;dr: We're abstracting the compilation output from the Svelte Frame Host.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nexusuvc/vue/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@nexusuvc/vue

[npm-downloads-src]: https://img.shields.io/npm/dm/@nexusuvc/vue.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@nexusuvc/vue

[license-src]: https://img.shields.io/npm/l/@nexusuvc/vue.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@nexusuvc/vue

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
