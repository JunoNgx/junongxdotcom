<script lang="ts">
    import { isDarkMode } from "../store"
</script>

<template lang="pug">
    header(class!="{$isDarkMode ? 'dark' : ''}")
        h1 Juno Nguyen
        p web engineer by day
        p hobbyist gamedev, creative coding artist, tinkerer, know-it-all-wannabe by night
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    header
        text-align: right

        h1
            margin-top: 0
            // text-align: center
            // color: v.$col-bg
            // background-color: v.$col-acc
            // +m.transition(padding-right, color, background-color)

            // &:hover
                // padding-right: 3rem
                // color: v.$col-bg
                // background-color: v.$col-acc

        +m.mobile
            text-align: left
            margin-left: 0.5rem
            margin-top: 2rem
            padding-left: 1rem
            border-left: 2px dashed v.$col-pri

        &.dark
            +m.mobile
                border-left: 2px dashed v.$col-pri-dark
</style>