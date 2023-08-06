 // Array de produtos
 const produtos = [
    {name: "Violão",description: "Tagima",price: 99.99,image: "img/hely.svg"},
    {name: "teclado",description: "Yamaha",price: 49.99,image: "img/hely.svg"},
    {name: "Guitarra",description: "Fender",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    {name: "Produto 2",description: "Descrição do Produto 2",price: 49.99,image: "img/hely.svg"},
    
    
    // Adicione mais produtos aqui
];

// Loop para exibir cada produto do array na página
const produtosContainer = document.querySelector("#produtos .product-list");
produtos.forEach((product, index) => {
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
        localStorage.setItem(`selectedProduct_${index}`, JSON.stringify(product));
        alert('adicionado ao carrinho');
      });

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productDescription);
    productItem.appendChild(productPrice);
    productItem.appendChild(buyButton);

    produtosContainer.appendChild(productItem);
});