<script>
    import {onMount} from 'svelte';

    let intersectionObserverSupport = false
    let isVisible = false;
    let element;
    let observer;

    function updateVisibility(entries, observer) {
        isVisible = entries[0].isIntersecting;
        console.log("updating visibility");
    }

    onMount(() => {
        intersectionObserverSupport =
                'IntersectionObserver' in window &&
                'IntersectionObserverEntry' in window &&
                'intersectionRatio' in window.IntersectionObserverEntry.prototype;

        if (intersectionObserverSupport) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
            observer = new IntersectionObserver(updateVisibility, options);
            observer.observe(element);
        }
    });

</script>

<div 
    class="fade-in-component"
    class:fade-in-component--is-visible={isVisible}
    bind:this={element}
>
    <slot/>
</div>

<style lang="scss">

    .fade-in-component {
        background-color: blue;
        // transform: rotate(45deg);
        &--is-visible {
            background-color: red;
        }
    }
</style>