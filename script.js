const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container2 = document.querySelector('.container2');

// Função para mover o botão "Não" para uma posição aleatória
function moveNoButtonRandomly() {
  const randomX = Math.random() * (window.innerWidth - 200);
  const randomY = Math.random() * (window.innerHeight - 200);
  container2.style.left = `${randomX}px`;
  container2.style.top = `${randomY}px`;
}
yesButton.addEventListener('click', function() {
    window.location.href = 'hum.html';
});

// Evento que é acionado quando o mouse se aproxima do botão "Não"
noButton.addEventListener('mouseover', moveNoButtonRandomly);
