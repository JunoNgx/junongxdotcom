<script lang="ts">

</script>

<template lang="pug">
    div(class="control")

        ul(class="control__contacts")
            h2(class="control__contacts__title") Find me elsewhere
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://twitter.com/JunoNgx") Twitter
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx") GitHub
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://junongx.itch.io/") Itch.io
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://flickr.com/people/JunoNgx/") Flickr
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://instagram.com/scientistxprincess/") Instagram
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="mailto:juno.ngx@gmail.com") Email
            a(class="control__contacts__item" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/JunoNgx/") LinkedIn

        div(class="control__settings")
            h2(class="control__settings__title") Settings
            p Dark mode: off
            p Filtering tags
                li gamedev
                li webdev
                li hobby
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    @mixin title
        font-size: 1.0rem
        padding: 0.25rem 1.5rem 0.25rem 0.5rem
        color: v.$col-bg
        background-color: v.$col-pri
        // box-shadow: 4px 4px v.$col-pri
    
    .control
        text-align: right

        &__contacts, &__settings
            display: flex
            flex-flow: column nowrap
            align-items: flex-end

        &__contacts
            &__title
                +title

            &__item
                margin-right: 0.5rem
                display: block
                background-image: none
                +m.transition(padding, color, background-color)

                &:hover
                    padding: 0 3rem 0 0.5rem
                    color: v.$col-bg
                    background-color: v.$col-acc

        &__settings
            &__title
                +title

        +m.mobile
            text-align: left
</style>