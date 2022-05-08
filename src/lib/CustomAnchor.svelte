<script lang="ts">
    export let link;
</script>

<template lang="pug">
    a(href!="{link}")
        slot
</template>