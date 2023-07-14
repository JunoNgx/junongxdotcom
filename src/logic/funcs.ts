import type DarkModeOptionsEnum from "src/types/DarkModeOptionsEnum"

const writeDarkModeSettingToLocalStorage = (value: DarkModeOptionsEnum) => {
    localStorage.setItem('darkModeSetting', value.toString())
}

export {
    writeDarkModeSettingToLocalStorage,
}