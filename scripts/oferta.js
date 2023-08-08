 // Array de produtos
 const ofertaproducts = [
    {id: 11, name: "Produto 1",description: "Descrição do Produto 1",price: 99.99,image: "img/produtos/g7.webp"},
    {id: 12, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/produtos/g5.webp"},
    {id: 13, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/produtos/g2.webp"},
    {id: 14, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/produtos/g6.webp"},
    {id: 15, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/produtos/g3.webp"},
    {id: 16, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/produtos/g4.webp"},
    
    
    // Adicione mais produtos aqui
];

// Loop para exibir cada produto do array na página
const ofertaContainer = document.querySelector("#oferta .product-list");
ofertaproducts.forEach(product => {
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

    buyButton.addEventListener("click", () => {
        //adiciona produto no local storage
        localStorage.setItem(`selectedProduct_${product.id}`, JSON.stringify(product));
        alert('adicionado ao carrinho');
      });


    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);
    productItem.appendChild(productPrice);
    productItem.appendChild(buyButton);

    ofertaContainer.appendChild(productItem);
});