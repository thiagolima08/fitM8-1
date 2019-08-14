function newTrain(arr) {
    
    let template = '';
    for (let i=1; i <= arr.length-1; i++) {
        template += `<li class='card m-3 bg-light pl-4 py-3' style="border-left: 5px solid #3C40C6">${arr[i]}</li>`;
    }

    return `<div class="card m-2 w-25 col-xs-5 shadow-sm text-left ex-card">
            <div class="card-header text-right">
                <a href="" class="">Remove</a>
            </div>
                <div class="card-body">
                 <strong><h3 class="card-title text-center">${arr[0]}</h3></strong>   
             <p class="card-text">
                <ul class="mt-3 p-0 ex-list">
                    ${template}
               </ul>
             </p>
            </div>
            </div>`
}

export { newTrain };