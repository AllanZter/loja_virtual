// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    const carrinho = obterCarrinhoDoLocalStorage();
    carrinho.push(produto);
    salvarCarrinhoNoLocalStorage(carrinho);
    atualizarTotalItensCarrinho();
}

// Função para obter o carrinho do LocalStorage
function obterCarrinhoDoLocalStorage() {
    const carrinhoJson = localStorage.getItem("carrinho");
    return carrinhoJson ? JSON.parse(carrinhoJson) : [];
}

// Função para salvar o carrinho no LocalStorage
function salvarCarrinhoNoLocalStorage(carrinho) {
    const carrinhoJson = JSON.stringify(carrinho);
    localStorage.setItem("carrinho", carrinhoJson);
}

// Função para exibir os itens do carrinho na página de carrinho (carrinho.html)
function exibirItensNoCarrinho() {
    const carrinho = obterCarrinhoDoLocalStorage();
    const carrinhoContainer = document.querySelector("#carrinho .carrinho-list");

    carrinhoContainer.innerHTML = ""; // Limpa o conteúdo do carrinho para atualização

    carrinho.forEach(produto => {
        const produtoItem = document.createElement("div");
        produtoItem.classList.add("produto-carrinho");

        const productName = document.createElement("h3");
        productName.textContent = produto.name;

        const productPrice = document.createElement("span");
        productPrice.classList.add("price");
        productPrice.textContent = `R$ ${produto.price.toFixed(2)}`;

        produtoItem.appendChild(productName);
        produtoItem.appendChild(productPrice);

        carrinhoContainer.appendChild(produtoItem);
    });
}

// Função para atualizar o total de itens no carrinho na página de carrinho (carrinho.html)
function atualizarTotalItensCarrinho() {
    const carrinho = obterCarrinhoDoLocalStorage();
    const totalItens = carrinho.length;
    const totalItensElement = document.querySelector("#total-itens");
    totalItensElement.textContent = totalItens.toString();
}

// Chamando a função para exibir os itens do carrinho quando a página de carrinho for carregada
exibirItensNoCarrinho();
