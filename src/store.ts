import { writable, derived } from 'svelte/store'

export const entryList = writable(new Array<Entry>())
// export const displayedEntryList = writable(new Array<Entry>())

// export const fullTagList = writable(new Array<string>())
// export const selectedTagList = writable(new Array<string>())

// export const tagDataList = writable(new Array<TagData>())
export const tagDataList = writable(new Map<string, boolean>())
export const isDarkMode = writable(false)

export const getDisplayedEntries = derived(
    [entryList, tagDataList], ([$entryList, $tagDataList]) => {
        const displayedEntryList = $entryList.filter(entry => {
            let shouldBeDisplayed = false
    
            entry.tags.forEach(tag => {
                if ($tagDataList.get(tag)) shouldBeDisplayed = true
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

// export function setDefaultTagDataList(entryList: Array<Entry>) {
//     const tmpTagList = []

//     entryList.forEach(entry => {
//         entry.tags.forEach(tag => {
//             if (!tmpTagList.includes(tag)) {
//                 tmpTagList.push(tag)
//             }
//         })
//     })

//     // tmpTagList.forEach(tag => {
//     //     $tagDataList.push({
//     //         tag,
//     //         isDisplayed: true
//     //     })
//     // })

//     tmpTagList.forEach(tag => {
//         $tagDataList.set(tag, true)
//     })
// }

// function setDisplayedEntryList(tagDataList: Map<string, boolean>) {
//     $displayedEntryList = $fullEntryList.filter(entry => {
//         let shouldBeDisplayed = false

//         entry.tags.forEach(tag => {
//             if (tagDataList.get(tag)) shouldBeDisplayed = true
//         })

//         return shouldBeDisplayed
//     })
// }

