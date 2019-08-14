import { filterByInput } from './search.mjs';
import { newTrain } from './new-train.mjs'

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
  