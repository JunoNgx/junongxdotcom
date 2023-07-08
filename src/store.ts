import { writable, derived } from 'svelte/store'

export const entryList = writable(new Array<Entry>())
export const tagDataMap = writable(new Map<string, boolean>())
export const isDarkMode = writable(false)

export const displayedEntryList = derived(
    [entryList, tagDataMap], ([$entryList, $tagDataMap]) => {
        return $entryList.filter(shouldEntryBeDisplayedFilterFunc($tagDataMap))
    }
)

const shouldEntryBeDisplayedFilterFunc = (tagDataMap: Map<string, boolean>) => {
    return (entry: Entry) => {
        for (const tag of entry.tags) {
            if (tagDataMap.get(tag)) return true
        }

        return false
    }
}
