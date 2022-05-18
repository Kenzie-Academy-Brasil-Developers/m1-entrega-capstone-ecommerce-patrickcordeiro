let container = document.querySelector('.container')

let search = document.querySelector('#pesquisar')
let botaoSearch = document.querySelector('#botao-pesquisa')
let valorTotal = document.getElementById('valor-total')
valorTotal.innerHTML = 'R$ 0,00'
let quantidade = document.getElementById('qtde')
quantidade.innerHTML = '0'
let somador2 = 0
botaoSearch.addEventListener('click', pesquisa)

function pesquisa(){
    
    data.forEach(produto => {

        if(search.value == produto.nameItem) {
            container.innerHTML = ''
            container.insertAdjacentHTML("beforeend", 
        `
        <div class="cards">

        <div class="cards-img">
            <img src="${produto.img}" alt="${produto.nameItem}">
        </div>

        <div class="cards-container">
            <button class="buttonTag">${produto.tag}</button>
            <h3 class="cards-title">${produto.nameItem}</h3>
            <p class="cards-description">${produto.description}</p>
            <p class="cards-price"> R$ ${produto.value},00</p>
            <button class="addCart">${produto.addCart}</button>
        </div>
    </div>
        
        `)

        }
        
    });
    
}



let carrinho = document.querySelector('.carrinho-itens')

function criarCards(arrayProdutos) {
    


   arrayProdutos.forEach(produto => {
        
        container.insertAdjacentHTML("beforeend", 
        `
        <div class="cards">

        <div class="cards-img">
            <img src="${produto.img}" alt="${produto.nameItem}">
        </div>

        <div class="cards-container">
            <button class="buttonTag">${produto.tag}</button>
            <h3 class="cards-title">${produto.nameItem}</h3>
            <p class="cards-description">${produto.description}</p>
            <p class="cards-price"> R$ ${produto.value},00</p>
            <button class="addCart">${produto.addCart}</button>
        </div>
    </div>
        
        `)
    });
    
}



criarCards(data)
let addCart = document.querySelectorAll('.addCart')
let arrayCarrinho = []
for( let i = 0; i < addCart.length;i++){
    addCart[i].addEventListener('click', encherCarrinho)
}

let botaoClicado = ''
let removerProduto = ''
let elementoRemover = ''
let ul = document.createElement('ul')
if(ul.childElementCount == 0) {
    carrinho.insertAdjacentHTML('beforeend', `
    <h3>Carrinho Vazio</h3>
    <p>Adicione itens</p> 
    `)
    carrinho.classList.add('carrinho-vazio')
}else {
    
    carrinho.classList.remove('carrinho-vazio')
}


function encherCarrinho(event) {
    botaoClicado = event.currentTarget.parentNode.parentNode
    
    carrinho.innerHTML = ''
    carrinho.classList.remove('carrinho-vazio')
    ul.insertAdjacentHTML('beforeend', `
    <li class="carrinho-produto">
    <img src="${botaoClicado.children[0].children[0].attributes[0].value}" alt="" >
    <div>
        <h3>${botaoClicado.children[1].children[1].textContent}</h3>
        <p>${botaoClicado.children[1].children[3].textContent}</p>
        <button class="remove">Remover produto</button>
    </div>
    </li>
    
    `)

    console.log(botaoClicado.children[1].children[3].textContent)
    carrinho.appendChild(ul)

    quantidade.innerHTML = ul.childElementCount
    
    
    let somador = parseInt(botaoClicado.children[1].children[3].textContent.slice(4, -3))
    somador2 += somador
    console.log(somador2)
    valorTotal.innerHTML = `R$ ${somador2},00`
    
    // s
    // arrayCarrinho.push(removerProduto)

    // elementoRemover = removerProduto.parentElement.parentElement

    // console.log(removerProduto)
    // removerProduto.addEventListener('click', () => {
    //     elementoRemover.remove()
    // })
    
    
}






// for(let i = 0; i < arrayCarrinho.length; i++){
//     removerProduto = arrayCarrinho[i].children[1].children[2]
//     console.log(removerProduto)
//     removerProduto.addEventListener('click', removeProduto)
// }

// function removeProduto(event){
//     let removeClicado = event.currentTarget
//     console.log(removeClicado)
// }




 





    









