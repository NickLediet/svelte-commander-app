<script>
    import {createEDHRecLink} from '../lib/models/card.models'

    export let card = {};

    $: src = card.image_uris.normal
    $: alt = card.name
    $: href = createEDHRecLink(card.name)
</script>

<div class="card">
    <a {href} target="_blank" rel="noreferrer">
        <img class="card-image" {src} {alt}>
    </a>
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