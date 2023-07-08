<script lang="ts">
    export let isForMobile = false

    import { tagDataMap, isDarkMode } from "../store"

    const switchTagData = (tag: string) => {
        $tagDataMap.set(tag, !$tagDataMap.get(tag))
        tagDataMap.set($tagDataMap)
    }

    const checkAll = (booleanValue: boolean) => {
        // console.log("checked: " + booleanValue)
        $tagDataMap.forEach((isDisplayed, tagName) => $tagDataMap.set(tagName, booleanValue))
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
    
    .control(class!="{$isDarkMode ? 'control--dark' : ''} {isForMobile ? 'for-mobile' : ''}")

        .control__contact
            h2.control__contact-title Find me elsewhere
            .control__contact-list
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://twitter.com/JunoNgx") Twitter
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://github.com/JunoNgx") GitHub
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://junongx.itch.io/") Itch.io
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://flickr.com/people/JunoNgx/") Flickr
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://instagram.com/scientistxprincess/") Instagram
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="mailto:juno.ngx@gmail.com") Email
                a.control__contact-item(rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/JunoNgx/") LinkedIn

        .control__settings
            h2.control__settings-title Settings
            // Dark mode control
            .control__settings-dark-mode
                .control__settings-dark-mode-icon-container(on:click!="{switchDarkMode}")
                    .control__settings-dark-mode-icon-content(class!="{$isDarkMode ? 'control__settings-dark-mode-icon-content--dark' : ''}")

                        // The sun
                        svg.control__settings-dark-mode-icon-svg.control__settings-dark-mode-icon-svg--light(xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
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
                        svg.control__settings-dark-mode-icon-svg.control__settings-dark-mode-icon-svg--dark(xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                            path(d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")

            .control__settings-tags

                p.control__settings-tags-title Filtering tags

                .control__settings__tags__buttons
                    button.control__settings__tags__buttons__button(type="button" on:click!="{() => {checkAll(false)}}") Uncheck all
                    button.control__settings__tags__buttons__button(type="button" on:click!="{() => {checkAll(true)}}") Check all

                .control__settings__tags__list
                    +each("[...$tagDataMap] as [tag, isDisplayed]")
                        .control__settings__tags__list__item(class!="{isDisplayed ? 'control__settings__tags__list__item--selected' : ''}" on:click!="{switchTagData(tag)}")
                            span {tag}
                            +if('isDisplayed')
                                svg.control__settings__tags__list__item__checkmark(xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                    polyline(points="20 6 9 17 4 12")
                                +else()
                                    svg.control__settings__tags__list__item__checkmark(xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round")
                                        line(x1="18" y1="6" x2="6" y2="18")
                                        line(x1="6" y1="6" x2="18" y2="18")
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    @mixin title
        font-size: 1.2rem
        padding: 0.1rem 0.25rem
        border-bottom: 2px dashed v.$col-pri
        border-top: 2px dashed v.$col-pri
        +m.transition(border)

    @mixin title--dark
        border-bottom: 2px dashed v.$col-pri-dark
        border-top: 2px dashed v.$col-pri-dark
    
    .control
        text-align: right

        &__contact, &__settings
            display: flex
            flex-flow: column nowrap
            align-items: flex-end

        &__contact-title
            +title

        &__contact-list
            display: flex
            flex-flow: row wrap
            justify-content: flex-end
            gap: 0.5rem 1.5rem

        &__contact-item
            // margin-right: 0.5rem
            // display: block
            // background-image: none
            // +m.transition(padding, color, background-color)

            // &:hover
            //     padding: 0 3rem 0 0.5rem
            //     color: v.$col-bg
            //     background-color: v.$col-acc

            +m.mobile
                text-decoration: underline

        &__settings-title
            +title

        &__settings-dark-mode
            &-icon-container
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

            &-icon-content
                position: absolute
                white-space: nowrap
                transform: translateX(0)
                transition: transform v.$trans-time-default ease-out

                &--dark
                    transform: translateX(-23px)

            &-icon-svg
                margin: 1px

        &__settings-tags
            &-title
                margin-bottom: 0.5rem

        &__settings

            &__tags
                // &__title
                //     margin-bottom: 0.5rem

                &__buttons
                    margin-bottom: 0.5rem

                    &__button
                        +m.button
                        margin-left: 0.5rem
                        font-size: 12px

                &__list
                    display: flex
                    flex-flow: row wrap
                    justify-content: flex-end
                    gap: 0.5rem

                    &__item
                        border: 1px solid v.$col-pri
                        border-radius: 1rem
                        padding: 0.1rem 0.5rem
                        height: 1.2rem
                        cursor: pointer
                        font-size: 12px

                        display: flex
                        flex-flow: row wrap
                        justify-content: space-between
                        align-items: center
                        gap: 0.15rem

                        +m.transition(color, background-color)

                        &__checkmark
                            display: block

                        &--selected
                            color: v.$col-bg
                            background-color: v.$col-pri

        &--dark
            .control__contacts__title,
            .control__settings__title
                +title--dark
            
            .control__settings__dark-mode__icon-container:hover
                border: 1px solid v.$col-pri-dark

            .control__settings__tags__buttons__button
                +m.button-dark

            .control__settings__tags__list__item
                border: 1px solid v.$col-pri-dark

                &--selected
                    color: v.$col-bg-dark
                    background-color: v.$col-pri-dark

        +m.mobile
            display: none

        &.for-mobile
            +m.mobile
                display: block
</style>