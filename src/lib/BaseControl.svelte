<script lang="ts">
    import { onDestroy } from "svelte";
    import { tagDataMap } from "../store"

    const switchTagData = (tag: string) => {
        console.log("switch " + tag + $tagDataMap.get(tag))
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    let localtagDataMap: Map<string, boolean>

    const unsubscribe = tagDataMap.subscribe(value => {
        console.log("tag value change")
        localtagDataMap = value
    })

    onDestroy(unsubscribe)
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
            div(class="control__settings__tags")
                p(class="control__settings__tags__title") Filtering tags
                div(class="control__settings__tags__list")
                    +each("[...$tagDataMap] as [tag, isDisplayed]")
                        div(class="control__settings__tags__list__item {isDisplayed ? 'control__settings__tags__list__item--selected' : ''}" on:click!="{switchTagData(tag)}") {tag}
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

            &__tags
                &__list
                    display: flex
                    flex-flow: row wrap
                    justify-content: flex-end
                    gap: 0.5rem

                    &__item
                        border: 2px solid v.$col-pri
                        padding: 0.1rem 0.2rem
                        cursor: pointer
                        +m.transition(color, background-color)

                        &--selected
                            color: v.$col-bg
                            background-color: v.$col-pri

        +m.mobile
            text-align: left
</style>