<script lang="ts">
    export let link: string
</script>

<template>
    <a href={link} rel="noopener noreferrer" target="_blank">
        <slot />
    </a>
</template>