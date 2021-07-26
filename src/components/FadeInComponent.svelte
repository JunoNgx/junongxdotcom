<script>
    import {onMount} from 'svelte';

    export let isOnceOnly;

    let intersectionObserverSupport = false
    let isVisible = false;
    let element;
    let observer;

    function updateVisibility(entries, observer) {
        if (isVisible && isOnceOnly) return;
        isVisible = entries[0].isIntersecting;
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
        transition: opacity 0.5s ease-out;
        transition: transform 0.5s ease-out;
        opacity: 0;
        transform: translate(200px, 0);
        // background-color: blue;
        // transform: rotate(45deg);
        &--is-visible {
            transition: opacity 0.5s ease-out;
            transition: transform 0.5s ease-out;
            // background-color: red;
            opacity: 1.0;
            transform: translate(0, 0);
        }
    }
</style>