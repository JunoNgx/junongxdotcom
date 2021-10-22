<script>
    export let items; // {label: string, link: string}
</script>

<main>
    <div class="section__actions">
        {#each items as item}
            <div class="section__actions_item">
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                    {item.label}
                </a>
            </div>
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
            background-color: 'red';
            color: 'blue';
        }
    }
</style>