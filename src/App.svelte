<script lang="ts">
    import { afterUpdate } from "svelte";

    import Header from "./lib/BaseHeader.svelte"
    import Footer from "./lib/BaseFooter.svelte"
    import ControlContainer from "./lib/BaseControlContainer.svelte"
    import Section from "./lib/Section.svelte"

    import content from "./data/content.yaml"
    import { entryList, tagDataMap, darkModeSettings, isDarkMode, displayedEntryList } from "./store"

    import DarkModeOptionsEnum from "./types/DarkModeOptionsEnum";

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

    const retrieveLocalStorageData = () => {
        const storedValue = JSON.parse(localStorage.getItem('darkModeSettings'))

        if (localStorage.getItem('darkModeSettings')) darkModeSettings.set(storedValue)
        else darkModeSettings.set(DarkModeOptionsEnum.OS)
    }

    setFullEntryList(content)
    generateTagDataMap($entryList)
    retrieveLocalStorageData()

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
                div.contact-me-content
                    p Would you like to say hello?
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

            &-content
                border: 2px solid v.$col-pri
                margin: 1rem
                padding: 1rem 1.5rem

                &:after 
                    content: "My contacts are to the left ←"

            +m.mobile
                &-content
                    &:after 
                        content: "My contacts are in the menu ↑"

            &.is-dark
                .contact-me-content
                    border: 2px solid v.$col-pri-dark

        +m.mobile
            min-height: auto
</style>
