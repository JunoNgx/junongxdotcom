<script>
    export let link;
</script>

<a class="custom-hyperlink" href={link} rel="noopener" target="_blank"><slot/></a>

<style lang="scss">
    @import '../styles/global.scss';

    a.custom-hyperlink {
        background-image: linear-gradient(to top, transparent 10%, $hyperlink-col 10% 40%, transparent 40%);
        color: $pri-col;
        text-decoration: none;
        transition: background-image 10000ms;
        &:hover {
            background-image: linear-gradient(to top, transparent 10%, $hyperlink-col 10% 90%, transparent 90%);
        }
    }
</style>