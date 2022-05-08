<script lang="ts">
    export let link: string
</script>

<template lang="pug">
    a(href!="{link}")
        slot
</template>