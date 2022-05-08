<script lang="ts">
    import { marked } from 'marked'

    export let entry: Entry
</script>

<template lang="pug">
    div(class="section")
        h3 {entry.title}
        p(class="section__summary") {@html marked(entry.summary)}
        p(class="section__content") {@html marked(entry.content)}
        +each('entry.links as link')
            a(href!="{link.url}") {link.label}

</template>

<style lang="sass">

</style>