let lista = document.querySelector(".lista")

let containerBotoes = document.querySelector(".containerBotoes")

let containerBuscaPorNome = document.querySelector(".containerBuscaPorNome")

let input = document.querySelector(".campoBuscaPorNome")

function criaCartoes(array) {
  lista.innerHTML = ""
  array.forEach(function (element) {
    let cartao = document.createElement("li")
    cartao.className = "cartao"
    lista.append(cartao)

    let imgCartao = document.createElement("img")
    imgCartao.className = "imgCartao"
    imgCartao.src = element.img
    cartao.append(imgCartao)

    let tituloCartao = document.createElement("h3")
    tituloCartao.className = "tituloCartao"
    tituloCartao.innerText = element.nome
    cartao.append(tituloCartao)

    let categoriaCartao = document.createElement("p")
    categoriaCartao.className = "categoriaCartao"
    categoriaCartao.innerText = element.secao
    cartao.append(categoriaCartao)

    let precoCartao = document.createElement("p")
    precoCartao.className = "categoriaCartao"
    precoCartao.innerText = `R$: ${(element.preco).toFixed(2)}`
    cartao.append(precoCartao)
  })
}


function somaFinal(array) {
  let precoTotal = document.querySelector("#precoTotal")
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i].preco
  }
  precoTotal.innerText = `R$: ${(soma).toFixed(2)}`
}



function filtraBotoes(array) {
  containerBotoes.addEventListener('click', function (event) {
    if (event.target.id == "botaoHortifruti") {
      array = produtos.filter(function (element) {
        return element.secao == "Hortifruti"
      })
    }
    else if (event.target.id == "botaoPanificadora") {
      array = produtos.filter(function (element) {
        return element.secao == "Panificadora"
      })
    }
    else if (event.target.id == "botaoLaticinios") {
      array = produtos.filter(function (element) {
        return element.secao == "Laticínio"
      })
    }
    else {
      array = produtos
    }
    criaCartoes(array)
    somaFinal(array)
  })
}


function filtraPesquisa(array) {
  containerBuscaPorNome.addEventListener('click', function (event) {
    if (event.target.id == "botaoBuscaPorNome") {
      array = produtos.filter(function (element) {
        let nomeProduto = element.nome
        return nomeProduto.toLowerCase().includes(input.value.toLowerCase())
      })
    }
    criaCartoes(array)
    somaFinal(array)
  })
}


function funcaoFinal() {
  criaCartoes(produtos)
  somaFinal(produtos)
  filtraBotoes(produtos)
  filtraPesquisa(produtos)
}

funcaoFinal()

