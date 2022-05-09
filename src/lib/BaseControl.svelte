<script lang="ts">
    import { tagDataMap, isDarkMode } from "../store"

    const switchTagData = (tag: string) => {
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    const switchDarkMode = () => {
        const newValue = !$isDarkMode
        isDarkMode.set(newValue)
        localStorage.setItem('isDarkMode', newValue.toString())

        if (newValue) document.body.classList.add("dark")
        else document.body.classList.remove("dark")
    }
</script>

<template lang="pug">
    div(class="control {$isDarkMode ? 'control--dark' : ''}")

        ul(class="control__contacts")
            h2(class="control__contacts__title") Find me elsewhere
            div(class="control__contacts__list")
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://twitter.com/JunoNgx") Twitter
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx") GitHub
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://junongx.itch.io/") Itch.io
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://flickr.com/people/JunoNgx/") Flickr
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://instagram.com/scientistxprincess/") Instagram
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="mailto:juno.ngx@gmail.com") Email
                a(class="control__contacts__list__item" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/JunoNgx/") LinkedIn

        div(class="control__settings")
            h2(class="control__settings__title") Settings
            // Dark mode control
            div(class="control__settings__dark-mode")
                div(class="control__settings__dark-mode__icon-container" on:click!="{switchDarkMode}")
                    div(class="control__settings__dark-mode__icon-container__content {$isDarkMode ? 'control__settings__dark-mode__icon-container__content--dark' : ''}")

                        // The sun
                        svg(class="control__settings__dark-mode__icon-container__content__icon control__settings__dark-mode__icon-container__content__icon--light" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                            circle(cx="12" cy="12" r="5")
                            line(x1="12" y1="1" x2="12" y2="3")
                            line(x1="12" y1="21" x2="12" y2="23")
                            line(x1="4.22" y1="4.22" x2="5.64" y2="5.64")
                            line(x1="18.36" y1="18.36" x2="19.78" y2="19.78")
                            line(x1="1" y1="12" x2="3" y2="12")
                            line(x1="21" y1="12" x2="23" y2="12")
                            line(x1="4.22" y1="19.78" x2="5.64" y2="18.36")
                            line(x1="18.36" y1="5.64" x2="19.78" y2="4.22")

                        // The moon
                        svg(class="control__settings__dark-mode__icon-container__content__icon control__settings__dark-mode__icon-container__content__icon--dark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                            path(d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")

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
        padding: 0.25rem
        border-bottom: 2px dashed v.$col-pri
        border-top: 2px dashed v.$col-pri
        +m.transition(border)

    @mixin title--dark
        border-bottom: 2px dashed v.$col-pri-dark
        border-top: 2px dashed v.$col-pri-dark
    
    .control
        text-align: right

        &__contacts, &__settings
            display: flex
            flex-flow: column nowrap
            align-items: flex-end

        &__contacts
            &__title
                +title

            &__list
                display: flex
                flex-flow: row wrap
                justify-content: flex-end
                gap: 0.5rem 1rem

                &__item
                    // margin-right: 0.5rem
                    // display: block
                    // background-image: none
                    // +m.transition(padding, color, background-color)

                    // &:hover
                    //     padding: 0 3rem 0 0.5rem
                    //     color: v.$col-bg
                    //     background-color: v.$col-acc

        &__settings
            &__title
                +title

            &__dark-mode
                &__icon-container
                    position: relative
                    width: 22px
                    height: 22px
                    white-space: nowrap
                    padding: 2px
                    cursor: pointer
                    border: 1px solid transparent
                    transition: border v.$trans-time-default ease-out
                    overflow: hidden

                    &:hover
                        border: 1px solid v.$col-pri

                    &__content
                        position: absolute
                        white-space: nowrap
                        transform: translateX(0)
                        transition: transform v.$trans-time-default ease-out

                        &--dark
                            transform: translateX(-23px)

                        &__icon
                            margin: 1px

            &__tags
                &__title

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

        &--dark
            .control__contacts__title,
            .control__settings__title
                +title--dark
            
            .control__settings__dark-mode__icon-container:hover
                border: 1px solid v.$col-pri-dark

            .control__settings__tags__list__item
                border: 2px solid v.$col-pri-dark

                &--selected
                    color: v.$col-bg-dark
                    background-color: v.$col-pri-dark


        +m.mobile
            text-align: left
</style>