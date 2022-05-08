<script lang="ts">
    import logo from "./assets/svelte.png"
    import Counter from "./lib/Counter.svelte"

    import content from "./data/content.yaml"
    import Section from "./lib/Section.svelte"

    console.log(content)
</script>

<template lang="pug">
    main
        +each("content as entry")
            Section(entry!="{entry}")
</template>

<style lang="sass">

    @use './styles/vars' as v

    /* jost-300 - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 300
        src: url('fonts/jost-v13-latin-300.eot')
        src: local(''), url('fonts/jost-v13-latin-300.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-300.woff2') format('woff2'), url('fonts/jost-v13-latin-300.woff') format('woff'), url('fonts/jost-v13-latin-300.ttf') format('truetype'), url('fonts/jost-v13-latin-300.svg#Jost') format('svg')
    
    /* jost-regular - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 400
        src: url('fonts/jost-v13-latin-regular.eot')
        src: local(''), url('fonts/jost-v13-latin-regular.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-regular.woff2') format('woff2'), url('fonts/jost-v13-latin-regular.woff') format('woff'), url('fonts/jost-v13-latin-regular.ttf') format('truetype'), url('fonts/jost-v13-latin-regular.svg#Jost') format('svg')

    // /* jost-700 - latin */
    @font-face
        font-family: 'Jost'
        font-style: normal
        font-weight: 700
        src: url('fonts/jost-v13-latin-700.eot')
        src: local(''), url('fonts/jost-v13-latin-700.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-700.woff2') format('woff2'), url('fonts/jost-v13-latin-700.woff') format('woff'), url('fonts/jost-v13-latin-700.ttf') format('truetype'), url('fonts/jost-v13-latin-700.svg#Jost') format('svg')

    /* jost-300italic - latin */
    @font-face 
        font-family: 'Jost'
        font-style: italic
        font-weight: 300
        src: url('fonts/jost-v13-latin-300italic.eot')
        src: local(''), url('fonts/jost-v13-latin-300italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-300italic.woff2') format('woff2'), url('fonts/jost-v13-latin-300italic.woff') format('woff'), url('fonts/jost-v13-latin-300italic.ttf') format('truetype'), url('fonts/jost-v13-latin-300italic.svg#Jost') format('svg')

    /* jost-italic - latin */
    @font-face
        font-family: 'Jost'
        font-style: italic
        font-weight: 400
        src: url('fonts/jost-v13-latin-italic.eot')
        src: local(''), url('fonts/jost-v13-latin-italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-italic.woff2') format('woff2'), url('fonts/jost-v13-latin-italic.woff') format('woff'), url('fonts/jost-v13-latin-italic.ttf') format('truetype'), url('fonts/jost-v13-latin-italic.svg#Jost') format('svg')

    /* jost-700italic - latin */
    @font-face
        font-family: 'Jost'
        font-style: italic
        font-weight: 700
        src: url('fonts/jost-v13-latin-700italic.eot')
        src: local(''), url('fonts/jost-v13-latin-700italic.eot?#iefix') format('embedded-opentype'), url('fonts/jost-v13-latin-700italic.woff') format('woff'), url('fonts/jost-v13-latin-700italic.ttf') format('truetype'), url('fonts/jost-v13-latin-700italic.svg#Jost') format('svg')
    
    :root
        font-family: "Jost", sans-serif
        font-size: v.$font-size

    main
        text-align: center
        padding: 1em
        margin: 0 auto

</style>
