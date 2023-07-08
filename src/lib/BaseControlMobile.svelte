<script lang="ts">
    import { isDarkMode } from "../store"
    import Control from "./BaseControl.svelte"

    let isExpanded = false

    const handleSwitchExpand = () => {
        isExpanded = !isExpanded
    }
</script>

<template lang="pug">
    div.control-mobile(class!="{$isDarkMode ? 'control-mobile--is-dark' : ''}")
        div.control-mobile__icon-container(on:click!="{handleSwitchExpand}")
            svg.control-mobile__icon(xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                line.icon-line1(class!="{isExpanded ? 'icon-line1--expanded' : ''}" x1="3" y1="6" x2="21" y2="6")
                line.icon-line2(class!="{isExpanded ? 'icon-line2--expanded' : ''}" x1="3" y1="12" x2="21" y2="12")
                line.icon-line3(class!="{isExpanded ? 'icon-line3--expanded' : ''}" x1="3" y1="18" x2="21" y2="18")

        div.control-mobile__content-wrapper(class!="{isExpanded ? 'control-mobile__content-wrapper--is-expanded' : ''}")
            div.control-mobile__content
                Control(isForMobile!="true")
</template>

<style lang="sass">
    @use '../styles/vars' as v
    @use '../styles/mixins' as m

    .control-mobile
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

                .icon-line1
                    transition: transform v.$trans-time-default ease-out
                    &--expanded
                        transform: rotate(45deg) translate(22.5%, -22.5%)
                
                .icon-line2
                    transition: opacity v.$trans-time-default ease-out
                    &--expanded
                        opacity: 0

                .icon-line3
                    transition: transform v.$trans-time-default ease-out
                    &--expanded
                        transform: rotate(-45deg) translate(-50%, 0)

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

            &__content
                padding: 4rem 2rem 1rem

            &--is-dark
                .control-mobile__icon-container
                    color: v.$col-pri-dark
                    background-color: v.$col-acc-dark
                
                .control-mobile__content
                    background-color: v.$col-acc-dark

</style>
