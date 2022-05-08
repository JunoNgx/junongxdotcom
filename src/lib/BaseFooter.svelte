<template lang="pug">
    footer
        p made with 
            a(rel="noopener noreferrer" target="_blank" href="https://svelte.dev/") svelte
            |  and 
            a(rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/") sass
        p uncopyrighted and 
            a(rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx/junongxdotcom") open source
</template>

<style lang="sass">
    @use "../styles/vars" as v

    footer
        font-size: v.$font-size
        margin: 1rem auto
        text-align: center
        p
            margin: 0

</style>

