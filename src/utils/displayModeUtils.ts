import { get } from "svelte/store"
import { DisplayModeEnum } from "src/common"
import { darkModeSetting, isDarkMode } from "src/store"

const loadDisplayModeFromLocalStorage = () => {
    const storedValue = parseInt(localStorage.getItem('darkModeSetting') || "0")
    if (storedValue !== null) darkModeSetting.set(storedValue)
    else darkModeSetting.set(DisplayModeEnum.DARK)
}

const processShouldBeDarkMode = (darkModeSetting: DisplayModeEnum) => {
    if (darkModeSetting === DisplayModeEnum.OS) {
        const preferDarkMediaQueryList = window.matchMedia?.('(prefers-color-scheme: dark)')
        return preferDarkMediaQueryList.matches
    }

    return darkModeSetting === DisplayModeEnum.DARK
}

const setDisplayModeAttributeInDocument = (isDarkMode: boolean) => {
    document.documentElement.setAttribute(
        "data-isdarkmode",
        isDarkMode.toString()
    );
}

const setupQueryListener = () => {
    const preferDarkMediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)")

    if (get(darkModeSetting) === DisplayModeEnum.OS) {
        preferDarkMediaQueryList.addEventListener("change", handlePreferDarkQueryChange);
    } else {
        preferDarkMediaQueryList.removeEventListener("change", handlePreferDarkQueryChange);
    }
}

const handlePreferDarkQueryChange = () => {
    isDarkMode.set(processShouldBeDarkMode(get(darkModeSetting)))
    setDisplayModeAttributeInDocument(get(isDarkMode))
}

const handleDisplayModeChange = () => {
    isDarkMode.set(processShouldBeDarkMode(get(darkModeSetting)))
    setDisplayModeAttributeInDocument(get(isDarkMode))
    setupQueryListener()
}

const storeDisplayModeValue = (newValue: DisplayModeEnum) => {
    darkModeSetting.set(newValue);
    localStorage.setItem('darkModeSetting', newValue.toString())
}

export {
    loadDisplayModeFromLocalStorage,
    storeDisplayModeValue,
    handleDisplayModeChange,
}