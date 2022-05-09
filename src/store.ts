import { writable, derived } from 'svelte/store'

export const entryList = writable(new Array<Entry>())
// export const displayedEntryList = writable(new Array<Entry>())

// export const fullTagList = writable(new Array<string>())
// export const selectedTagList = writable(new Array<string>())

// export const tagDataMap = writable(new Array<TagData>())
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

// function setDefaultDisplayedEntryList(entryList: Array<Entry>) {
//     $displayedEntryList = [...entryList];
// }

// function setFullTagList(entryList: Array<Entry>) {
//     const tmpTagList = []

//     entryList.forEach(entry => {
//         entry.tags.forEach(tag => {
//             if (!tmpTagList.includes(tag)) {
//                 tmpTagList.push(tag)
//             }
//         })
//     })

//     $fullTagList = [...tmpTagList]
// }

// function setDefaultSelectedTagList(tagList: Array<string>) {
//     $selectedTagList = [...tagList]
// }


// function setDisplayedEntryList(tagDataMap: Map<string, boolean>) {
//     $displayedEntryList = $fullEntryList.filter(entry => {
//         let shouldBeDisplayed = false

//         entry.tags.forEach(tag => {
//             if (tagDataMap.get(tag)) shouldBeDisplayed = true
//         })

//         return shouldBeDisplayed
//     })
// }

