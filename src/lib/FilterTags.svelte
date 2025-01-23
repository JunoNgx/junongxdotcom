<script lang="ts">
    import { tagDataMap } from "src/store"

    const switchTagData = (tag: string) => {
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    const checkAll = (booleanValue: boolean) => {
        $tagDataMap.forEach((_isDisplayed, tagName) => $tagDataMap.set(tagName, booleanValue))
        tagDataMap.set($tagDataMap)
    }

</script>

<template>
    <div class="filter-tags">

        <h2 class="filter-tags__title">
            Filter by tags
        </h2>

        <div class="filter-tags__list">
            {#each [...$tagDataMap] as [tag, isDisplayed]}
                <button class="filter-tags__item
                        {isDisplayed && "filter-tags__item--is-selected"}
                    "
                    on:click={() => switchTagData(tag)}
                >
                    <span class="filter-tags__item-label">
                        {tag}
                    </span>
                    {#if isDisplayed}
                        <svg class="filter-tags__item-icon filter-tags__item-icon--is-selected"
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
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    {:else}
                        <svg class="filter-tags__item-icon"
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
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    {/if}
                </button>
            {/each}
        </div>

        <div class="filter-tags__buttons-container">
            <button class="filter-tags__button"
                on:click={() => checkAll(false)}
            >
                Uncheck all
            </button>

            <button class="filter-tags__button"
                on:click={() => checkAll(true)}
            >
                Check all
            </button>
        </div>

    </div>
</template>

<style lang="sass">
    @use "../styles/mixins" as m
    @use "../styles/vars" as v

    .filter-tags
        +m.control-wrapper 

        &__title
            +m.control-title

        &__list
            display: flex
            flex-flow: row wrap
            justify-content: flex-end
            gap: 0.5rem

        &__item
            padding: 0.1rem
            padding-left: 0.25rem
            height: 1.2rem
            cursor: pointer
            display: flex
            flex-flow: row nowrap
            justify-content: space-between
            align-items: center
            gap: 0.15rem

            // States transitions
            background-color: transparent
            border-width: 1px
            border-style: solid
            border-color: var(--col-pri)
            +m.transition(background-color, border-color)

            &--is-selected
                background-color: var(--col-pri)

                .filter-tags__item-label,
                .filter-tags__item-icon
                    color: var(--col-bg)

        &__item-label,
        &__item-icon
            color: var(--col-pri)
            +m.transition(color)

        &__item-label
            display: block
            font-size: 10px
            font-family: var(--font-family-monospace)

        &__item-icon
            margin-top: 1px
            display: block
            
        &__buttons-container
            margin-top: 1rem

        &__button
            +m.button
            margin-left: 0.5rem

</style>