<script lang="ts">
    export let link;
</script>

<a rel="noopener noreferrer" target="_blank" href={link}><slot/></a>

<style lang="scss">
    @use '../styles/vars.scss';

    a {
        color: vars.$bac-col;
        padding: 0;
        text-decoration: none;
        &:visited {
            color: vars.$bac-col;
        }
        @media screen and (min-width: vars.$breakpoint) {
            color: vars.$pri-col;
            padding: 0;
            transition: vars.$trans-time ease;
            &:visited {
                color: vars.$pri-col;
            }
            &:hover {
                padding-left: 1rem;
                padding-right: 5rem;
                background-color: vars.$pri-col;
                color: vars.$bac-col;
            }
        }
    }

</style>