<script lang="ts">
    import { isDarkMode } from "../store"
</script>

<template lang="pug">
    header(class!="{$isDarkMode ? 'is-dark' : ''}")
        div
            h1
                span.first-name-j J
                span.first-name-u u
                span.first-name-n n
                span.first-name-o o
                | !{' '}
                span.last-name Nguyen
        p web engineer by day
        p hobbyist gamedev, creative coding artist, hardcore dabbler, know-it-all-wannabe by night
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    $anim-time: 3s

    header
        text-align: right

        div

            h1
                display: inline-block
                margin: 0
                border-bottom-color: v.$col-pri
                border-bottom-style: solid
                border-bottom-width: 0
                animation: name-frame-border $anim-time ease-out 0s

                .first-name-j,
                .first-name-u,
                .first-name-n,
                .first-name-o,
                .last-name
                    display: inline-block

                .first-name-j
                    animation: first-name-j $anim-time ease-out 0s

                .first-name-u
                    animation: first-name-u $anim-time ease-out 0s

                .first-name-n
                    animation: first-name-n $anim-time ease-out 0s

                .first-name-o
                    animation: first-name-o $anim-time ease-out 0s

                .last-name
                    animation: last-name $anim-time ease-out 0s


        +m.mobile
            text-align: left
            margin-left: 0.5rem
            margin-top: 2rem
            padding-left: 1rem
            border-left: 2px dashed v.$col-pri

        &.is-dark

            div
                h1
                    border-color: v.$col-pri-dark

            +m.mobile
                border-left: 2px dashed v.$col-pri-dark

    @keyframes first-name-j
        0%, 10%
            opacity: 0
            transform: translateX(-70px)
        20%, 100%
            opacity: 1
            transform: translateX(0)

    @keyframes first-name-u
        0%, 20%
            opacity: 0
            transform: translateY(40px)
        30%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes first-name-n
        0%, 30%
            opacity: 0
            transform: translateY(-55px)
        40%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes first-name-o
        0%, 40%
            opacity: 0
            transform: translateX(20px)
        50%, 100%
            opacity: 1
            transform: translateX(0)

    @keyframes last-name
        0%, 60%
            opacity: 0
            transform: translateY(50px)
        70%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes name-frame-border
        0%, 80%
            border-bottom-width: 0px
        90%, 95%
            border-bottom-width: 24px
        100%
            border-bottom-width: 0px

</style>