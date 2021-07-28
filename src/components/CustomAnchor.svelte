<script>
    export let link;
</script>

<a class="custom-hyperlink" href={link} rel="noopener noreferrer" target="_blank"><slot/></a>

<style lang="scss">
    @import '../styles/global.scss';

    a.custom-hyperlink {
        background-image: linear-gradient(to top, transparent 10%, $hyperlink-col 10% 40%, transparent 40%);
        color: $pri-col;
        text-decoration: none;
        &:hover {
            background-image: linear-gradient(to top, transparent 10%, $hyperlink-col 10% 90%, transparent 90%);
        }
    }
    // Animating hyperlink highlight
    // Adapted from Evan You's website
    // Doesn't work when the url is on a linebreak
    // a.custom-hyperlink {
    //     color: $pri-col;
    //     text-decoration: none;
    //     position: relative;
    //     &::before {
    //         background-color: $hyperlink-col;
    //         content: '';
    //         position: absolute;
    //         z-index: -1;
    //         top: 60%;
    //         left: -0.1rem;
    //         right: -0.1rem;
    //         bottom: 10%;
    //         transition: top $trans-time*0.7 ease-out;
    //     }
    //     &:hover::before {
    //         top: 10%;
    //     }
    // }
</style>