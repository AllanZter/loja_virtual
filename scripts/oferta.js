 // Array de produtos
 const ofertaproducts = [
    {name: "Produto 1",description: "Descrição do Produto 1",price: 99.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    
    
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

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);
    productItem.appendChild(productPrice);
    productItem.appendChild(buyButton);

    ofertaContainer.appendChild(productItem);
});