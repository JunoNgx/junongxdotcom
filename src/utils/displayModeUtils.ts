import { get } from "svelte/store"
import { DisplayModeEnum } from "src/common"
import { displayMode, isComputedDarkMode } from "src/store"

const loadDisplayModeFromLocalStorage = () => {
    const storedValue = parseInt(localStorage.getItem("darkModeSetting") || "0")
    if (storedValue !== null) displayMode.set(storedValue)
    else displayMode.set(DisplayModeEnum.DARK)
}

const writeDocumentAttribute = () => {
    document.documentElement.setAttribute(
        "data-isdarkmode", get(isComputedDarkMode).toString())
}

const setupQueryListener = () => {
    const preferDarkMediaQueryList = window.matchMedia?.("(prefers-color-scheme: dark)")

    if (get(displayMode) === DisplayModeEnum.OS) {
        preferDarkMediaQueryList.addEventListener("change", handlePreferDarkQueryChange);
    } else {
        preferDarkMediaQueryList.removeEventListener("change", handlePreferDarkQueryChange);
    }
}

const handlePreferDarkQueryChange = () => {
    writeDocumentAttribute()
}

const handleDisplayModeChange = () => {
    writeDocumentAttribute()
    setupQueryListener()
}

const storeDisplayModeValue = (newValue: DisplayModeEnum) => {
    displayMode.set(newValue);
    localStorage.setItem("darkModeSetting", newValue.toString())
}

export {
    loadDisplayModeFromLocalStorage,
    storeDisplayModeValue,
    handleDisplayModeChange,
}