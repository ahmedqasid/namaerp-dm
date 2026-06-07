// Client-side access to the generated data-model index (bundled at build time,
// shared as one chunk between the components that import it).
import dmIndex from '../../public/dm-json/index.json'
import moduleTitlesJson from '../../titles-and-order-of-files.json'

export interface DmIndexEntry {
    name: string
    table: string
    module: string
    ar?: string
    en?: string
    details?: { id: string, table: string }[]
}

export const dmEntities: DmIndexEntry[] = (dmIndex as any).entities
export const dmEnums: string[] = (dmIndex as any).enums

const moduleTitles: Record<string, string> = {}
for (const [folderPath, title] of Object.entries((moduleTitlesJson as any).folderTitles as Record<string, string>)) {
    if (folderPath.startsWith('/modules/'))
        moduleTitles[folderPath.substring('/modules/'.length)] = title
}

export function moduleTitle(moduleId: string): string {
    return moduleTitles[moduleId] ?? moduleId
}

export function entityPagePath(entry: { module: string, name: string }): string {
    return `/modules/${entry.module}/${entry.name}.html`
}

export function enumPagePath(enumName: string): string {
    return `/modules/enums/${enumName}.html`
}

// Maps every entity name AND detail table name to its page path (details map to parent#anchor),
// mirroring the legacy entityPathsMap used by dm.namasoft.com#EntityType deep links.
export function buildEntityPathsMap(): Record<string, string> {
    const map: Record<string, string> = {}
    for (const entry of dmEntities) {
        const page = entityPagePath(entry)
        map[entry.name] = page
        for (const detail of entry.details ?? [])
            map[detail.table] = page + '#' + detail.id
    }
    return map
}
