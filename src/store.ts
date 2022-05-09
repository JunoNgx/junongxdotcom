import { writable, derived } from 'svelte/store'

export const entryList = writable(new Array<Entry>())
export const tagDataMap = writable(new Map<string, boolean>())
export const isDarkMode = writable(false)

export const displayedEntryList = derived(
    [entryList, tagDataMap], ([$entryList, $tagDataMap]) => {
        const displayedEntryList = $entryList.filter(entry => {
            let shouldBeDisplayed = false
    
            entry.tags.forEach(tag => {
                if ($tagDataMap.get(tag)) shouldBeDisplayed = true
            })
    
            return shouldBeDisplayed
        })

        return displayedEntryList
    }
)
