<script lang="ts">
    import Control from "./BaseControl.svelte"

    let isExpanded = false

    const handleSwitchExpand = () => {
        isExpanded = !isExpanded
    }
</script>

<template lang="pug">
    div(class="control-mobile")
        div(class="control-mobile__icon-container" on:click!="{handleSwitchExpand}")
            svg(class="control-mobile__icon-container__icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                line(x1="3" y1="12" x2="21" y2="12")
                line(x1="3" y1="6" x2="21" y2="6")
                line(x1="3" y1="18" x2="21" y2="18")

        div(class="control-mobile__content {isExpanded ? 'control-mobile__content--is-expanded' : ''}")
            div(class="control-mobile__content__control-wrapper")
                Control(isForMobile!="true")
</template>

<style lang="sass">
    @use '../styles/vars' as v
    @use '../styles/mixins' as m

    .control-mobile
        &__icon-container
            z-index: 1
            position: fixed
            top: 1.5rem
            right: 1.5rem
            width: 48px
            height: 48px
            color: v.$col-bg
            background-color: v.$col-pri
            cursor: pointer

            display: flex
            justify-content: space-around
            align-items: center

        &__content
            position: fixed
            top: 0
            right: 0
            height: 100vh
            width: 100vw
            background-color: skyblue
            clip-path: circle(0 at calc(100% - 2.5rem) calc(2.5rem))
            transition: clip-path v.$trans-time-default ease-out

            &__control-wrapper
                padding: 5rem 2rem 1rem

            &--is-expanded
                clip-path: circle(90vh at calc(100% - 2.5rem) calc(2.5rem))

</style>
