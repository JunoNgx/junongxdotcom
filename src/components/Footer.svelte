<script lang="ts">
    import CA from './CustomAnchor.svelte';
</script>

<footer class="footer">
    <p>made with <CA link="https://svelte.dev/">Svelte</CA>, <CA link="https://sass-lang.com/">SASS</CA>, and <CA link="https://www.typescriptlang.org/">TypeScript</CA></p>
    <p>uncopyrighted and <CA link="https://github.com/JunoNgx/junongxdotcom">open source</CA></p>
</footer>

<style lang="scss">
    @use "../styles/vars";

    .footer {
        font-size: vars.$font-size;
        margin: 5rem auto 1rem auto;
        text-align: center;
        p {
            margin: 0;
        }
    }
</style>

