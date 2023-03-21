import './app.css'
import App from './App.svelte'
import {getRandomCardCollection} from './lib/models/card.models'
const app = new App({
  target: document.getElementById('app'),
})

getRandomCardCollection({ searchQuery: `c:red`, numberOfCards: 5})
  .then(console.log)

export default app
