<script lang="ts">
    import { darkModeSetting } from "src/store"
    import { DarkModeOptionsEnum } from "src/common"
    import {
        storeDarkModeSettingToLocalStorage,
        handleDarkModeSettingChange,
    } from "src/utils/darkModeSettingUtils"

    const DARK_MODE_LABEL_DISPLAY_TIME = 2000
    const darkModeSettingLabelOptions = [
        "os settings",
        "light mode",
        "dark mode"
    ]

    let darkModeSettingLabel: string
    let shouldDisplayDarkModeSettingLabel: boolean = false
    let darkModeSettingLabelDisplayTimeout: ReturnType<typeof setTimeout>

    const updateDarkModeSettingLabel = () => {
        darkModeSettingLabel = darkModeSettingLabelOptions[$darkModeSetting]
    }

    const displayDarkModeSettingLabel = () => {
        shouldDisplayDarkModeSettingLabel = true
        clearTimeout(darkModeSettingLabelDisplayTimeout)
        darkModeSettingLabelDisplayTimeout = setTimeout(() => {
            shouldDisplayDarkModeSettingLabel = false
        }, DARK_MODE_LABEL_DISPLAY_TIME)
    }

    const switchDarkModeOption = (newValue: DarkModeOptionsEnum) => {
        darkModeSetting.set(newValue)
        storeDarkModeSettingToLocalStorage(newValue)
        handleDarkModeSettingChange()
        updateDarkModeSettingLabel()
        displayDarkModeSettingLabel()
    }

    updateDarkModeSettingLabel()
</script>

<template>
    <div class="display-mode">
        <div class="display-mode__content-wrapper">
            <span class="display-mode__current-label
                    {shouldDisplayDarkModeSettingLabel ? 'display-mode__current-label--is-displayed' : ''}
                "
            >
                {darkModeSettingLabel}
            </span>
            <div class="display-mode__option-list">
                <div class="display-mode__indicator
                    {$darkModeSetting === DarkModeOptionsEnum.OS ? 'display-mode__indicator--shift-zero' : ''}
                    {$darkModeSetting === DarkModeOptionsEnum.LIGHT ? 'display-mode__indicator--shift-one' : ''}
                    {$darkModeSetting === DarkModeOptionsEnum.DARK ? 'display-mode__indicator--shift-two' : ''}
                "/>
                <button class="display-mode__option-btn"
                    on:click={() => switchDarkModeOption(DarkModeOptionsEnum.OS)}
                    aria-label="Switch to dark mode option: uses OS Settings"
                >
                    <!-- Gear -->
                    <svg class="display-mode__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </button>
                <button class="display-mode__option-btn"
                    on:click={() => switchDarkModeOption(DarkModeOptionsEnum.LIGHT)}
                    aria-label="Switch to dark mode option: Light mode"
                >
                    <!-- Sun -->
                    <svg class="display-mode__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                </button>
                <button class="display-mode__option-btn"
                    on:click={() => switchDarkModeOption(DarkModeOptionsEnum.DARK)}
                    aria-label="Switch to dark mode option: Dark mode"
                >
                    <!-- Moon -->
                    <svg class="display-mode__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>

            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @use "../styles/mixins" as m
    @use "../styles/vars" as v

    .display-mode
        +m.control-wrapper

        // For pontential usage of __title

        &__content-wrapper

        &__current-label
            vertical-align: middle
            opacity: 0
            user-select: none
            +m.transition(opacity)

            &--is-displayed
                opacity: 1

        &__option-list
            display: inline-flex
            flex-direction: row
            margin-left: 1rem

        &__indicator
            position: absolute
            width: 30px
            height: 30px
            border-style: solid
            border-width: 1px
            border-color: var(--col-pri)
            pointer-events: none
            +m.transition(translate)

            &--shift-one
                translate: 32px

            &--shift-two
                translate: 64px

        &__option-btn
            background-color: transparent
            border-width: 0
            padding: 0
            cursor: pointer
            width: 22px
            height: 22px
            margin: 5px

            &:hover
                background-color: transparent
                border-width: 0
                padding: 0

        &__icon-svg
            display: inline-block
            vertical-align: middle
            stroke: var(--col-pri)

</style>