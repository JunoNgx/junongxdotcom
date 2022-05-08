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
                    div(class="section__buttons__links__item")
                        a(href!="{link.url}") {link.label}
            button(class="section__buttons__expand-btn" on:click!="{handleExpandClick}")
                +if('isExpanded')
                    span(class="section__buttons__expand-btn__label") read less
                    +else()
                        span read more

</template>

<style lang="sass">
    @use "../styles/vars" as v

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

        &__summary

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
                justify-content: space-between
                flex-grow: 4

                &__item
                    display: block

    :global(.section__content p:first-child)
        margin-top: 0

</style>