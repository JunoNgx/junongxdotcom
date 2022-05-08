<script lang="ts">
    import { marked } from 'marked'

    export let entry: Entry
</script>

<template lang="pug">
    div(class="section")
        h3(class="section__title") {entry.title}
        img(class="section__banner" src!="{entry.imgSrc}" alt!="{entry.imgAlt}")
        p(class="section__summary") {@html marked(entry.summary)}
        p(class="section__content") {@html marked(entry.content)}
        +each('entry.links as link')
            a(href!="{link.url}") {link.label}

</template>

<style lang="sass">
    .section
        margin: 2rem
        padding: 1rem
        max-width: 400px
        border: 1px solid #444
        text-align: left
        hyphens: auto

        &__banner
            display: block
            margin: auto
            max-width: 100%

        &__title
            margin-top: 0
            font-size: 2rem
</style>