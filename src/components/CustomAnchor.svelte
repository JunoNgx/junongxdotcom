<script lang="ts">
    export let link;
    export let isCta = false;
</script>

<a
    class="custom-hyperlink" href={link}
    class:custom-hyperlink--cta={isCta}
    rel="noopener noreferrer" target="_blank"
>    
    <slot/>
</a>

<style lang="scss">
    @use '../styles/vars.scss';

    a.custom-hyperlink {
        color: vars.$pri-col;
        text-decoration: none;
        background-repeat: no-repeat;
        background-image: linear-gradient(to top, vars.$hyperlink-col 0% 90%, transparent 10%);
        background-position: 50% 80%;
        background-size: 100% 30%;
        transition: background-size vars.$trans-time*0.7 ease-out,
            background-position vars.$trans-time*0.7 ease-out;
        &:hover {
            background-position: 50% 50%;
            background-size: 100% 100%;
        }
        &--cta {
            background-image: linear-gradient(to top, vars.$cta-col 0% 90%, transparent 10%);
        }
    }
</style>