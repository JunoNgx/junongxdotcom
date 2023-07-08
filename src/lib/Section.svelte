<script lang="ts">
    import { isDarkMode } from "../store"
    import { marked } from 'marked'

    export let entry: Entry

    let isExpanded: boolean = false

    function handleExpandClick() {
        isExpanded = !isExpanded
    }
</script>

<template lang="pug">

    section.section(class!="{$isDarkMode ? 'section--dark' : ''}")

        h2.section__title {entry.title}

        .section__tags
            +each("entry.tags as tag")
                span.section__tags__item {tag}

        +if('entry.imgSrc && entry.imgAlt')
            img.section__banner(src!="{entry.imgSrc}" alt!="{entry.imgAlt}")

        // Exception: creative conding canvas
        +if('entry.title === "Creative Coding"')
            canvas(id="scroll-canvas")

        p.section__summary {@html marked(entry.summary)}

        p.section__content(class!="{isExpanded ? 'section__content--is-expanded' : 'section__content--is-collapsed'}") {@html marked(entry.content)}

        .section__buttons
            .section__buttons__links
                +each('entry.links as link')
                    a.section__buttons__links__item(href!="{link.url}" rel="noopener noreferrer" target="_blank")
                        span {link.label}
                        +if("link.label === 'source'")
                            // External link
                            svg.section__buttons__links__item__icon(xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                polyline(points="16 18 22 12 16 6")
                                polyline(points="8 6 2 12 8 18")
                            +else()
                                // Code
                                svg.section__buttons__links__item__icon(xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                    path(d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6")
                                    polyline(points="15 3 21 3 21 9")
                                    line(x1="10" y1="14" x2="21" y2="3")
            button.section__buttons__expand-btn(on:click!="{handleExpandClick}")
                +if('isExpanded')
                    span.section__buttons__expand-btn__label Less
                    +else()
                        span More

</template>

<style lang="sass">
    @use "../styles/vars" as v
    @use "../styles/mixins" as m

    .section
        margin: 2rem
        padding: 1rem
        max-width: 400px
        border: 2px solid v.$col-pri
        text-align: left
        -webkit-hyphens: auto
        hyphens: auto

        &__banner,
        canvas
            display: block
            margin: auto
            max-width: 100%

        &__title
            margin: 0
            font-size: 2rem

        &__tags
            margin-bottom: 2rem
            padding: 0
            display: flex
            flex-flow: row wrap
            justify-content: flex-start
            gap: 0.1rem 1rem
            font-size: 0.8rem
            color: rgba(v.$col-pri, 0.5)

        &__content

            &--is-collapsed
                opacity: 0
                font-size: 0
                transition: opacity v.$trans-time-default*0.5 ease-out, font-size v.$trans-time-default*0.5 ease-out v.$trans-time-default*0.5

            &--is-expanded
                opacity: 1
                font-size: v.$font-size
                transition: font-size v.$trans-time-default*0.5 ease-out, opacity v.$trans-time-default*0.5 ease-out v.$trans-time-default*0.5

                +m.mobile
                    font-size: v.$font-size-mobile

        &__buttons
            display: flex
            flex-flow: row nowrap
            justify-content: space-between
            align-items: center
            gap: 1rem

            &__links
                display: flex
                flex-flow: row wrap
                justify-content: space-around
                align-items: center
                gap: 0.2rem
                flex-grow: 4

                &__item
                    padding: 0.25rem 0.5rem
                    background-image: none
                    background-color: v.$col-acc
                    font-family: "Noto Sans Mono", monospace
                    font-size: 12px

                    display: flex
                    flex-flow: row nowrap
                    justify-content: space-around
                    align-items: center
                    gap: 0.5rem
                    +m.transition(background-color, color, box-shadow)

                    &:hover
                        color: v.$col-bg
                        background-color: v.$col-acc2
                        box-shadow: 4px 4px v.$col-pri


            &__expand-btn
                // border: 1px solid v.$col-pri
                // border-radius: 0
                // padding: 0.25rem 0.5rem
                // cursor: pointer
                // color: v.$col-pri
                // background-color: transparent
                // font-family: v.$fonts
                // font-size: v.$font-size
                // +m.transition(color, background-color)

                // &:hover
                //     color: v.$col-bg
                //     background-color: v.$col-pri

                +m.button

        +m.mobile
            margin: 2rem 0.5rem

            .section__buttons__expand-btn
                font-size: v.$font-size-mobile

        &--dark
            border: 2px solid v.$col-pri-dark

            .section__tags
                color: rgba(v.$col-pri-dark, 0.5)

            .section__buttons__links__item
                background-color: v.$col-acc-dark

                &:hover
                    color: v.$col-bg-dark
                    background-color: v.$col-acc2
                    box-shadow: 4px 4px v.$col-pri-dark

            .section__buttons__expand-btn
                // color: v.$col-pri-dark
                // border: 1px solid v.$col-pri-dark

                // &:hover
                //     color: v.$col-bg-dark
                //     background-color: v.$col-pri-dark
                +m.button-dark

        +m.mobile
            max-width: none


    :global(.section__content p:first-child)
        margin-top: 0

    :global(.section__buttons__links__item a)
        background-image: none
        display: block
</style>