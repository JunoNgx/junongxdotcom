<script lang="ts">
    import { isDarkMode } from "src/store"
    import { onMount } from "svelte";

    const restartStripAnimation = () => {
        const stripContainer = document.querySelector(".header__strip-container")
        for (const stripEl of stripContainer.children as HTMLCollectionOf<HTMLElement>) {
            stripEl.style.animation = "none"
            stripEl.offsetHeight // Manually trigger reflow to restart animation
            stripEl.style.animation = null
        }
    }

    const enableStripAnimation = () => {
        const stripContainer = document.querySelector(".header__strip-container")
        for (const stripEl of stripContainer.children as HTMLCollectionOf<HTMLElement>) {
            stripEl.classList.add("header__strip--can-animate")
        }
    }

    onMount(() => {
        setTimeout(enableStripAnimation, 3000)
    })
</script>

<template lang="pug">
    header.header(class!="{$isDarkMode ? 'header--is-dark' : ''}")
        .header__name-container
            h1.header__name(on:click!="{restartStripAnimation}" on:keydown!="{restartStripAnimation}")
                span.header__first-name-j J
                span.header__first-name-u u
                span.header__first-name-n n
                span.header__first-name-o o
                | !{' '}
                span.header__last-name Nguyen
            .header__strip-container
                .header__strip.header__strip--one
                .header__strip.header__strip--two
                .header__strip.header__strip--three
                .header__strip.header__strip--four
        p.header__desc.header__desc--title web engineer by day
        p.header__desc.header__desc--long-paragraph hobbyist gamedev, creative coding artist, hardcore dabbler, know-it-all-wannabe by night
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    $anim-time: 3s
    $strip-anim-time: 5s

    .header
        display: flex
        flex-direction: column
        align-items: flex-end

        &__name-container
            text-align: right
            width: fit-content
            cursor: pointer

        &__name
            display: inline-block
            margin: 0

            .header--is-dark &
                border-color: v.$col-pri-dark

            .header__first-name-j,
            .header__first-name-u,
            .header__first-name-n,
            .header__first-name-o,
            .header__last-name
                display: inline-block

            .header__first-name-j
                animation: header__first-name-j $anim-time ease-out 0s

            .header__first-name-u
                animation: header__first-name-u $anim-time ease-out 0s

            .header__first-name-n
                animation: header__first-name-n $anim-time ease-out 0s

            .header__first-name-o
                animation: header__first-name-o $anim-time ease-out 0s

            .header__last-name
                animation: header__last-name $anim-time ease-out 0s

        &__strip-container
            position: relative
            height: 1rem

        &__strip
            position: absolute
            height: 1rem
            left: auto
            right: 0

            &--one
                // width: 100%
                background-color: v.$col-strip-1
            &--two
                // width: 75%
                background-color: v.$col-strip-2
            &--three
                // width: 50%
                background-color: v.$col-strip-3
            &--four
                // width: 25%
                background-color: v.$col-strip-4

        &__desc
            margin-top: 0.25rem
            
            &--long-paragraph
                text-align: right
        
        &--is-dark
            .header__strip
                &--one
                    background-color: v.$col-strip-1-dark
                &--two
                    background-color: v.$col-strip-2-dark
                &--three
                    background-color: v.$col-strip-3-dark
                &--four
                    background-color: v.$col-strip-4-dark

        +m.mobile
            align-items: flex-start
            margin-left: 0.5rem
            margin-top: 2rem
            padding-left: 1rem
            border-left: 2px dashed v.$col-pri

            &__name-container
                text-align: left

            &__strip
                left: 0
                right: auto

            &__desc--long-paragraph
                text-align: left

            &--is-dark
                border-left: 2px dashed v.$col-pri-dark

    // Unhashed modifier classes
    :global(.header__strip--can-animate.header__strip--one)
        animation: anim-strip-one $strip-anim-time ease-out 0s
    :global(.header__strip--can-animate.header__strip--two)
        animation: anim-strip-two $strip-anim-time ease-out 0s
    :global(.header__strip--can-animate.header__strip--three)
        animation: anim-strip-three $strip-anim-time ease-out 0s
    :global(.header__strip--can-animate.header__strip--four)
        animation: anim-strip-four $strip-anim-time ease-out 0s

    // Animations
    @keyframes header__first-name-j
        0%, 10%
            opacity: 0
            transform: translateX(-70px)
        20%, 100%
            opacity: 1
            transform: translateX(0)

    @keyframes header__first-name-u
        0%, 20%
            opacity: 0
            transform: translateY(40px)
        30%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes header__first-name-n
        0%, 30%
            opacity: 0
            transform: translateY(-55px)
        40%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes header__first-name-o
        0%, 40%
            opacity: 0
            transform: translateX(20px)
        50%, 100%
            opacity: 1
            transform: translateX(0)

    @keyframes header__last-name
        0%, 60%
            opacity: 0
            transform: translateY(50px)
        70%, 100%
            opacity: 1
            transform: translateY(0)

    @keyframes anim-strip-one
        0%
            width: 0
        10%, 95%
            width: 100%
        100%
            width: 0

    @keyframes anim-strip-two
        0%
            width: 0
        10%, 40%
            width: 75%
        70%
            width: 0

    @keyframes anim-strip-three
        0%
            width: 0
        10%, 35%
            width: 50%
        60%
            width: 0

    @keyframes anim-strip-four
        0%
            width: 0
        10%, 15%
            width: 25%
        30%
            width: 0

</style>