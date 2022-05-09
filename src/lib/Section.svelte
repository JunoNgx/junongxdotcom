<script lang="ts">
    import { marked } from 'marked'

    export let entry: Entry

    let isExpanded: boolean = false

    function handleExpandClick() {
        isExpanded = !isExpanded
    }
</script>

<template lang="pug">
    section(class="section")
        h3(class="section__title") {entry.title}
        +if('entry.imgSrc && entry.imgAlt')
            img(class="section__banner" src!="{entry.imgSrc}" alt!="{entry.imgAlt}")
        p(class="section__summary") {@html marked(entry.summary)}
        p(class="section__content {isExpanded ? 'section__content--is-expanded' : ''}") {@html marked(entry.content)}
        div(class="section__buttons")
            div(class="section__buttons__links")
                +each('entry.links as link')
                    a(class="section__buttons__links__item" href!="{link.url}" rel="noopener noreferrer" target="_blank")
                        span {link.label}
                        +if("link.label === 'source'")
                            // External link
                            svg(class="section__buttons__links__item__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                polyline(points="16 18 22 12 16 6")
                                polyline(points="8 6 2 12 8 18")
                            +else()
                                // Code
                                svg(class="section__buttons__links__item__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                    path(d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6")
                                    polyline(points="15 3 21 3 21 9")
                                    line(x1="10" y1="14" x2="21" y2="3")
            button(class="section__buttons__expand-btn" on:click!="{handleExpandClick}")
                +if('isExpanded')
                    span(class="section__buttons__expand-btn__label") Show less
                    +else()
                        span Show more

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
        hyphens: auto

        &__banner
            display: block
            margin: auto
            max-width: 100%

        &__title
            margin-top: 0
            font-size: 2rem

        &__content
            max-height: 0
            overflow: hidden
            transition: max-height v.$trans-time-default ease

            &--is-expanded
                max-height: 500px
        
        &__buttons
            display: flex
            flex-flow: row nowrap
            justify-content: space-between

            &__links
                display: flex
                flex-flow: row nowrap
                justify-content: space-around
                align-items: center
                flex-grow: 4

                &__item
                    padding: 0.25rem 0.5rem
                    background-image: none
                    background-color: v.$col-acc
                    font-family: monospace
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
                border: 2px solid v.$col-pri
                border-radius: 0
                padding: 0.25rem 0.5rem
                cursor: pointer
                color: v.$col-pri
                background-color: transparent
                font-family: v.$fonts
                +m.transition(color, background-color)

                &:hover
                    color: v.$col-bg
                    background-color: v.$col-pri

        +m.mobile
            margin: 2rem 0.5rem


    :global(.section__content p:first-child)
        margin-top: 0

    :global(.section__buttons__links__item a)
        background-image: none
        display: block
</style>