<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import Header from "./lib/BaseHeader.svelte"
    import Footer from "./lib/BaseFooter.svelte"
    import Section from "./lib/Section.svelte"
    import Control from "./lib/BaseControl.svelte"

    import content from "./data/content.yaml"
    import { entryList, tagDataList } from "./store"

    const setFullEntryList = (inputEntryList: Array<Entry>) => {
        $entryList = [...inputEntryList];
    }

    const generateTagDataList = (inputEntryList: Array<Entry>) => {
        const tmpTagList = []

        inputEntryList.forEach(entry => {
            entry.tags.forEach(tag => {
                if (!tmpTagList.includes(tag)) {
                    tmpTagList.push(tag)
                }
            })
        })

        // tmpTagList.forEach(tag => {
        //     $tagDataList.push({
        //         tag,
        //         isDisplayed: true
        //     })
        // })

        tmpTagList.forEach(tag => {
            $tagDataList.set(tag, true)
        })
    }

    onMount(() => {
        setFullEntryList(content)
        generateTagDataList($entryList)
        // setDefaultTagDataList($fullEntryList)
        // setDisplayedEntryList($tagDataList)

        console.log($entryList)
        console.log($tagDataList)
    })

    // onDestroy()
</script>

<template lang="pug">
    main
        div(class="leftside-wrapper")
            div(class="leftside-content")
                Header
                Control

        div(class="content-wrapper")
            +each("$entryList as entry")
                Section(entry!="{entry}")

    Footer
</template>

<style lang="sass">

    @use './styles/vars' as v
    @use './styles/mixins' as m

    /* jost-300 - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 300
        src: url('fonts/jost-v13-latin-300.eot')
        src: local(''), url('fonts/jost-v13-latin-300.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-300.woff2') format('woff2'), url('fonts/jost-v13-latin-300.woff') format('woff'), url('fonts/jost-v13-latin-300.ttf') format('truetype'), url('fonts/jost-v13-latin-300.svg#Jost') format('svg')
    
    /* jost-regular - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 400
        src: url('fonts/jost-v13-latin-regular.eot')
        src: local(''), url('fonts/jost-v13-latin-regular.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-regular.woff2') format('woff2'), url('fonts/jost-v13-latin-regular.woff') format('woff'), url('fonts/jost-v13-latin-regular.ttf') format('truetype'), url('fonts/jost-v13-latin-regular.svg#Jost') format('svg')

    // /* jost-700 - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 700
        src: url('fonts/jost-v13-latin-700.eot')
        src: local(''), url('fonts/jost-v13-latin-700.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-700.woff2') format('woff2'), url('fonts/jost-v13-latin-700.woff') format('woff'), url('fonts/jost-v13-latin-700.ttf') format('truetype'), url('fonts/jost-v13-latin-700.svg#Jost') format('svg')

    /* jost-300italic - latin */
    @font-face 
        font-family: 'Jost'
        font-style: italic
        font-weight: 300
        src: url('fonts/jost-v13-latin-300italic.eot')
        src: local(''), url('fonts/jost-v13-latin-300italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-300italic.woff2') format('woff2'), url('fonts/jost-v13-latin-300italic.woff') format('woff'), url('fonts/jost-v13-latin-300italic.ttf') format('truetype'), url('fonts/jost-v13-latin-300italic.svg#Jost') format('svg')

    /* jost-italic - latin */
    @font-face
        font-family: 'Jost'
        font-style: italic
        font-weight: 400
        src: url('fonts/jost-v13-latin-italic.eot')
        src: local(''), url('fonts/jost-v13-latin-italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-italic.woff2') format('woff2'), url('fonts/jost-v13-latin-italic.woff') format('woff'), url('fonts/jost-v13-latin-italic.ttf') format('truetype'), url('fonts/jost-v13-latin-italic.svg#Jost') format('svg')

    /* jost-700italic - latin */
    @font-face
        font-family: 'Jost'
        font-style: italic
        font-weight: 700
        src: url('fonts/jost-v13-latin-700italic.eot')
        src: local(''), url('fonts/jost-v13-latin-700italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-700italic.woff') format('woff'), url('fonts/jost-v13-latin-700italic.ttf') format('truetype'), url('fonts/jost-v13-latin-700italic.svg#Jost') format('svg')
    
    :root
        font-family: v.$fonts
        font-size: v.$font-size
        color: v.$col-pri

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

    main
        margin: 0 auto
        width: fit-content

        display: flex
        flex-flow: row nowrap
        justify-content: space-around

        +m.mobile
            flex-flow: column nowrap

    .leftside-wrapper
        position: sticky
        top: 20px
        max-width: 300px
        max-height: 90vh
        padding-right: 2rem
        border-right: 2px dashed v.$col-pri

        display: flex
        flex-flow: column nowrap
        justify-content: space-around

    .content-wrapper
        flex-grow: 3

</style>
