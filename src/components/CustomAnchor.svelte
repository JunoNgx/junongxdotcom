<script>
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
    @import '../styles/global.scss';

    a.custom-hyperlink {
        color: $pri-col;
        text-decoration: none;
        background-repeat: no-repeat;
        background-image: linear-gradient(to top, $hyperlink-col 0% 90%, transparent 10%);
        background-position: 50% 80%;
        background-size: 100% 30%;
        transition: background-size $trans-time*0.7 ease-out,
            background-position $trans-time*0.7 ease-out;
        &:hover {
            background-position: 50% 50%;
            background-size: 100% 100%;
        }
        &--cta {
            background-image: linear-gradient(to top, $hyperlink-cta-col 0% 90%, transparent 10%);
        }
    }
</style>