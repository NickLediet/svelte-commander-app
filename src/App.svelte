<script>
  import Controls from './lib/Controls.svelte'
  import CardsCollection from './lib/CardCollection.svelte'
  import { getRandomCardCollection } from './lib/models/card.models'
  import CardCollection from './lib/CardCollection.svelte'

  let searchQuery = ''
  let numberOfCards = 1
  let getRandomCardQuery = getRandomCardCollection({ searchQuery, numberOfCards });

  function randomButtonCallback() {
    getRandomCardQuery = getRandomCardCollection({ searchQuery, numberOfCards })
  }

  $: console.log(`Search Query: ${searchQuery}`) 
</script>

<main>
  <Controls 
    {randomButtonCallback} 
    bind:numberOfCards={numberOfCards} 
    bind:searchQuery={searchQuery} />  
  {#await getRandomCardQuery}
    <p>Loading random card...</p>
  {:then cards}
    <CardCollection {cards} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}

</main>

<style>

</style>
