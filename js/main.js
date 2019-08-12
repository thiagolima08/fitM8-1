import { filterByInput } from './search.js';

let exbuscaDOM = document.querySelector(".ex-busca");

exbuscaDOM.addEventListener('keyup', () => {
    filterByInput()
});

