<script lang="ts">

</script>

<template lang="pug">
    header
        h1 Juno Nguyen
        div I'm a webdev by trade, an indie gamedev, and creative artist
</template>

<style lang="sass">
    @use "../styles/_mixins" as m

    header
        text-align: right

        h1
            margin-top: 0

        +m.mobile
            text-align: left
</style>