import {readDmIndex, readEntityJson} from '../../.vitepress/dm-node-data.mts'

export default {
    paths() {
        return readDmIndex().entities.map(entry => ({
            params: {
                module: entry.module,
                entity: entry.name,
                data: readEntityJson(entry.name)
            }
        }))
    }
}
