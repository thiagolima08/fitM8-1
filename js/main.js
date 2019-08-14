import { filterByInput } from './search.js';
import { newTrain } from './new-train.js'

const exbuscaDOM = document.querySelector(".ex-busca");
const cadBtnDOM = document.querySelector(".cad-treino");
const myExsDOM = document.querySelector('.my-exs');



exbuscaDOM.addEventListener('keyup', () => {
    filterByInput()
});

cadBtnDOM.addEventListener('click', () => {
    chosenExs.unshift('Treino ' + inputTreinoDOM.value);
    
    console.log(chosenExs);

    myExsDOM.insertAdjacentHTML('beforeend', 
    newTrain(chosenExs))
    chosenExs = [];
})
  