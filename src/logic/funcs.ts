import type DarkModeOptionsEnum from "src/types/DarkModeOptionsEnum"

const writeDarkModeSettingToLocalStorage = (value: DarkModeOptionsEnum) => {
    localStorage.setItem('DarkModeSetting', value.toString())
}

export {
    writeDarkModeSettingToLocalStorage,
}