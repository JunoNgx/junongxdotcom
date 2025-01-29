import { writable, derived, type Readable } from 'svelte/store'
import { DisplayModeEnum } from 'src/common'

export const entryList = writable(new Array<Entry>())
export const tagDisplayStatusMap = writable(new Map<string, boolean>())
export const displayMode = writable(DisplayModeEnum.OS)
// Calculate from auto to determine whether the final mode is actually dark
export const isComputedDarkMode = derived<Readable<DisplayModeEnum>, boolean>(
    displayMode,
    ($displayMode, set) => {
        if ($displayMode === DisplayModeEnum.OS) {
            const preferDarkMediaQueryList = window.matchMedia?.('(prefers-color-scheme: dark)')
            const computedVal = preferDarkMediaQueryList.matches
                ? DisplayModeEnum.DARK
                : DisplayModeEnum.LIGHT
            set(computedVal === DisplayModeEnum.DARK)
        }

        set($displayMode === DisplayModeEnum.DARK)
    }
)

export const displayedEntryList = derived(
    [entryList, tagDisplayStatusMap], ([$entryList, $tagDisplayStatusMap]) => {
        return $entryList.filter(shouldEntryBeDisplayedFilterFunc($tagDisplayStatusMap))
    }
)

const shouldEntryBeDisplayedFilterFunc = (tagDisplayStatusMap: Map<string, boolean>) => {
    return (entry: Entry) => {
        for (const tag of entry.tags) {
            if (tagDisplayStatusMap.get(tag)) return true
        }

        return false
    }
}
