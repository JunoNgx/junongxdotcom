<script lang="ts">
    import { isDarkMode } from "../store"
    import Control from "./BaseControl.svelte"

    let isExpanded = false

    const handleSwitchExpand = () => {
        isExpanded = !isExpanded
    }

    const collapseControl = () => {
        isExpanded = false
    }
</script>

<template lang="pug">
    .control-container(class!="{$isDarkMode ? 'control-container--is-dark' : ''}")
        .control-container__icon-container(on:click!="{handleSwitchExpand}")
            svg.control-container__icon(xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                line.icon-line1(class!="{isExpanded ? 'icon-line1--is-expanded' : ''}" x1="3" y1="6" x2="21" y2="6")
                line.icon-line2(class!="{isExpanded ? 'icon-line2--is-expanded' : ''}" x1="3" y1="12" x2="21" y2="12")
                line.icon-line3(class!="{isExpanded ? 'icon-line3--is-expanded' : ''}" x1="3" y1="18" x2="21" y2="18")

        .control-container__collapse-trigger(class!="{isExpanded ? 'control-container__collapse-trigger--is-expanded' : ''}" on:click!="{collapseControl}")
        .control-container__content-wrapper(class!="{isExpanded ? 'control-container__content-wrapper--is-expanded' : ''}")
            .control-container__content
                Control
</template>

<style lang="sass">
    @use '../styles/vars' as v
    @use '../styles/mixins' as m

    .control-container
        &__icon-container
            display: none

        +m.mobile
            display: block

            &__icon-container
                z-index: 1
                position: fixed
                top: 1.5rem
                right: 1.5rem
                width: 48px
                height: 48px
                color: v.$col-pri
                background-color: v.$col-acc
                cursor: pointer
                -webkit-user-select: none
                user-select: none

                display: flex
                justify-content: space-around
                align-items: center

                .control-container--is-dark &
                    color: v.$col-pri-dark
                    background-color: v.$col-acc-dark

                .icon-line1
                    transition: transform v.$trans-time-default ease-out
                    &--is-expanded
                        transform: rotate(45deg) translate(22.5%, -22.5%)
                
                .icon-line2
                    transition: opacity v.$trans-time-default ease-out
                    &--is-expanded
                        opacity: 0

                .icon-line3
                    transition: transform v.$trans-time-default ease-out
                    &--is-expanded
                        transform: rotate(-45deg) translate(-50%, 0)

            &__collapse-trigger
                width: 100vw
                height: 100vh
                top: 0
                left: 0
                position: fixed
                pointer-events: none
                display: none

                &--is-expanded
                    display: block
                    pointer-events: auto

            &__content-wrapper
                position: fixed
                top: 0
                right: 0
                height: 100vh
                width: 100vw
                background-color: v.$col-acc
                clip-path: circle(0 at calc(100% - 3rem) calc(3rem))
                transition: clip-path 300ms ease-out

                &--is-expanded
                    clip-path: circle(90vh at calc(100% - 3rem) calc(3rem))

                .control-container--is-dark &
                    background-color: v.$col-acc-dark

            &__content
                padding: 4rem 2rem 1rem

</style>