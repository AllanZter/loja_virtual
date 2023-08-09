const slider = document.querySelector('.slider');
const slidePromocao = document.querySelector('#promocao');
let slideIndex = 0;

function showSlide(index) {
    slidePromocao.style.transform = `translateX(-${index * 100}%)`;
}

// Chamar a função para exibir o primeiro slide
showSlide(slideIndex);

// Avançar para o próximo slide
function nextSlide() {
    slideIndex++;
    if (slideIndex > 0) {
        slideIndex = 0; // Volta para o primeiro slide após o último
    }
    showSlide(slideIndex);
}

// Definir intervalo para trocar automaticamente os slides (a cada 5 segundos)
setInterval(nextSlide, 5000);
