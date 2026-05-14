<template>
    <section class="contact-me">
        <div class="contact-me__wrapper">
            <div class="contact-me__content">
                <p>Sounds interesting? Drop me a message for:</p>
                <ul class=contact-me__list>
                    <li>Collaboration on small software, videogames, or creative projects</li>
                    <li>Introducing me to something you think I'd love or enjoy</li>
                    <li>Opportunities that fit what I do</li>
                    <li>Or just saying hi and making a new friend</li>
                </ul>
            </div>
            <p class="contact-me__contact-dir">
                My contacts are to the left ←
            </p>
            <p class="contact-me__contact-dir contact-me__contact-dir--is-mobile">
                My contacts are in the menu ↑
            </p>
        </div>
    </section>
</template>

<style lang="sass">
    @use "../styles/mixins" as m
    @use "../styles/vars" as v

    .contact-me
        max-width: v.$right-side-width
        border: 2px solid var(--col-pri)
        margin: 2rem
        padding: 1rem

        p
            margin: 0

        &__wrapper
            // Use double padding to match the outer size with Article
            padding: 1rem

        &__list
            list-style: square

        &__contact-dir
            display: block
            text-align: center
            &--is-mobile
                display: none

        +m.mobile
            margin: 2rem 0.5rem
            max-width: none

            &__contact-dir
                display: none
                &--is-mobile
                    display: block

</style>