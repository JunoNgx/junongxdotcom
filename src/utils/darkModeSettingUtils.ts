import { get } from "svelte/store"
import { DarkModeOptionsEnum } from "src/common"
import { darkModeSetting, isDarkMode } from "src/store"

const retrieveDarkModeSettingFromLocalStorage = () => {
    const storedValue = parseInt(localStorage.getItem('darkModeSetting') || "0")
    if (storedValue !== null) darkModeSetting.set(storedValue)
    else darkModeSetting.set(DarkModeOptionsEnum.DARK)
}

const storeDarkModeSettingToLocalStorage = (value: DarkModeOptionsEnum) => {
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
    document.documentElement.setAttribute(
        "data-isdarkmode",
        isDarkMode.toString()
    );
}

const handleOsSettingsListeners = () => {
    const preferDarkMediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)")

    if (get(darkModeSetting) === DarkModeOptionsEnum.OS) {
        preferDarkMediaQueryList.addEventListener("change", handlePreferDarkQueryChange);
    } else {
        preferDarkMediaQueryList.removeEventListener("change", handlePreferDarkQueryChange);
    }
}

const handlePreferDarkQueryChange = () => {
    isDarkMode.set(processShouldBeDarkMode(get(darkModeSetting)))
    processDocumentBodyFromDarkMode(get(isDarkMode))
}

const handleDarkModeSettingChange = () => {
    isDarkMode.set(processShouldBeDarkMode(get(darkModeSetting)))
    processDocumentBodyFromDarkMode(get(isDarkMode))
    handleOsSettingsListeners()
}

export {
    retrieveDarkModeSettingFromLocalStorage,
    storeDarkModeSettingToLocalStorage,
    handleDarkModeSettingChange,
}