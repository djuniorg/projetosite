let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.carousel img'); // Seleciona todas as imagens

function showNextImage() {
    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');

    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % images.length; // Volta ao início se chegar ao final

    // Adiciona a classe 'active' à nova imagem
    images[currentIndex].classList.add('active');
}

// Muda a imagem a cada 3 segundos (3000 milissegundos)
setInterval(showNextImage, 3000);