let container = document.querySelector('.container')


function criarCards(arrayProdutos) {
    


   arrayProdutos.forEach(produto => {
        
        container.insertAdjacentHTML("beforeend", 
        `
        <div class="cards">

        <div class="cards-img">
            <img src="./${produto.img}" alt="${produto.nameItem}">
        </div>

        <div class="cards-container">
            <button class="buttonTag">${produto.tag}</button>
            <h3 class="cards-title">${produto.nameItem}</h3>
            <p class="cards-description">${produto.description}</p>
            <p class="cards-price"> R$ ${produto.value},00</p>
            <button>${produto.addCart}</button>
        </div>
    </div>
        
        `)
    });
    
}

criarCards(data)


