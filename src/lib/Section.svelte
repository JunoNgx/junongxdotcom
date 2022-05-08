<script lang="ts">
    export let entry: Entry;
</script>

<template lang="pug">
    div(class="section")
        h3 {entry.title}
        p(class="section__summary") {entry.summary}
        p(class="section__content") {entry.content}
        +each('entry.links as link')
            a(href!="{link.url}") {link.label}

</template>

<style lang="sass">

</style>