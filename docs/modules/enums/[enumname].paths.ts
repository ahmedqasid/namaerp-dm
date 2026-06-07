import {readDmIndex, readEnumJson} from '../../.vitepress/dm-node-data.mts'

export default {
    paths() {
        return readDmIndex().enums.map(enumName => ({
            params: {
                enumname: enumName,
                data: readEnumJson(enumName)
            }
        }))
    }
}
