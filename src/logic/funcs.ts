import DarkModeOptionsEnum from "../types/DarkModeOptionsEnum"

import { darkModeSetting, isDarkMode } from "../store"

const retrieveDarkModeSettingFromLocalStorage = () => {
    const storedValue = parseInt(localStorage.getItem('darkModeSetting'))
    if (storedValue !== null) darkModeSetting.set(storedValue)
    else darkModeSetting.set(DarkModeOptionsEnum.DARK)
}

const writeDarkModeSettingToLocalStorage = (value: DarkModeOptionsEnum) => {
    localStorage.setItem('darkModeSetting', value.toString())
}

// const processShouldBeDarkMode = (darkModeSetting: DarkModeOptionsEnum) => {
//     if (darkModeSetting === DarkModeOptionsEnum.OS) {
//         isDarkMode.set(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
//     }

//     return darkModeSetting === DarkModeOptionsEnum.DARK
// }

const processDocumentBodyFromDarkMode = (isDarkMode: boolean) => {
    if (isDarkMode) document.body.classList.add("is-dark")
    else document.body.classList.remove("is-dark")
}

export {
    retrieveDarkModeSettingFromLocalStorage,
    writeDarkModeSettingToLocalStorage,
    // processShouldBeDarkMode,
    processDocumentBodyFromDarkMode,
}