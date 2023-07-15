import { get } from "svelte/store"

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

const processShouldBeDarkMode = (darkModeSetting: DarkModeOptionsEnum) => {
    if (darkModeSetting === DarkModeOptionsEnum.OS) {
        const preferDarkMediaQueryList = window.matchMedia?.('(prefers-color-scheme: dark)')
        return preferDarkMediaQueryList.matches
    }

    return darkModeSetting === DarkModeOptionsEnum.DARK
}

const processDocumentBodyFromDarkMode = (isDarkMode: boolean) => {
    if (isDarkMode) document.body.classList.add("is-dark")
    else document.body.classList.remove("is-dark")
}

const handleOsSettingsListeners = () => {
    const currDarkModeSetting = get(darkModeSetting)
    const preferDarkMediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)")

    if (currDarkModeSetting === DarkModeOptionsEnum.OS) {
        preferDarkMediaQueryList.addEventListener("change", () => {
            isDarkMode.set(processShouldBeDarkMode(currDarkModeSetting))
            processDocumentBodyFromDarkMode(get(isDarkMode))
        });
    } else {
        preferDarkMediaQueryList.removeEventListener("change", () => {
            isDarkMode.set(processShouldBeDarkMode(currDarkModeSetting))
            processDocumentBodyFromDarkMode(get(isDarkMode))
        });
    }
}

const handleDarkModeSettingChange = () => {
    isDarkMode.set(processShouldBeDarkMode(get(darkModeSetting)))
    processDocumentBodyFromDarkMode(get(isDarkMode))
    handleOsSettingsListeners()
}

export {
    retrieveDarkModeSettingFromLocalStorage,
    writeDarkModeSettingToLocalStorage,
    // processShouldBeDarkMode,
    // processDocumentBodyFromDarkMode,
    // handleOsSettingsListeners,
    handleDarkModeSettingChange,
}