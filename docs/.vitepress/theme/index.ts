import {h} from 'vue'
import DefaultTheme from 'vitepress/theme'
import type {Theme} from 'vitepress'
import './custom.css'
import EntityPage from './components/EntityPage.vue'
import EnumPage from './components/EnumPage.vue'
import ModuleEntitiesList from './components/ModuleEntitiesList.vue'
import ModulesIndex from './components/ModulesIndex.vue'
import RedirectFromHash from './components/RedirectFromHash.vue'
import TableSearchBox from './components/TableSearchBox.vue'
import TableSearchNavButton from './components/TableSearchNavButton.vue'

export default {
    extends: DefaultTheme,
    // Adds the instant "Table Search" button next to the built-in (minisearch) navbar search
    Layout: () => h(DefaultTheme.Layout, null, {
        'nav-bar-content-before': () => h(TableSearchNavButton)
    }),
    enhanceApp({app}) {
        app.component('EntityPage', EntityPage)
        app.component('EnumPage', EnumPage)
        app.component('ModuleEntitiesList', ModuleEntitiesList)
        app.component('ModulesIndex', ModulesIndex)
        app.component('RedirectFromHash', RedirectFromHash)
        app.component('TableSearchBox', TableSearchBox)
    }
} satisfies Theme
