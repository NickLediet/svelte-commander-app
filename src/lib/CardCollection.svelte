<script>
    import Card from './Card.svelte'

    export let cards;
    $: numberOfColumns = cards.length === 1 ? 1: Math.max((cards.length + 1) / 2)
</script>

<div style:--number-of-columns={numberOfColumns}>
    {#each cards as card}
        <Card {card} />
    {/each}
</div>

<style>
    div {
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(var(--number-of-columns), 1fr);
        max-width: 100vw;
    }
</style>