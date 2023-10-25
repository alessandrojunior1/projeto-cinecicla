import { formatCurrency, formatDate } from '../lib/utils.js';
 
export function lixeirasCard(lixeiras) {
  return `
    <div
      id="lixeiras-${lixeiras.id}"
      class="bg-white shadow-md bg-opacity-60 rounded-lg p-4"
    >
    <div class="flex justify-between items-center"> 
      <img src=${lixeiras.image}>
    </div>
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">
          ${lixeiras.name}
        </h3>
        <p class="text-lg font-semibold text-gray-700">
          ${formatCurrency(lixeiras.type)}
        </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Sobre:</span>
          ${lixeiras.about}
        </p>
        <p class="text-sm text-gray-500">
        <span class="font-bold">Data:</span>
        ${formatDate(lixeiras.created_at)}
        </p>
      </div>
    </div>
  `;
}
