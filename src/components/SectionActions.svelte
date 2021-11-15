<script>
    export let items; // {label: string, link: string}[]
</script>

<main>
    <div class="section__actions">
        {#each items as item}
                <a
                    class="section__actions__item"
                    href={item.link} rel="noopener noreferrer"
                    target="_blank"
                >
                    {item.label}
                </a>
        {/each}
    </div>
</main>

<style lang="scss">
    @use '../styles/vars.scss';

    .section__actions {
        display: flex;
        margin-top: 2rem;
        justify-content: flex-end;
        gap: 1rem;
        &__item {
            display: inline;
            text-align: center;
            text-decoration: none;
            padding: 0.5rem 1.5rem;
            color: vars.$bac-col;
            font-size: vars.$font-size;
            background-color: vars.$cta-col;
            transition: vars.$trans-time ease;
            &:hover {
                color: vars.$pri-col;
                background-color: vars.$hyperlink-col;
                transform: translate(-0.25rem, -0.25rem);
                box-shadow: 0.25rem 0.25rem;
            }

            // @media screen and (min-width: $breakpoint) {
            //     font-size: $font-size * 1.25;
            // }
        }
    }
</style>