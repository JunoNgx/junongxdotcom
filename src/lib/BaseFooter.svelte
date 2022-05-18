<template lang="pug">
    footer
        p made with 
            a(rel="noopener noreferrer" target="_blank" href="https://svelte.dev/") svelte
            | , 
            a(rel="noopener noreferrer" target="_blank" href="https://pugjs.org/") pug
            | , 
            a(rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/") sass
            | , and 
            a(rel="noopener noreferrer" target="_blank" href="https://www.typescriptlang.org/") typescript
        p uncopyrighted and 
            a(rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx/junongxdotcom") open source
</template>

<style lang="sass">
    @use "../styles/vars" as v

    footer
        font-size: v.$font-size
        margin: 1rem auto 0 auto
        text-align: center
        p
            margin: 0

</style>

