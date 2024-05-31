<script lang="ts">
    import contacts from "src/data/contacts.yaml"
    import { tagDataMap, darkModeSetting, isDarkMode } from "src/store"
    import { DarkModeOptionsEnum } from "src/common"
    import {
        storeDarkModeSettingToLocalStorage,
        handleDarkModeSettingChange,
    } from "src/utils/darkModeSettingUtils"

    const DARK_MODE_LABEL_DISPLAY_TIME = 2000

    let darkModeSettingLabel: string
    let shouldDisplayDarkModeSettingLabel: boolean = false
    let darkModeSettingLabelDisplayTimeout: ReturnType<typeof setTimeout>
    const darkModeSettingLabelOptions = [
        "os settings",
        "light mode",
        "dark mode"
    ]

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

    const switchTagData = (tag: string) => {
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    const checkAll = (booleanValue: boolean) => {
        $tagDataMap.forEach((isDisplayed, tagName) => $tagDataMap.set(tagName, booleanValue))
        tagDataMap.set($tagDataMap)
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
    <div class="control">

        <!-- Contacts -->
        <div class="control__contact-wrapper">
            <h2 class="control__contact-title">
                Find me elsewhere
            </h2>
            <div class="control__contact-list">
                {#if contacts.length > 0}
                    {#each contacts as contact}
                        <a class="control__contact-item"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={contact.url}
                        >
                            {contact.label}
                        </a>
                    {/each}
                {/if}
            </div>
        </div>

        <!-- Display mode -->
        <div class="control__display-mode-wrapper">
            <div class="control__display-mode">
                <span class="control__display-mode-label
                        {shouldDisplayDarkModeSettingLabel ? 'control__display-mode-label--is-displayed' : ''}
                    "
                >
                    {darkModeSettingLabel}
                </span>
                <div class="control__display-mode-option-list">
                    <div class="control__display-mode-indicator
                        {$darkModeSetting === DarkModeOptionsEnum.OS ? 'control__display-mode-indicator--shift-zero' : ''}
                        {$darkModeSetting === DarkModeOptionsEnum.LIGHT ? 'control__display-mode-indicator--shift-one' : ''}
                        {$darkModeSetting === DarkModeOptionsEnum.DARK ? 'control__display-mode-indicator--shift-two' : ''}
                    "/>
                    <button class="control__display-mode-button"
                        on:click={() => switchDarkModeOption(DarkModeOptionsEnum.OS)}
                        aria-label="Switch to dark mode option: uses OS Settings"
                    >
                        <!-- Gear -->
                        <svg class="control__display-mode-icon-svg"
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
                    <button class="control__display-mode-button"
                        on:click={() => switchDarkModeOption(DarkModeOptionsEnum.LIGHT)}
                        aria-label="Switch to dark mode option: Light mode"
                    >
                        <!-- Sun -->
                        <svg class="control__display-mode-icon-svg"
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
                    <button class="control__display-mode-button"
                        on:click={() => switchDarkModeOption(DarkModeOptionsEnum.DARK)}
                        aria-label="Switch to dark mode option: Dark mode"
                    >
                        <!-- Moon -->
                        <svg class="control__display-mode-icon-svg"
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

        <!-- Tag filter -->
        <div class="control__filter-tags-wrapper">
            <h2 class="control__filter-tags-title">
                Filter by tags
            </h2>
            <div class="control__filter-tags-buttons-container">
                <button class="control__filter-tags-button"
                    on:click={() => checkAll(false)}
                >
                    Uncheck all
                </button>

                <button class="control__filter-tags-button"
                    on:click={() => checkAll(true)}
                >
                    Check all
                </button>
            </div>
            <div class="control__filter-tags-list">
                {#each [...$tagDataMap] as [tag, isDisplayed]}
                    <button class="control__filter-tags-item
                            {isDisplayed && 'control__filter-tags-item--selected'}
                        "
                        on:click={() => switchTagData(tag)}
                    >
                        <span class="control__filter-tags-item-label">
                            {tag}
                        </span>
                        {#if isDisplayed}
                            <svg class="control__filter-tags-item-icon control__filter-tags-item-icon--is-selected"
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
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        {:else}
                            <svg class="control__filter-tags-item-icon"
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
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        {/if}
                    </button>
                {/each}
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    @mixin title
        font-size: 1.2rem
        margin: 0.75rem 0
        padding: 0.1rem 0.25rem
        border-bottom: 2px dashed var(--col-pri)
        border-top: 2px dashed var(--col-pri)
        width: fit-content
        +m.transition(border)

    // @mixin title--is-dark
    //     border-bottom: 2px dashed v.$col-pri-dark
    //     border-top: 2px dashed v.$col-pri-dark
    
    @mixin wrapper
        display: flex
        flex-flow: column nowrap
        align-items: flex-end
    
    .control
        margin-top: 0.5rem
        display: flex
        flex-direction: column
        flex-wrap: nowrap
        gap: 1rem
        +m.mobile
            margin-top: 1rem

        // Contact list
        &__contact-wrapper
            +wrapper

        &__contact-title
            +title
            // .control--is-dark &
            //     +title--is-dark

        &__contact-list
            display: flex
            flex-flow: row wrap
            justify-content: flex-end
            gap: 0.5rem 1.5rem

        &__contact-item
            +m.mobile
                text-decoration: underline

        // Display mode
        &__display-mode-wrapper
            +wrapper

        &__display-mode-title
            +title
            // .control--is-dark &
            //     +title--is-dark

        &__display-mode
            &-label
                vertical-align: middle
                opacity: 0
                user-select: none
                +m.transition(opacity)

                &--is-displayed
                    opacity: 1

            &-option-list
                display: inline-flex
                flex-direction: row
                margin-left: 1rem

            &-indicator
                position: absolute
                width: 30px
                height: 30px
                border-style: solid
                border-width: 1px
                border-color: var(--col-pri)
                pointer-events: none
                +m.transition(translate)

                .control--is-dark &
                    border-color: var(--col-pri)

                &--shift-one
                    translate: 32px

                &--shift-two
                    translate: 64px

            &-button
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

            &-icon-svg
                display: inline-block
                vertical-align: middle
                stroke: var(--col-pri)

                // .control--is-dark &
                //     stroke: var(--col-pri)

        // Tag filter
        &__filter-tags-wrapper
            +wrapper 

        &__filter-tags
            &-title
                +title
                // .control--is-dark &
                //     +title--is-dark

            &-buttons-container
                margin-bottom: 0.5rem

            &-button
                +m.button
                margin-left: 0.5rem
                // .control--is-dark &
                //     +m.button-dark

            &-list
                display: flex
                flex-flow: row wrap
                justify-content: flex-end
                gap: 0.5rem

            &-item
                border-radius: 1rem
                padding: 0.1rem 0.5rem
                height: 1.2rem
                cursor: pointer
                display: flex
                flex-flow: row nowrap
                justify-content: space-between
                align-items: center
                gap: 0.15rem

                &-label
                    display: block
                    font-size: 10px
                    font-family: monospace

                &-icon
                    margin-top: 1px
                    display: block

                // States transitions
                background-color: transparent
                border: 1px solid var(--col-pri)
                +m.transition(background-color, border-color)

                &-label, &-icon
                    color: var(--col-pri)
                    +m.transition(color)

                &--selected
                    background-color: var(--col-pri)

                    & .control__filter-tags-item-label,
                    & .control__filter-tags-item-icon
                        color: var(--col-bg)

                // .control--is-dark &
                //     border: 1px solid v.$col-pri-dark

                //     & .control__filter-tags-item-label,
                //     & .control__filter-tags-item-icon
                //         color: v.$col-pri-dark

                //     &--selected
                //         background-color: v.$col-pri-dark

                //         & .control__filter-tags-item-label,
                //         & .control__filter-tags-item-icon
                //             color: v.$col-bg-dark


</style>