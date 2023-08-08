//Limpa carrinho
function limpar(){
    localStorage.clear();
    location.reload();
};

const limparButton = document.getElementById("limpar");
limparButton.addEventListener("click", limpar);

// Recupera os itens do localStorage
const recuperarItensDoLocalStorage = () => {
    const produtosRecuperados = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("selectedProduct_")) {
        const product = JSON.parse(localStorage.getItem(key));
        produtosRecuperados.push(product);
      }
    }
  
    return produtosRecuperados;
  };
  
  //teste
  const itensRecuperados = recuperarItensDoLocalStorage();
  console.log(itensRecuperados);

    // Função para exibir os itens recuperados do localStorage
    const exibirItensRecuperados = () => {
        const produtosContainer = document.querySelector("#selectedProducts .product-list");
    
    
        const itensRecuperados = recuperarItensDoLocalStorage(); 
    
        itensRecuperados.forEach(product => {
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
        buyButton.textContent = "Remover";
    
       
      
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productDescription);
        productItem.appendChild(productPrice);
        productItem.appendChild(buyButton);
      
        produtosContainer.appendChild(productItem);
        });
    };
    
    // Chamando a função para exibir os itens recuperados do localStorage ao carregar a página
    exibirItensRecuperados();
    
  