<script>
    export let card = {};

    $: src = card.image_uris.normal
    $: alt = card.name
    $:console.log(card.image_uris)
</script>

<div class="card">
    <img class="card-image" {src} {alt}>
</div>

<style>
    :root {
        --border-radius: 24px;
    }

    .card-image {
        border-radius: var(--border-radius);
        overflow: hidden;
    }
</style>