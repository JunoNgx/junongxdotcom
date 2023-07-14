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

export {
    retrieveDarkModeSettingFromLocalStorage,
    writeDarkModeSettingToLocalStorage,
}