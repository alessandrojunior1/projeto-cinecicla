import { lixeiras } from './data.js';
import { lixeirasCard } from './components/lixeirasCard.js';
 
const lixeirasGrid = document.querySelector('.lixeiras');
 
lixeirasGrid.innerHTML = lixeiras
  .map((lixeiras) => lixeirasCard(lixeiras))
  .join('');

const filtro = document.querySelector('#filtro')

filtro.addEventListener('input', () => {
  lixeirasGrid.innerHTML = ''
  const item = filtro.value.toLowerCase()
  if (item.length === 0) {
    lixeirasGrid.innerHTML = lixeiras
    .map((lixeiras) => lixeirasCard(lixeiras))
    .join('');
    return
  }

  const uniqueLixeiras = new Set(); // Para armazenar objetos únicos

  lixeiras.forEach((lixeira) => {
    lixeira.itens_descartaveis.forEach((item_descartavel) => {
      if (item_descartavel.toLowerCase().includes(item)) {
        uniqueLixeiras.add(lixeira); // Adicione objetos únicos ao conjunto
      }
    });
  });

  const lixeiras_filtradas = Array.from(uniqueLixeiras); // Converta o conjunto de volta em um array

  if (lixeiras_filtradas.length === 0){
    // lixeirasGrid.innerHTML = `<div class="flex items-center"><p class="mx-[540px] text-center text-4xl text-white">Nenhum resultado encontrado</p></div>`
    lixeirasGrid.innerHTML = `<div class="grid place-items-center h-full"><p class="text-4xl text-white text-center">Nenhum resultado encontrado...</p></div>`
    return
  }
  
  lixeirasGrid.innerHTML = lixeiras_filtradas
  .map((lixeiras) => lixeirasCard(lixeiras))
  .join('');
}) 