<script lang="ts">
    import Control from "./ControlMain.svelte";

    let isExpanded = $state(false);

    const handleSwitchExpand = () => {
        isExpanded = !isExpanded;
    };

    const collapseControl = () => {
        isExpanded = false;
    };
</script>

<template>
    <div class="control-container">
        <button
            class="control-container__expand-button"
            aria-label="Toggle expand button"
            onclick={handleSwitchExpand}
        >
            <svg
                class="control-container__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line
                    class="icon-line icon-line--1 {isExpanded
                        ? 'icon-line--is-expanded'
                        : ''}"
                    x1="3" y1="6" x2="21" y2="6"
                />
                <line
                    class="icon-line icon-line--2 {isExpanded
                        ? 'icon-line--is-expanded'
                        : ''}"
                    x1="3" y1="12" x2="21" y2="12"
                />
                <line
                    class="icon-line icon-line--3 {isExpanded
                        ? 'icon-line--is-expanded'
                        : ''}"
                    x1="3" y1="18" x2="21" y2="18"
                />
            </svg>
        </button>

        <button
            class="control-container__collapse-trigger
                {isExpanded
                ? 'control-container__collapse-trigger--is-expanded'
                : ''}
            "
            aria-label="Alternative button to collapse the control menu"
            aria-hidden={!isExpanded}
            onclick={collapseControl}
        ></button>
        <div
            class="control-container__content-wrapper
                {isExpanded
                ? 'control-container__content-wrapper--is-expanded'
                : ''}
            "
        >
            <div class="control-container__content">
                <Control />
            </div>
        </div>
    </div>
</template>

<style lang="sass">
    @use '../styles/vars' as v
    @use '../styles/mixins' as m

    $btn-width: 48px
    $btn-height: 48px
    $btn-spacing: 1.5rem

    .control-container
        &__expand-button,
        &__collapse-trigger
            display: none

        +m.mobile
            display: block

            &__expand-button
                border-width: 0
                z-index: 1
                position: fixed
                top: $btn-spacing
                right: $btn-spacing
                width: $btn-width
                height: $btn-height
                color: var(--col-pri)
                background-color: var(--col-acc)
                cursor: pointer
                -webkit-user-select: none
                user-select: none

                display: flex
                justify-content: space-around
                align-items: center

            &__collapse-trigger
                border-width: 0
                background-color: transparent
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
                background-color: var(--col-acc)
                // clip-path: polygon(calc(100% - 1.5rem - $btn-width) calc(1.5rem), 100% - 1.5rem 1.5rem)
                clip-path: polygon(calc(100% - 1.5rem - $btn-width) 1.5rem, calc(100% - 1.5rem) 1.5rem, calc(100% - 1.5rem) calc(1.5rem + $btn-height), calc(100% - 1.5rem - $btn-width/2) calc(1.5rem + $btn-height), calc(100% - 1.5rem - $btn-width) calc(1.5rem + $btn-height))
                transition: clip-path 300ms ease-in-out

                &--is-expanded
                    // clip-path: polygon(12vw 7vh, 97vw 1vh, 120vw 87vh, 80vw 97vh, -12vw 82vh)
                    clip-path: polygon(-50vw 0vh, 120vw 0vh, 120vw 82vh, 77vw 95vh, -50vw 77vh)

            &__content
                padding: 4rem 2rem 1rem

    .icon-line
        transform-origin: center
        &--1
            transition: transform calc(var(--transition-time-icon-expand-base)*1.0) ease-in-out
            &.icon-line--is-expanded
                transform: rotate(405deg) translate(0%, 25%)
        
        &--2
            transition: transform calc(var(--transition-time-icon-expand-base)*0.5) ease-in-out
            &.icon-line--is-expanded
                transform: rotate(75deg) translate(-30%, 75%)

        &--3
            transition: transform calc(var(--transition-time-icon-expand-base)*0.7) ease-in-out
            &.icon-line--is-expanded
                transform: rotate(-45deg) translate(0%, -25%)
</style>
