<template>
    <section class="contact-me">
        <div class="contact-me__content">
            <p class="contact-me__say-hello">Would you like to say hello?</p>
            <p class="contact-me__contact-dir">My contacts are to the left ←</p>
            <p class="contact-me__contact-dir contact-me__contact-dir--is-mobile">My contacts are in the menu ↑</p>
        </div>
    </section>
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/_vars" as v

    .contact-me
        background-color: transparent
        border: none
        margin: auto
        text-align: center
        max-width: 360px
        padding: 0

        p
            margin: 0

        &__content
            border: 2px solid var(--col-pri)
            margin: 1rem
            padding: 1rem 1.5rem
        
        &__contact-dir
            display: block
            &--is-mobile
                display: none

        +m.mobile
            &__contact-dir
                display: none
                &--is-mobile
                    display: block

</style>