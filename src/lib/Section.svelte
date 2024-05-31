<script lang="ts">
    import { marked } from 'marked'
    import { isDarkMode } from "src/store"

    export let entry: Entry

    let isExpanded: boolean = false

    function handleExpandClick() {
        isExpanded = !isExpanded
    }

    // TODO: rename to `Article` or `Entry`
</script>

<template>
    <section class="section">
        <h2 class="section__title">{entry.title}</h2>
        <div class="section__tags-container">
            {#each entry.tags as tag}
                <span class="section__tag-item">{tag}</span>
            {/each}
        </div>

        {#if entry.imgSrc && entry.imgAlt}
            <img class="section__banner"
                src={entry.imgSrc}
                alt={entry.imgAlt}
            />
        {/if}

        {#if entry.title === "Creative Coding"}
            <canvas id="scroll-canvas" />
        {/if}

        <p class="section__summary">
            {@html marked(entry.summary)}
        </p>

        <p class="section__content {isExpanded ? 'section__content--is-expanded' : 'section__content--is-collapsed'}"
            aria-hidden={!isExpanded}
        >
            {@html marked(entry.content)}
        </p>

        <div class="section__buttons-container">
            <div class="section__links-container">
                {#each entry.links as link}
                    <a class="section__link-item"
                        href={link.url}
                        rel="noopener noreferrer" target="_blank"
                    >
                        {link.label}

                        {#if link.label === "source"}
                            <svg class="section__link-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        {:else}
                            <svg class="section__link-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        {/if}
                    </a>
                {/each}
            </div>

            <button class="section__expand-button"
                on:click={handleExpandClick}
            >
                <div class="section__expand-button-label-wrapper {isExpanded ? 'section__expand-button-label-wrapper--is-expanded' : ''}">
                    <span class="section__expand-button-label section__expand-button-label--more"
                        aria-hidden={isExpanded}
                    >
                        More
                    </span>
                    <span class="section__expand-button-label section__expand-button-label--less"
                        aria-hidden={!isExpanded}
                    >
                        Less
                    </span>
                </div>
            </button>
        </div>
    </section>
</template>

<style lang="sass">
    @use "../styles/vars" as v
    @use "../styles/mixins" as m

    .section
        margin: 2rem
        padding: 1rem
        max-width: 400px
        border: 2px solid var(--col-pri)
        text-align: left
        -webkit-hyphens: auto
        hyphens: auto

        // &--is-dark
        //     border: 2px solid v.$col-pri-dark

        &__banner,
        canvas
            display: block
            margin: auto
            max-width: 100%

        &__title
            margin: 0
            font-size: 2rem

        &__tags-container
            margin-bottom: 2rem
            padding: 0
            display: flex
            flex-flow: row wrap
            justify-content: flex-start
            gap: 0.1rem 1rem

        &__tag-item
            font-family: monospace
            font-size: 10px
            color: rgba(var(--col-pri), 0.8)

            // .section--is-dark &
            //     color: rgba(v.$col-pri-dark, 0.8)

        &__content
            // CSS-only accordion button
            $duration: var(--transition-time-content)
            will-change: opacity, font-size

            &--is-collapsed
                visibility: hidden
                opacity: 0
                font-size: 0
                // Delay font-size
                transition: opacity $duration ease-out, font-size $duration ease-out $duration

            &--is-expanded
                visibility: visible
                opacity: 1
                font-size: var(--font-size)
                // Delay opacity
                transition: font-size $duration ease-out, opacity $duration ease-out $duration

                +m.mobile
                    font-size: var(--font-size-mobile)

        &__buttons-container
            display: flex
            flex-flow: row nowrap
            justify-content: space-between
            align-items: center
            gap: 1rem

        &__links-container
            display: flex
            flex-flow: row wrap
            justify-content: space-around
            align-items: center
            gap: 0.2rem
            flex-grow: 4

        &__link-item
            padding: 0.25rem 0.5rem
            background-image: none
            background-color: var(--col-acc)
            font-family: "Noto Sans Mono", monospace
            font-size: 12px

            display: flex
            flex-flow: row nowrap
            justify-content: space-around
            align-items: center
            gap: 0.5rem
            +m.transition(background-color, color, box-shadow)

            &:hover
                color: var(--col-bg)
                background-color: var(--col-acc-alt)
                box-shadow: 4px 4px var(--col-pri)

            // .section--is-dark &
            //     background-color: v.$col-acc-dark
            //     &:hover
            //         color: v.$col-bg-dark
            //         background-color: v.$col-acc2
            //         box-shadow: 4px 4px v.$col-pri-dark

        &__expand-button
            +m.button
            width: 60px
            height: 33px
            overflow: hidden

            +m.mobile
                height: 36px
                font-size: var(--font-size-mobile)

            // .section--is-dark &
            //     +m.button-dark

        &__expand-button-label-wrapper
            display: flex
            flex-direction: column

            transition-property: transform, opacity
            transition-duration: var(--transition-time-default)
            transition-timing-function: ease-out

            .section__expand-button-label--more
                opacity: 1

            .section__expand-button-label--less
                opacity: 0

            &--is-expanded
                transform: translateY(-50%)

                .section__expand-button-label--more
                    opacity: 0
                .section__expand-button-label--less
                    opacity: 1
        
        &__expand-button-label
            transition: transform var(--transition-time-default) ease-out

        +m.mobile
            margin: 2rem 0.5rem
            max-width: none

    :global(.section__content p:first-child)
        margin-top: 0

    :global(.section__buttons__links__item a)
        background-image: none
        display: block
</style>