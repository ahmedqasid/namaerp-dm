import {defineClientConfig} from '@vuepress/client'
import RTLBlock from "./components/RTLBlock.vue";
import LTRBlock from "./components/LTRBlock.vue";
import ServerBaseURL from "./components/ServerBaseURL.vue";
import UtilityLinkBuilder from "./components/UtilityLinkBuilder.vue";
import NamaURL from "./components/NamaURL.vue";
import NamaOptionURL from "./components/NamaOptionURL.vue";
import GlobalConfigOption from "./components/GlobalConfigOption.vue";
import LinkToNewRecord from "./components/LinkToNewRecord.vue";
import SupplyChainOption from "./components/SupplyChainOption.vue";
import CopyIcon from "./components/CopyIcon.vue";
import ContentFilter from "./components/ContentFilter.vue";
import RedirectFromHash from "./components/RedirectFromHash.vue";

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.component('RTLBlock', RTLBlock)
        app.component('rtl', RTLBlock)
        app.component('LTRBlock', LTRBlock)
        app.component('ltr', LTRBlock)
        app.component('ServerBaseURL', ServerBaseURL)
        app.component('UtilityLinkBuilder', UtilityLinkBuilder)
        app.component('NamaURL', NamaURL)
        app.component('NamaOptionURL', NamaOptionURL)
        app.component('GlobalConfigOption', GlobalConfigOption)
        app.component('LinkToNewRecord', LinkToNewRecord)
        app.component('SupplyChainOption', SupplyChainOption)
        app.component('CopyIcon', CopyIcon)
        app.component('ContentFilter', ContentFilter)
        app.component('RedirectFromHash', RedirectFromHash)
    }
})
