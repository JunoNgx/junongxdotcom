<script>
    export let items; // {label: string, link: string}
</script>

<main>
    <div class="section__actions">
        {#each items as item}
            <!-- <div class="section__actions__item"> -->
                <a class = "section__actions__item" href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.label}
                </a>
            <!-- </div> -->
        {/each}
    </div>
</main>

<style lang="scss">
    @import '../styles/global.scss';

    .section__actions {
        display: flex;
        margin: 1rem;
        justify-content: flex-end;
        &__item {
            display: inline;
            text-decoration: none;
            // border: 1px $pri-col solid;
            padding: 0.25rem 1rem;
            // &a {
            color: $bac-col;
            font-size: 1.25em;
            background-color: $pri-col;
            // }
            transition: $trans-time ease;
            &:hover {
                background-color: $cta-col;
            }
        }
    }
</style>