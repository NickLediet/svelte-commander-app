import { 
    SCRYFALL_API_BASE_URL, 
    CARDS_RANDOM_ENDPOINT,
    IS_COMMANDER,
    IN_PAPER
} from '../constants'

export function buildDefaultSearchQuery(queries) {
    const queryList = queries.join(' ')

    return `q=${queryList}`
}

export function getRandomCard(scryfallSearchQuery = '') {
    let url = `${SCRYFALL_API_BASE_URL}/${CARDS_RANDOM_ENDPOINT}`
    
    let searchQuery = '?' + buildDefaultSearchQuery([
        IS_COMMANDER,
        IN_PAPER
    ])

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

    return cards;
}

export function createEDHRecLink(cardName) {
    const cardPath = cardName
        .replace(/[^\w\s]/gi, '')
        .replace(/\s/gi, '-')
        .toLowerCase()

    return `https://edhrec.com/commanders/${cardPath}`;
}