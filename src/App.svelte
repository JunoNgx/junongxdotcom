<script lang="ts">
    import { afterUpdate } from "svelte";

    import Header from "src/lib/BaseHeader.svelte"
    import Footer from "src/lib/BaseFooter.svelte"
    import ControlContainer from "src/lib/BaseControlContainer.svelte"
    import Section from "src/lib/Section.svelte"

    import content from "src/data/content.yaml"
    import { DarkModeOptionsEnum } from "src/common";
    import { entryList, tagDataMap, darkModeSetting, isDarkMode, displayedEntryList } from "./store"
    import {
        retrieveDarkModeSettingFromLocalStorage,
        handleDarkModeSettingChange
    } from "src/utils/darkModeSettingUtils"


    const setFullEntryList = (inputEntryList: Array<Entry>) => {
        entryList.set([...inputEntryList]);
    }

    const generateTagDataMap = (inputEntryList: Array<Entry>) => {
        const tmpTagList = []

        inputEntryList.forEach(entry => {
            entry.tags.forEach(tag => {
                if (!tmpTagList.includes(tag)) {
                    tmpTagList.push(tag)
                }
            })
        })

        tmpTagList.forEach(tag => {
            if (tag === "archived") $tagDataMap.set(tag, false)
            else $tagDataMap.set(tag, true)
        })

        tagDataMap.set($tagDataMap)
    }

    setFullEntryList(content)
    generateTagDataMap($entryList)

    retrieveDarkModeSettingFromLocalStorage()
    handleDarkModeSettingChange()

    // Specifically handle the creative conding canvas
    // Tell the script to look for the new <canvas>
    afterUpdate(() => {
        window.dispatchEvent(new Event('update-content'))
    })
</script>

<template lang="pug">
    main
        div.leftside-wrapper(class!="{$isDarkMode ? 'is-dark' : ''}")
            div.leftside-content
                Header
                ControlContainer

        div.content-wrapper
            +if("$displayedEntryList && $displayedEntryList.length > 0")
                +each("$displayedEntryList as entry")
                    Section(entry!="{entry}")

                +else()
                    p.no-content You have filtered out everything and there is nothing left to be displayed.

            section.contact-me(class!="{$isDarkMode ? 'is-dark' : ''}")
                div.contact-me__content
                    p.contact-me__say-hello Would you like to say hello?
                    p.contact-me__contact-dir My contacts are to the left ←
                    p.contact-me__contact-dir.contact-me__contact-dir--is-mobile My contacts are in the menu ↑
    Footer
</template>

<style lang="sass">

    @use './styles/fonts'
    @use './styles/vars' as v
    @use './styles/mixins' as m

    :global(body)
        font-family: v.$fonts
        font-size: v.$font-size
        -webkit-hyphens: auto
        hyphens: auto
        color: v.$col-pri
        background-color: v.$col-bg
        +m.transition(color, background-color)
        +m.mobile
            font-size: v.$font-size-mobile

    :global(body.is-dark)
        color: v.$col-pri-dark
        background-color: v.$col-bg-dark

    :global(a)
        color: v.$col-pri
        text-decoration: none
        background-repeat: no-repeat
        background-image: linear-gradient(to top, v.$col-acc 0% 90%, transparent 10%)
        background-position: 50% 80%
        background-size: 100% 30%
        transition: background-size v.$trans-time-default*0.7 ease-out, background-position v.$trans-time-default*0.7 ease-out

        &:hover
            background-position: 50% 50%
            background-size: 100% 100%

    :global(body.is-dark a)
        color: v.$col-pri-dark
        background-image: linear-gradient(to top, v.$col-acc-dark 0% 90%, transparent 10%)


    main
        margin: 0 auto
        width: -moz-fit-content
        width: fit-content

        display: flex
        flex-flow: row nowrap
        justify-content: space-around

        +m.mobile
            flex-flow: column nowrap

    .leftside-wrapper
        position: sticky
        top: 40px
        max-width: 300px
        max-height: 90vh
        padding-right: 2rem
        border-right: 2px dashed v.$col-pri
        align-self: flex-start

        display: flex
        flex-flow: column nowrap
        justify-content: space-around

        +m.transition(border)
        +m.mobile
            position: static
            border: none
            max-width: none

        &.is-dark
            border-right: 2px dashed v.$col-pri-dark
            +m.mobile
                border: none


    .content-wrapper
        flex-grow: 3
        min-height: 90vh

        .no-content
            margin: 2rem
            padding: 1rem
            max-width: 400px
            border: 2px solid transparent
            text-align: left
            -webkit-hyphens: auto
            hyphens: auto

        .contact-me
            background-color: transparent
            border: none
            margin: auto
            text-align: center
            max-width: 360px
            padding: 0

            p
                margin: 0

            &__content
                border: 2px solid v.$col-pri
                margin: 1rem
                padding: 1rem 1.5rem
            
            &__contact-dir
                display: block
                &--is-mobile
                    display: none

            +m.mobile
                &__contact-dir
                    display: none
                    &--is-mobile
                        display: block
                

            &.is-dark
                .contact-me-content
                    border: 2px solid v.$col-pri-dark

        +m.mobile
            min-height: auto
</style>
