import {moduleTitle, readDmIndex} from '../../.vitepress/dm-node-data.mts'

export default {
    paths() {
        const byModule = new Map<string, { name: string, table: string, ar?: string, en?: string }[]>()
        for (const entry of readDmIndex().entities) {
            if (!byModule.has(entry.module))
                byModule.set(entry.module, [])
            byModule.get(entry.module)!.push({name: entry.name, table: entry.table, ar: entry.ar, en: entry.en})
        }
        return [...byModule.entries()].map(([module, entities]) => ({
            params: {module, title: moduleTitle(module), entities}
        }))
    }
}
