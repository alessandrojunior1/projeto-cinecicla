import { lixeiras } from './data.js';
import { lixeirasCard } from './components/lixeirasCard.js';
 
const lixeirasGrid = document.querySelector('.lixeiras');
 
lixeirasGrid.innerHTML = lixeiras
  .map((lixeiras) => lixeirasCard(lixeiras))
  .join('');
