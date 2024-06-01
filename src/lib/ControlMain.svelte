<script lang="ts">
    import ContactList from "./ContactList.svelte";
    import DisplayMode from "./DisplayMode.svelte";
    import FilterTags from "./FilterTags.svelte";
</script>

<template>
    <div class="control">
        <ContactList />
        <DisplayMode />
        <FilterTags />
    </div>
</template>

<style lang="sass">
    @use "../styles/mixins" as m
    @use "../styles/vars" as v

    .control
        margin-top: 0.5rem
        display: flex
        flex-direction: column
        flex-wrap: nowrap
        gap: 1rem
        +m.mobile
            margin-top: 1rem

</style>