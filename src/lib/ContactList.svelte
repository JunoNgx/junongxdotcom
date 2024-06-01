<script>
    import contacts from "src/data/contacts.yaml";
</script>

<template>
    <div class="contacts">
        <h2 class="contacts__title">Find me elsewhere</h2>
        <div class="contacts__list">
            {#if contacts.length > 0}
                {#each contacts as contact}
                    <a
                        class="contacts__item"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={contact.url}
                    >
                        {contact.label}
                    </a>
                {/each}
            {/if}
        </div>
    </div>
</template>

<style lang="sass">
    @use "../styles/_mixins" as m
    @use "../styles/vars" as v

    .contacts
        +m.control-wrapper

        &__title
            +m.control-title

        &__list
            display: flex
            flex-flow: row wrap
            justify-content: flex-end
            gap: 0.5rem 1.5rem

        &__item
            +m.mobile
                text-decoration: underline

</style>