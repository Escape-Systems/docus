import { createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { inferSiteURL, getPackageJsonMetadata } from '../utils/meta'
import { getGitBranch, getGitEnv, getLocalGitInfo } from '../utils/git'

export default defineNuxtModule({
  meta: {
    name: 'default-configs',
  },
  async setup(_options, nuxt) {
    const dir = nuxt.options.rootDir
    const url = inferSiteURL()
    const meta = await getPackageJsonMetadata(dir)
    const gitInfo = await getLocalGitInfo(dir) || getGitEnv()
    const siteName = nuxt.options?.site?.name || meta.name || gitInfo?.name || ''

    nuxt.options.llms = defu(nuxt.options.llms, {
      domain: url,
      title: siteName,
      description: meta.description || '',
      full: {
        title: siteName,
        description: meta.description || '',
      },
    })

    nuxt.options.site = defu(nuxt.options.site, {
      url,
      name: siteName,
      debug: false,
    })

    nuxt.options.appConfig.header = defu(nuxt.options.appConfig.header, {
      title: siteName,
    })

    nuxt.options.appConfig.seo = defu(nuxt.options.appConfig.seo, {
      titleTemplate: `%s - ${siteName}`,
      title: siteName,
      description: meta.description || '',
    })

    nuxt.options.appConfig.github = defu(nuxt.options.appConfig.github, {
      owner: gitInfo?.owner,
      name: gitInfo?.name,
      url: gitInfo?.url,
      branch: getGitBranch(),
    })

    nuxt.options.appConfig.toc = defu(nuxt.options.appConfig.toc, {
      title: 'On this page',
    })

    /*
    ** I18N
    */
    if (nuxt.options.i18n && nuxt.options.i18n.locales) {
      // Override strategy to prefix
      nuxt.options.i18n = {
        ...nuxt.options.i18n,
        strategy: 'prefix',
      }

      nuxt.hook('i18n:registerModule', (register) => {
        const { resolve } = createResolver(import.meta.url)

        const locales = nuxt.options.i18n?.locales?.map((locale) => {
          return typeof locale === 'string'
            ? {
                code: locale,
                name: locale,
                file: `${locale}.json`,
              }
            : {
                code: locale.code,
                name: locale.name || locale.code,
                file: `${locale.code}.json`,
              }
        })

        register({
          langDir: resolve('../i18n/locales'),
          locales,
        })
      })
    }
  },
})
