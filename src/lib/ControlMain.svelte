<script lang="ts">
    import ContactList from "./ContactList.svelte";
    import DisplayMode from "./DisplayMode.svelte";

    // import contacts from "src/data/contacts.yaml"
    import { tagDataMap, darkModeSetting, isDarkMode } from "src/store"
    // import { DarkModeOptionsEnum } from "src/common"
    // import {
    //     storeDarkModeSettingToLocalStorage,
    //     handleDarkModeSettingChange,
    // } from "src/utils/darkModeSettingUtils"

    // const DARK_MODE_LABEL_DISPLAY_TIME = 2000

    // let darkModeSettingLabel: string
    // let shouldDisplayDarkModeSettingLabel: boolean = false
    // let darkModeSettingLabelDisplayTimeout: ReturnType<typeof setTimeout>
    // const darkModeSettingLabelOptions = [
    //     "os settings",
    //     "light mode",
    //     "dark mode"
    // ]

    // const updateDarkModeSettingLabel = () => {
    //     darkModeSettingLabel = darkModeSettingLabelOptions[$darkModeSetting]
    // }

    // const displayDarkModeSettingLabel = () => {
    //     shouldDisplayDarkModeSettingLabel = true
    //     clearTimeout(darkModeSettingLabelDisplayTimeout)
    //     darkModeSettingLabelDisplayTimeout = setTimeout(() => {
    //         shouldDisplayDarkModeSettingLabel = false
    //     }, DARK_MODE_LABEL_DISPLAY_TIME)
    // }

    const switchTagData = (tag: string) => {
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    const checkAll = (booleanValue: boolean) => {
        $tagDataMap.forEach((isDisplayed, tagName) => $tagDataMap.set(tagName, booleanValue))
        tagDataMap.set($tagDataMap)
    }

    // const switchDarkModeOption = (newValue: DarkModeOptionsEnum) => {
    //     darkModeSetting.set(newValue)
    //     storeDarkModeSettingToLocalStorage(newValue)
    //     handleDarkModeSettingChange()
    //     updateDarkModeSettingLabel()
    //     displayDarkModeSettingLabel()
    // }

    // updateDarkModeSettingLabel()
</script>

<template>
    <div class="control">
        <ContactList />
        <DisplayMode />

        <!-- Tag filter -->
        <div class="control__filter-tags-wrapper">
            <h2 class="control__filter-tags-title">
                Filter by tags
            </h2>
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

        // // Display mode
        // &__display-mode-wrapper
        //     +wrapper

        // &__display-mode-title
        //     +title
        //     // .control--is-dark &
        //     //     +title--is-dark

        // &__display-mode
        //     &-label
        //         vertical-align: middle
        //         opacity: 0
        //         user-select: none
        //         +m.transition(opacity)

        //         &--is-displayed
        //             opacity: 1

        //     &-option-list
        //         display: inline-flex
        //         flex-direction: row
        //         margin-left: 1rem

        //     &-indicator
        //         position: absolute
        //         width: 30px
        //         height: 30px
        //         border-style: solid
        //         border-width: 1px
        //         border-color: var(--col-pri)
        //         pointer-events: none
        //         +m.transition(translate)

        //         // .control--is-dark &
        //         //     border-color: var(--col-pri)

        //         &--shift-one
        //             translate: 32px

        //         &--shift-two
        //             translate: 64px

        //     &-button
        //         background-color: transparent
        //         border-width: 0
        //         padding: 0
        //         cursor: pointer
        //         width: 22px
        //         height: 22px
        //         margin: 5px

        //         &:hover
        //             background-color: transparent
        //             border-width: 0
        //             padding: 0

        //     &-icon-svg
        //         display: inline-block
        //         vertical-align: middle
        //         stroke: var(--col-pri)

        //         // .control--is-dark &
        //         //     stroke: var(--col-pri)

        // Tag filter
        &__filter-tags-wrapper
            +wrapper 

        &__filter-tags
            &-title
                +title
                // .control--is-dark &
                //     +title--is-dark

            &-buttons-container
                margin-top: 1rem

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
                // border-radius: 1rem
                padding: 0.1rem
                padding-left: 0.25rem
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
                border-width: 1px
                border-style: solid
                border-color: var(--col-pri)
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