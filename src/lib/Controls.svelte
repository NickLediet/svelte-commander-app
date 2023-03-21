<script>
    export let searchQuery;
    export let numberOfCards;
    export let randomButtonCallback;
</script>

<div class="controls-wrapper">
    <div class="inputs">
        <label for="scryfall-search-query">
            Additional Scryfall Query
        </label>
        <input id="scryfall-search-query" type="text" bind:value={searchQuery}>
    </div>
    <div class="inputs">
        <label for="scryfall-search-query">
            Number of cards    
        </label>
        <input 
            id="number-of-cards" 
            type="number"
            min="0"
            max="12"
            bind:value={numberOfCards}>
    </div>    
    <button on:click={randomButtonCallback}>
        Get a random commander
    </button>
</div>

<style>
    .controls-wrapper {
        display: flex;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        flex: 1 1;
        align-items: flex-start;
        margin-right: 1rem;
        margin-bottom: 0.5rem;
    }
   
   input, 
   label {
        color: #2B253A;
   }
</style>