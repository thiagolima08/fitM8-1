//Get elements
const deckTreinosDOM = document.querySelector(".deck-treinos");

//create references
let arr=[]
for (let i=0;i<=9;i++){  
   dbRefObject = firebase.database().ref().child(i)
   
//Sync object changes
dbRefObject.on('value', snap => {
  const obj = snap.val() 
  arr.push( 'beforeend', `                
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



