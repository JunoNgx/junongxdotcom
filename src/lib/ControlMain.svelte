<script lang="ts">
    import ContactList from "./ContactList.svelte";
    import DisplayMode from "./DisplayMode.svelte";
    import FilterTags from "./FilterTags.svelte";

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
        <FilterTags />
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
        
</style>