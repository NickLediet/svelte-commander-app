import { SCRYFALL_API_BASE_URL, CARDS_RANDOM_ENDPOINT } from '../constants'

export function getRandomCard(scryfallSearchQuery = '') {
    let url = `${SCRYFALL_API_BASE_URL}/${CARDS_RANDOM_ENDPOINT}` 
    let searchQuery = `?q=type:legendary`

    if(scryfallSearchQuery) {
      searchQuery += ` ${scryfallSearchQuery}`  
    }

    return fetch(url+searchQuery)
        .then(res => res.json())
}

export async function getRandomCardCollection({
    searchQuery = '',
    numberOfCards = 1 
}) {
    const uniqueCardNames = {};
    const cards = [];

    while(cards.length != numberOfCards) {
        const card = await getRandomCard(searchQuery)

        if(Object.hasOwnProperty(card.name)) {
            continue;
        }

        uniqueCardNames[card.name] = card.name;
        cards.push(card)
    }
    console.log(uniqueCardNames)
    return cards;
}