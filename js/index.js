let container = document.querySelector('.container')

let categoriasProdutos = document.querySelectorAll('.categorias-produtos')

let search = document.querySelector('#pesquisar')

let botaoSearch = document.querySelector('#botao-pesquisa')
botaoSearch.addEventListener('click', pesquisa)

let valorTotal = document.getElementById('valor-total')
valorTotal.innerHTML = 'R$ 0,00'
let total = 0

let quantidade = document.getElementById('qtde')
quantidade.innerHTML = '0'

let somador2 = 0


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
let removerProduto = 0
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

let carrinhoItens = document.querySelector('.carrinho-itens').children    
let id = 0
function encherCarrinho(event) {
    
    botaoClicado = event.currentTarget.parentNode.parentNode
    
    carrinho.innerHTML = ''
    carrinho.classList.remove('carrinho-vazio')
    ul.insertAdjacentHTML('beforeend', `
    <li class="carrinho-produto" id="${id}">
    <img src="${botaoClicado.children[0].children[0].attributes[0].value}" alt="" >
    <div>
        <h3>${botaoClicado.children[1].children[1].textContent}</h3>
        <p id="${id}">${botaoClicado.children[1].children[3].textContent}</p>
        <button class="remove" id="${id}" >Remover produto</button>
    </div>
    </li>
    
    `)
    id++
    carrinho.appendChild(ul)

    quantidade.innerHTML = ul.childElementCount
    
    
    let somador = parseInt(botaoClicado.children[1].children[3].textContent.slice(4, -3))
    
    somador2 += somador
    
    valorTotal.innerHTML = `R$ ${somador2},00`
    
    removerProduto = document.querySelectorAll('.remove')
    console.log(removerProduto)
    for(let i = 0; i < removerProduto.length; i++) {

        removerProduto[i].addEventListener('click', removeItem, false)
    }
    

}

function removeItem(event){
    console.log(Math.floor(parseInt(quantidade.textContent) / 2) / Math.floor(parseInt(quantidade.textContent) / 2))
    console.log(parseInt(event.target.parentNode.children[1].textContent.slice(4, -3)))
    event.target.parentNode.parentNode.remove()
    quantidade.innerHTML = ul.childElementCount
    somador2 = somador2 - parseInt(event.target.parentNode.children[1].textContent.slice(4, -3))
    valorTotal.innerHTML = `R$ ${somador2},00`
    if(ul.childElementCount == 0) {
        carrinho.insertAdjacentHTML('beforeend', `
        <h3>Carrinho Vazio</h3>
        <p>Adicione itens</p> 
        `)
        carrinho.classList.add('carrinho-vazio')
        quantidade.innerHTML = ul.childElementCount
        valorTotal.innerHTML = "R$ 0,00"
    }
}



function pesquisa(){
    let palavrasbusca = search.value.split(' ')
    let encontrado = false
    let nomeProduto = ''
    console.log(palavrasbusca)
    data.forEach(produto => {
        nomeProduto = produto.nameItem.split(' ')
        for(let i = 0; i < nomeProduto.length;i++){
            for(let j = 0; j < palavrasbusca.length;j++){
                console.log(palavrasbusca[j].toLowerCase() == nomeProduto[i].toLowerCase())
                if(palavrasbusca[j].toLowerCase() == nomeProduto[i].toLowerCase()) {
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
                    
                encontrado = true
                } 
                
            }
        }

    });

    if(!encontrado) {
        container.innerHTML = ''
        container.innerHTML = 'Nenhum produto encontrado'
        container.classList.add('nao-encontrado')
    }
}


for( let x = 0; x < categoriasProdutos.length;x++){
    categoriasProdutos[x].addEventListener('click', listarCategorias)
}


function listarCategorias(event) {
    let acessorios = []
    let camisetas = []
    event.preventDefault()
    console.log(event.currentTarget.textContent)
    if(event.currentTarget.textContent == 'Acessórios'){
        data.forEach(produto => {
            
            if(produto.tag == 'Acessórios') {
                acessorios.push(produto)
            }
            
        });
        container.innerHTML = ''
        container.classList.remove('nao-encontrado')
        acessorios.forEach(item => {
            container.insertAdjacentHTML("beforeend", 
            `
            <div class="cards">
    
            <div class="cards-img">
                <img src="${item.img}" alt="${item.nameItem}">
            </div>
    
            <div class="cards-container">
                <button class="buttonTag">${item.tag}</button>
                <h3 class="cards-title">${item.nameItem}</h3>
                <p class="cards-description">${item.description}</p>
                <p class="cards-price"> R$ ${item.value},00</p>
                <button class="addCart">${item.addCart}</button>
            </div>
            </div>
            
            `)
            
        })
    } else if(event.currentTarget.textContent == 'Camisetas') {
        data.forEach(produto => {
            
            if(produto.tag == 'Camisetas') {
                camisetas.push(produto)
            }
        

    });
    container.innerHTML = ''
    container.classList.remove('nao-encontrado')
    camisetas.forEach(item => {
        container.insertAdjacentHTML("beforeend", 
        `
        <div class="cards">

        <div class="cards-img">
            <img src="${item.img}" alt="${item.nameItem}">
        </div>

        <div class="cards-container">
            <button class="buttonTag">${item.tag}</button>
            <h3 class="cards-title">${item.nameItem}</h3>
            <p class="cards-description">${item.description}</p>
            <p class="cards-price"> R$ ${item.value},00</p>
            <button class="addCart">${item.addCart}</button>
        </div>
        </div>
        
        `)
    })
    }else {
        container.innerHTML = ''
        container.innerHTML = 'Nenhum produto encontrado'
        container.classList.add('nao-encontrado')
    }
}
    
    


 






    









