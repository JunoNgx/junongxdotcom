<script lang="ts">
    import CA from './CustomAnchor.svelte';
</script>

<template lang="pug">
    footer
        p made with 
            CA(link="https://svelte.dev/") svelte
            |  and 
            CA(link="https://sass-lang.com/") sass
        p uncopyrighted and 
            CA(link="https://github.com/JunoNgx/junongxdotcom") open source
</template>

<style lang="sass">
    @use "../styles/vars" as v

    footer
        font-size: v.$font-size
        margin: 5rem auto 1rem auto
        text-align: center
        p
            margin: 0

</style>

