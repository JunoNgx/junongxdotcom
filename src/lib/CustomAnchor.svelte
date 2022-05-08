<script lang="ts">
    export let link: string
</script>

<template lang="pug">
    a(href!="{link}" rel="noopener noreferrer" target="_blank")
        slot
</template>