let data;
let deckTreinosDOM = document.querySelector(".deck-treinos");

fetch('https://wger.de/api/v2/exerciseimage/?format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    data = myJson;

    for (let i of data['results']) {
        deckTreinosDOM.insertAdjacentHTML('beforeend', `                
            <div class="card shadow card-treino">
                    <img src="${i['image']}" class="w-50 mt-3 card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Supino Plano</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"></p>
                </div>
            </div>`)
        }
  });

/* TODO function htmlToExercise() */

