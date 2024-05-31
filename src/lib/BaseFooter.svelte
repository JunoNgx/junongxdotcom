<template>
    <footer>
        <p>
            made with <a rel="noopener noreferrer" target="_blank" href="https://svelte.dev/">svelte</a>, <a rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/">sass</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.typescriptlang.org/">typescript</a> and <span class="love">love</span>.
        </p>
        <p>
            uncopyrighted and <a rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx/junongxdotcom">open source</a>
        </p>
    </footer>
</template>

<style lang="sass">
    @use "../styles/vars" as v

    footer
        margin: 1rem auto 0 auto
        text-align: center
        p
            margin: 0

        .love
            color: var(--col-acc-alt)

</style>

