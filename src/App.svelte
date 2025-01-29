<script lang="ts">
    import { slide } from 'svelte/transition';

    import Header from "src/lib/Header.svelte"
    import Footer from "src/lib/Footer.svelte"
    import ControlContainer from "src/lib/ControlContainer.svelte"
    import Article from "src/lib/Article.svelte"
    import ContactMe from "./lib/ContactMe.svelte";

    import content from "src/data/content.yaml"
    import { entryList, tagDisplayStatusMap, displayedEntryList } from "./store"
    import {
        loadDisplayModeFromLocalStorage,
        handleDisplayModeChange
    } from "src/utils/displayModeUtils"

    const setFullEntryList = (inputEntryList: Array<Entry>) => {
        entryList.set([...inputEntryList]);
    }

    const generateTagDisplayStatusMap = (inputEntryList: Array<Entry>) => {
        const tmpTagList: string[] = []

        inputEntryList.forEach(entry => {
            entry.tags.forEach(tag => {
                if (!tmpTagList.includes(tag)) {
                    tmpTagList.push(tag)
                }
            })
        })

        tmpTagList.forEach(tag => {
            if (tag === "archived") $tagDisplayStatusMap.set(tag, false)
            else $tagDisplayStatusMap.set(tag, true)
        })

        tagDisplayStatusMap.set($tagDisplayStatusMap)
    }

    setFullEntryList(content)
    generateTagDisplayStatusMap($entryList)

    loadDisplayModeFromLocalStorage()
    handleDisplayModeChange()

    $effect(() => {
        // Specifically handle the creative coding canvas
        if ($tagDisplayStatusMap.get("creative coding")) {
            window.dispatchEvent(new Event("attach-canvas"))
        }
    })
</script>

<template>
    <main>
        <aside class="leftside-wrapper">
            <div class="leftside-content">
                <Header />
                <ControlContainer />
            </div>
        </aside>

        <div class="content-wrapper">
            {#if $displayedEntryList && $displayedEntryList.length > 0}
                {#each $displayedEntryList as entry}
                    <Article entry={entry} />
                {/each}
            {:else}
                <p class="no-content"
                    transition:slide
                >
                    You have filtered out everything and there is nothing left to be displayed.
                </p>
            {/if}

            <ContactMe />
        </div>
    </main>
    <Footer />
</template>

<style lang="sass">
    @use "./styles/fonts"
    @use "./styles/vars" as v
    @use "./styles/mixins" as m

    :global(html)
        scrollbar-gutter: stable
        font-family: var(--font-family)
        font-size: var(--font-size)

    :global(body)
        color: var(--col-pri)
        background-color: var(--col-bg)
        -webkit-hyphens: auto
        hyphens: auto
        +m.transition(color, background-color)
        +m.mobile
            font-size: var(--font-size-mobile)

    :global(a)
        color: var(--col-pri)
        text-decoration: none
        background-repeat: no-repeat
        background-image: linear-gradient(to top, var(--col-acc) 0% 90%, transparent 10%)
        background-position: 50% 80%
        background-size: 100% 30%
        transition: background-size var(--transition-time-anchor) ease-in, background-position var(--transition-time-anchor) ease-out

        &:hover
            // background-position: 50% 80%
            background-size: 100% 100%

    :global(code)
        font-family: var(--font-family-code)
        font-size: 0.9rem
        background-color: var(--col-code-bg)
        padding: 0.1rem 0.25rem
        border-radius: 0.25rem

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
        max-width: 320px
        max-height: 90vh
        padding-right: 2rem
        border-right: 2px dashed var(--col-pri)
        align-self: flex-start

        display: flex
        flex-flow: column nowrap
        justify-content: space-around

        +m.transition(border)
        +m.mobile
            position: static
            border: none
            max-width: none

    .leftside-content
        z-index: 1

    .content-wrapper
        flex-grow: 3
        min-height: 90vh

        +m.mobile
            min-height: auto

    .no-content
        margin: 2rem
        padding: 1rem
        max-width: 400px
        border: 2px solid transparent
        text-align: left
        -webkit-hyphens: auto
        hyphens: auto

</style>
