<script lang="ts">
    // TODO: not sure if this is the best way; find out how to declare chidlren as Snippet
    let { link, children }: { link: string, children?: any } = $props()
</script>

<template>
    <a href={link} rel="noopener noreferrer" target="_blank">
        {@render children()}
    </a>
</template>