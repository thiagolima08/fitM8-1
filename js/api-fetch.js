let deckTreinosDOM = document.querySelector(".deck-treinos");
let newTreinos = new Array;

fetch('https://wger.de/api/v2/exerciseimage/?format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;

    return data
  })
  .then(function(data) {
    for (let i of data['results']) {
      deckTreinosDOM.insertAdjacentHTML('beforeend', `                
          <div class="card shadow card-treino">
                  <img src="${i['image']}" class="mx-auto my-3 d-block card-img-top img-fluid" alt="...">
              <div class="card-body">
                  <h5 class="card-title"><strong>Supino Plano</strong></h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"></p>
                      <div class="text-right">
                      <button type="button" class="btn btn-primary mt-2 add-card">Adicionar</button>
                      </div>
              </div>
              
              
          </div>`)
      }
    });

document.addEventListener('click', (event) => {
  
  if (event.target.innerHTML === "Adicionar") {
    console.log(event.target.parentNode.parentNode.innerHTML);
    event.target.parentNode.parentNode.parentNode.classList.toggle('selected');
    event.target.innerHTML = "Remover"
    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-danger");

    let a = event.target.parentNode.parentNode.innerHTML.match(/<strong>(.*?)<\/strong>/g);
    console.log(a);




  } else if (event.target.innerHTML === "Remover") {
    event.target.parentNode.parentNode.parentNode.classList.toggle('selected');
    event.target.innerHTML = "Adicionar"
    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-primary");
  }
  
})



