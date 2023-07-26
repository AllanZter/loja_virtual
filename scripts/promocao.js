 // Array de produtos
 const products = [
    {name: "Produto 1",description: "Descrição do Produto 1",price: 99.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    
    // Adicione mais produtos aqui
];

// Loop para exibir cada produto do array na página
const productContainer = document.querySelector("#promocao .product-list");
products.forEach(product => {
    const productItem = document.createElement("div");
 
    productItem.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("span");
    productPrice.classList.add("price");
    productPrice.textContent = `R$ ${product.price.toFixed(2)}`;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-btn");
    buyButton.textContent = "Comprar";

  
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);
    productItem.appendChild(productPrice);
    productItem.appendChild(buyButton);

    productContainer.appendChild(productItem);
});

// Loop para adicionar evento de clique ao botão "Comprar"
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const produto = products[index]; // Obtem o produto correspondente ao botão clicado
        adicionarAoCarrinho(produto);
    });
});

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto) {
    const carrinho = obterCarrinhoDoLocalStorage();
    carrinho.push(produto);
    salvarCarrinhoNoLocalStorage(carrinho);
    atualizarTotalItensCarrinho();
}

// Função para salvar o carrinho no LocalStorage
function salvarCarrinhoNoLocalStorage(carrinho) {
    const carrinhoJson = JSON.stringify(carrinho);
    localStorage.setItem("carrinho", carrinhoJson);
}




