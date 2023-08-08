 // Array de produtos
 const products = [
    {id: 0, name: "Produto 1",description: "Descrição do Produto 1",price: 99.99,image: "img/hely.svg"},
    {id: 1, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {id: 2, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {id: 3, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {id: 4, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {id: 5, name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    
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

    productContainer.appendChild(productItem);
});






