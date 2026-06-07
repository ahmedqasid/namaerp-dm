// Node-side (build time) access to the generated dm-json data.
// Used by the VitePress config (search index sections) and the dynamic-route paths loaders.
import fs from 'node:fs'
import path from 'node:path'

export interface DmField {
    id: string
    column?: string
    columns?: string[]
    ar?: string
    en?: string
    type: string
    refTo?: string
    refPath?: string
    enum?: string
}

export interface DmDetail {
    id: string
    table: string
    joinColumn: string
    ar?: string
    en?: string
    fields: DmField[]
}

export interface DmEntity {
    entity: string
    table: string
    module: string
    ar?: string
    arPlural?: string
    en?: string
    enPlural?: string
    page: string
    fields: DmField[]
    details?: DmDetail[]
}

export interface DmIndexEntry {
    name: string
    table: string
    module: string
    ar?: string
    en?: string
    details?: { id: string, table: string }[]
}

export interface DmIndex {
    about: string
    entities: DmIndexEntry[]
    enums: string[]
}

let cachedJsonDir: string | null = null

export function dmJsonDir(): string {
    if (cachedJsonDir) return cachedJsonDir
    const candidates = [
        path.resolve('docs/public/dm-json'),
        path.resolve('public/dm-json'),
        path.resolve(import.meta.dirname ?? '.', '../public/dm-json')
    ]
    for (const candidate of candidates) {
        if (fs.existsSync(path.join(candidate, 'index.json'))) {
            cachedJsonDir = candidate
            return candidate
        }
    }
    throw new Error('dm-json/index.json not found. Run the DMRenderer Java generator first. Looked in:\n' + candidates.join('\n'))
}

let cachedIndex: DmIndex | null = null

export function readDmIndex(): DmIndex {
    if (!cachedIndex)
        cachedIndex = JSON.parse(fs.readFileSync(path.join(dmJsonDir(), 'index.json'), 'utf-8'))
    return cachedIndex!
}

export function readEntityJson(name: string): DmEntity | null {
    const file = path.join(dmJsonDir(), name + '.json')
    if (!fs.existsSync(file)) return null
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

export function readEnumJson(name: string): { enum: string, values: { id: string, ar?: string, en?: string }[] } | null {
    const file = path.join(dmJsonDir(), 'enums', name + '.json')
    if (!fs.existsSync(file)) return null
    return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

let cachedModuleTitles: Record<string, string> | null = null

export function moduleTitle(moduleId: string): string {
    if (!cachedModuleTitles) {
        const titlesFile = path.resolve(dmJsonDir(), '../../titles-and-order-of-files.json')
        const folderTitles = JSON.parse(fs.readFileSync(titlesFile, 'utf-8')).folderTitles as Record<string, string>
        cachedModuleTitles = {}
        for (const [folderPath, title] of Object.entries(folderTitles)) {
            if (folderPath.startsWith('/modules/'))
                cachedModuleTitles[folderPath.substring('/modules/'.length)] = title
        }
    }
    return cachedModuleTitles[moduleId] ?? moduleId
}

function fieldText(field: DmField): string {
    const columns = field.columns ? field.columns.join(' ') : field.column
    return [field.id, columns, field.ar, field.en, field.type, field.refTo, field.enum]
        .filter(Boolean).join(' ')
}

interface SearchSection {
    anchor?: string
    titles: string[]
    text: string
}

// Feeds the built-in (minisearch) local search for dynamic-route pages, which have no
// physical markdown file the indexer could render. Returning undefined falls back to
// VitePress's default section splitting (used for the static pages).
export function dmSearchSections(file: string): SearchSection[] | undefined {
    const match = /[\\/]modules[\\/]([^\\/]+)[\\/]([^\\/]+)\.md$/.exec(file)
    if (!match) return undefined
    const [, moduleId, name] = match
    if (name === 'index') return []
    if (moduleId === 'enums') {
        const enumJson = readEnumJson(name)
        if (!enumJson) return undefined
        const text = enumJson.values.map(v => [v.id, v.ar, v.en].filter(Boolean).join(' ')).join('\n')
        return [{titles: [enumJson.enum], text}]
    }
    const entity = readEntityJson(name)
    if (!entity) return undefined
    const mainTitle = entity.entity + (entity.table !== entity.entity ? ` (${entity.table})` : '')
    const headerText = [entity.ar, entity.arPlural, entity.en, entity.enPlural, entity.table].filter(Boolean).join(' ')
    const sections: SearchSection[] = [{
        titles: [mainTitle],
        text: headerText + '\n' + entity.fields.map(fieldText).join('\n')
    }]
    for (const detail of entity.details ?? []) {
        sections.push({
            anchor: detail.id,
            titles: [mainTitle, `${detail.id} (${detail.table})`],
            text: [detail.table, detail.ar, detail.en].filter(Boolean).join(' ') + '\n' + detail.fields.map(fieldText).join('\n')
        })
    }
    return sections
}
