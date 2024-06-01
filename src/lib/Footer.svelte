<template>
    <footer>
        <p>
            made with <a rel="noopener noreferrer" target="_blank" href="https://svelte.dev/">svelte</a>, <a rel="noopener noreferrer" target="_blank" href="https://sass-lang.com/">sass</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.typescriptlang.org/">typescript</a>, and <span class="love">love</span>
        </p>
        <p>
            uncopyrighted and <a rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx/junongxdotcom">open source</a>
        </p>
    </footer>
</template>

<style lang="sass">
    @use "../styles/vars" as v

    footer
        margin: 1rem auto 1rem auto
        text-align: center
        p
            margin: 0

        .love
            color: var(--col-acc-alt)
            text-decoration: none
            background: url("/images/wave.svg")
            background-repeat: repeat-x
            background-size: 10px 3px
            background-position: 0px 20px
            animation: move 2s linear 2s infinite

    @keyframes move
        from
            background-position: 0px 20px
        to
            background-position: 40px 20px

</style>

