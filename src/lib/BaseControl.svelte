<script lang="ts">

</script>

<template lang="pug">
    div(class="control")
        p Find me elsewhere
            li ig
            li twitter
            li car
        div(class="settings")
            p Dark mode: off
            p Filtering tags
                li gamedev
                li webdev
                li hobby
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    
    .control
        text-align: right

        +m.mobile
            text-align: left
</style>