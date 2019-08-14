//Get elements
const deckTreinosDOM = document.querySelector(".deck-treinos");
const addBtnDOM = document.querySelector(".add-treino");
const cadBtnDOM = document.querySelector(".cad-treino");
const inputTreinoDOM = document.querySelector(".input-treino");
const exListDOM = document.querySelector(".ex-list");
let chosenExs = new Array;

//create references
let arr=[]
for (let i=0;i<=9;i++){  
   dbRefObject = firebase.database().ref().child(i)
   
//input object in html
dbRefObject.on('value', snap => {
  const obj = snap.val() 
  arr.push(`                
  <div class="card shadow card-treino">
          <img src="${obj.image}" class="mx-auto my-3 d-block card-img-top img-fluid" alt="...">
      <div class="card-body">
          <h5 class="card-title"><strong>${obj.title}</strong></h5>
              <p class="card-text">${obj.description}</p>
              <p class="card-text"></p>
              <div class="text-right">
              <button type="button" class="btn btn-primary mt-2 add-card">Adicionar</button>
              </div>
      </div>      
  </div>`)  
  deckTreinosDOM.insertAdjacentHTML('beforeend', arr[i])

});}

document.addEventListener('click', (event) => {
  let item;

  if (event.target.innerHTML === "Adicionar") {
    /* console.log(event.target.parentNode.parentNode.innerHTML); */
    event.target.parentNode.parentNode.parentNode.classList.toggle('selected');
    event.target.innerHTML = "Remover"
    event.target.classList.remove("btn-primary");
    event.target.classList.add("btn-danger");

    item = event.target.parentNode.parentNode.innerHTML.match(/(?<=\<strong\>)(.*?)(?=<\/strong>)/g);
    chosenExs.push(item);

  } else if (event.target.innerHTML === "Remover") {
    event.target.parentNode.parentNode.parentNode.classList.toggle('selected');
    event.target.innerHTML = "Adicionar"
    event.target.classList.remove("btn-danger");
    event.target.classList.add("btn-primary");

    item = event.target.parentNode.parentNode.innerHTML.match(/(?<=\<strong\>)(.*?)(?=<\/strong>)/g);


      console.log(`removing ${item}`)
    chosenExs.splice(chosenExs.indexOf(item), 1)
      console.log(chosenExs);
  }
});

addBtnDOM.addEventListener('click', () => {
  exListDOM.innerHTML = "";

  (chosenExs.length === 0) ? cadBtnDOM.setAttribute("disabled", "") : cadBtnDOM.removeAttribute("disabled");

  for (let i of chosenExs) {
    /* console.log(i); */
    exListDOM.insertAdjacentHTML('beforeend', `<li class='card m-3 bg-light pl-4 py-3' style="border-left: 5px solid #3C40C6">${i}</li>`)
  }
})


