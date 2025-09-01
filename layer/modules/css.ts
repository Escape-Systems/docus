import { defineNuxtModule, addTemplate } from '@nuxt/kit'
import { joinURL } from 'ufo'

export default defineNuxtModule({
  meta: {
    name: 'css',
  },
  async setup(_options, nuxt) {
    const dir = nuxt.options.rootDir

    const contentDir = joinURL(dir, 'content')

    const cssTemplate = addTemplate({
      filename: 'docus.css',
      getContents: () => {
        return `@import "tailwindcss";
@import "@nuxt/ui";

@source "${contentDir.replace(/\\/g, '/')}/**/*";
@source "../../app.config.ts";`
      },
    })

    nuxt.options.css.push(cssTemplate.dst)
  },
})
