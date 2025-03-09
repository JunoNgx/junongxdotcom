<script lang="ts">
    import { marked } from "marked"
    import ArticleCtaLink from "./ArticleCtaLink.svelte"

    let { entry }: { entry: Entry} = $props()
    let isExpanded: boolean = $state(false)

    function handleExpandClick() {
        isExpanded = !isExpanded
    }
</script>

<template>
    <article class="article">
        <h2 class="article__title">{entry.title}</h2>
        <div class="article__tags-container">
            {#each entry.tags as tag}
                <span class="article__tag-item">{tag}</span>
            {/each}
        </div>

        {#if entry.imgSrc && entry.imgAlt}
            <img class="article__banner"
                src={entry.imgSrc}
                alt={entry.imgAlt}
            />
        {/if}

        {#if entry.title === "Creative Coding"}
            <canvas id="scroll-canvas"></canvas>
        {/if}

        <p class="article__summary">
            {@html marked(entry.summary)}
        </p>

        <p class="article__content {isExpanded ? "article__content--is-expanded" : "article__content--is-collapsed"}"
            aria-hidden={!isExpanded}
        >
            {@html marked(entry.content)}
        </p>

        <div class="article__buttons-container">
            <div class="article__links-container">
                {#each entry.links as linkItem}
                    <ArticleCtaLink link={linkItem} />
                {/each}
            </div>

            <button class="article__expand-button"
                onclick={handleExpandClick}
            >
                <div class="article__expand-button-label-wrapper {isExpanded ? "article__expand-button-label-wrapper--is-expanded" : ""}">
                    <span class="article__expand-button-label article__expand-button-label--more"
                        aria-hidden={isExpanded}
                    >
                        More
                    </span>
                    <span class="article__expand-button-label article__expand-button-label--less"
                        aria-hidden={!isExpanded}
                    >
                        Less
                    </span>
                </div>
            </button>
        </div>
    </article>
</template>

<style lang="sass">
    @use "../styles/vars" as v
    @use "../styles/mixins" as m

    .article
        margin: 2rem
        padding: 1rem
        max-width: 400px
        border: 2px solid var(--col-pri)
        text-align: left
        -webkit-hyphens: auto
        hyphens: auto

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
            font-family: var(--font-family-link)
            font-size: 10px
            color: rgba(var(--col-pri), 0.8)

        &__content
            // CSS-only accordion button
            $duration: var(--transition-time-content)
            $duration-expand-delay: 500ms

            &--is-collapsed
                visibility: hidden
                opacity: 0
                font-size: 0
                // Delay font-size; also transitions visibility
                transition: opacity $duration ease-out, font-size $duration ease-out $duration, visibility $duration

            &--is-expanded
                visibility: visible
                opacity: 1
                font-size: var(--font-size)
                // Delay opacity
                transition: font-size $duration ease-out $duration-expand-delay, opacity $duration ease-out calc($duration + $duration-expand-delay)

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
            gap: 0.5rem
            flex-grow: 4

        &__expand-button
            +m.button
            width: 60px
            height: 33px
            overflow: hidden

        &__expand-button-label-wrapper
            display: flex
            flex-direction: column

            transition-property: transform, opacity
            transition-duration: var(--transition-time-default)
            transition-timing-function: ease-out

            .article__expand-button-label--more
                opacity: 1

            .article__expand-button-label--less
                opacity: 0

            &--is-expanded
                transform: translateY(-50%)

                .article__expand-button-label--more
                    opacity: 0
                .article__expand-button-label--less
                    opacity: 1
        
        &__expand-button-label
            transition: transform var(--transition-time-default) ease-out

        +m.mobile
            margin: 2rem 0.5rem
            max-width: none

    :global(.article__content p:first-child)
        margin-top: 0

    :global(.article__content--is-collapsed code)
        transition: font-size var(--transition-time-content) ease-out var(--transition-time-content)
        font-size: 0

    :global(.article__content--is-expanded code)
        transition: font-size var(--transition-time-content) ease-out

</style>