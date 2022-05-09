<template lang="pug">
    header
        h1 Juno Nguyen
        p web engineer by day
        p hobbyist gamedev, creative coding artist, tinkerer, know-it-all-wannabe by night
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    header
        text-align: right

        h1
            margin-top: 0
            // text-align: center
            // color: v.$col-bg
            // background-color: v.$col-acc
            // +m.transition(padding-right, color, background-color)

            // &:hover
                // padding-right: 3rem
                // color: v.$col-bg
                // background-color: v.$col-acc

        +m.mobile
            text-align: left
</style>