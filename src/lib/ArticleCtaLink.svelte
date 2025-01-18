<script lang="ts">
    let { link }: {link: CtaLink } = $props();
</script>

<template>
    <a class="cta-link"
        href={link.url}
        rel="noopener noreferrer" target="_blank"
    >
        {link.label}

        {#if link.type === "deployment"}
            <svg class="cta-link__icon"
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
                <!-- Play icon -->
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        {:else if link.type === "source"}
            <svg class="cta-link__icon"
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
                <!-- Angled brackets -->
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        {:else}
            <svg class="cta-link__icon"
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
                <!-- Diagonal arrow -->
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        {/if}
    </a>
</template>

<style lang="sass">
    @use "../styles/vars" as v
    @use "../styles/mixins" as m

    .cta-link
        margin: 0.25rem 0 0.25rem
        padding: 0.25rem 0.5rem
        background-image: none
        background-color: var(--col-acc)
        font-family: var(--font-family-monospace)
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

</style>