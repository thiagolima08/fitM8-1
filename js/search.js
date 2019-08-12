function filterByInput() {
    /* console.log('filter working!') */
    let exbuscaDOM = document.querySelector(".ex-busca");
    let cardDOM = Array.from(document.querySelectorAll('.card-treino'));

    console.log(cardDOM);


    exbuscaDOM.addEventListener('keyup', (event) => {
    /* console.log(event.target.value); */

        for (let el of cardDOM) {
            if (el.innerText.toUpperCase().includes(event.target.value.toUpperCase())) {
                el.style.display = ''
            } else {
                el.style.display = 'none';
            }
        }
    })
}

export { filterByInput };

