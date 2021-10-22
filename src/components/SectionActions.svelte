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
        margin-top: 1.25rem;
        justify-content: flex-end;
        gap: 1rem;
        &__item {
            display: inline;
            text-decoration: none;
            padding: 0.25rem 1rem;
            color: $bac-col;
            font-size: 1.25em;
            background-color: $cta-col;
            transition: $trans-time ease;
            &:hover {
                color: $bac-col;
                background-color: $pri-col;
            }
        }
    }
</style>