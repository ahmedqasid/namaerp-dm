import {defineConfig} from 'vitepress'
import {transliterate} from 'transliteration'
import {dmSearchSections} from './dm-node-data.mts'

const HOSTNAME = 'https://dm.namasoft.com'

function pageUrl(relativePath: string): string {
    return HOSTNAME + '/' + relativePath.replace(/\.md$/, '.html').replace(/(^|\/)index\.html$/, '$1')
}

export default defineConfig({
    title: 'Nama ERP Data Model',
    description: 'Nama ERP Data Model — database tables, columns, references and enums',
    head: [
        ['link', {rel: 'shortcut icon', type: 'image/png', href: '/namasoft.png'}]
    ],
    // Strict: the build fails on dead internal links
    ignoreDeadLinks: false,
    sitemap: {hostname: HOSTNAME + '/'},
    markdown: {
        anchor: {
            // Same slugify as docs.namasoft.com — preserves casing, spaces become dashes
            slugify: (str) => transliterate(str).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '')
        }
    },
    transformPageData(pageData) {
        const params = pageData.params as Record<string, any> | undefined
        pageData.frontmatter.head ??= []
        if (params?.entity) {
            pageData.title = params.entity
            pageData.description = ['Nama ERP table', params.data?.table, params.data?.en, params.data?.ar]
                .filter(Boolean).join(' — ')
            // Machine-readable alternate for LLMs and tools
            pageData.frontmatter.head.push(
                ['link', {rel: 'alternate', type: 'application/json', href: `${HOSTNAME}/dm-json/${params.entity}.json`}]
            )
        } else if (params?.enumname) {
            pageData.title = params.enumname
            pageData.description = `Nama ERP enum ${params.enumname} — values and translations`
            pageData.frontmatter.head.push(
                ['link', {rel: 'alternate', type: 'application/json', href: `${HOSTNAME}/dm-json/enums/${params.enumname}.json`}]
            )
        } else if (params?.module) {
            pageData.title = params.title || params.module
        }
        pageData.frontmatter.head.push(
            ['link', {rel: 'canonical', href: pageUrl(pageData.relativePath)}],
            ['meta', {property: 'og:title', content: pageData.title || 'Nama ERP Data Model'}],
            ['meta', {property: 'og:description', content: pageData.description || 'Nama ERP Data Model'}],
            ['meta', {property: 'og:url', content: pageUrl(pageData.relativePath)}]
        )
    },
    themeConfig: {
        logo: '/hero.svg',
        nav: [
            {text: 'Modules', link: '/modules/'},
            {text: 'Enums', link: '/modules/enums/'},
            {text: 'Full Search', link: '/full-search'},
            {text: 'Namasoft.com', link: 'https://namasoft.com'},
            {text: 'Documentation', link: 'https://docs.namasoft.com'}
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ahmedqasid/namaerp-dm'}
        ],
        // Built-in minisearch covers "all contents" (fields, columns, Arabic/English labels).
        // Dynamic entity/enum pages have no markdown source, so _splitIntoSections feeds the
        // indexer straight from the generated dm-json files. The navbar "Table Search" popup
        // (TableSearchNavButton) covers instant table/entity-name lookup.
        search: {
            provider: 'local',
            options: {
                detailedView: true,
                miniSearch: {
                    _splitIntoSections: (file: string, _html: string) => dmSearchSections(file)
                } as any
            }
        }
    }
})
