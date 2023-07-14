import DarkModeOptionsEnum from "../types/DarkModeOptionsEnum"

import { darkModeSetting } from "../store"

const retrieveDarkModeSettingFromLocalStorage = () => {
    const storedValue = parseInt(localStorage.getItem('darkModeSetting'))
    if (storedValue !== null) darkModeSetting.set(storedValue)
    else darkModeSetting.set(DarkModeOptionsEnum.DARK)
}

const writeDarkModeSettingToLocalStorage = (value: DarkModeOptionsEnum) => {
    localStorage.setItem('darkModeSetting', value.toString())
}

const processShouldBeDarkMode = (darkModeSetting: DarkModeOptionsEnum) => {
    if (darkModeSetting === DarkModeOptionsEnum.OS) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    return darkModeSetting === DarkModeOptionsEnum.DARK
}

export {
    retrieveDarkModeSettingFromLocalStorage,
    writeDarkModeSettingToLocalStorage,
    processShouldBeDarkMode,
}