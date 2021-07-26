<script>
    export let link;
</script>

<a rel="noopener noreferrer" target="_blank" href={link}><slot/></a>

<style lang="scss">
    @import '../styles/global.scss';

    a {
        color: $bac-col;
        padding: 0;
        text-decoration: none;
        &:visited {
            color: $bac-col;
        }
        @media screen and (min-width: $breakpoint) {
            color: $pri-col;
            padding: 0;
            transition: $trans-time ease;
            &:visited {
                color: $pri-col;
            }
            &:hover {
                padding-left: 1rem;
                padding-right: 5rem;
                background-color: $pri-col;
                color: $bac-col;
            }
        }
    }

</style>