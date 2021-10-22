<script>
    export let items; // {label: string, link: string}[]
</script>

<main>
    <div class="section__actions">
        {#each items as item}
                <a class = "section__actions__item" href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.label}
                </a>
        {/each}
    </div>
</main>

<style lang="scss">
    @import '../styles/global.scss';

    .section__actions {
        display: flex;
        margin-top: 2rem;
        justify-content: flex-end;
        gap: 1rem;
        &__item {
            display: inline;
            text-align: center;
            text-decoration: none;
            padding: 0.25rem 1rem;
            color: #fff;
            font-size: $font-size;
            background-color: $cta-col;
            transition: $trans-time ease;
            &:hover {
                background-color: $pri-col;
            }

            // @media screen and (min-width: $breakpoint) {
            //     font-size: $font-size * 1.25;
            // }
        }
    }
</style>