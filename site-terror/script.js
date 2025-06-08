// Pega os elementos
const scaryBtn = document.getElementById('scary-btn');
const scaryMsg = document.getElementById('scary-msg');
const mainTitle = document.getElementById('main-title');
const playSoundBtn = document.getElementById('play-sound-btn');
const scarySound = document.getElementById('scary-sound');

// Lista de mensagens assustadoras
const mensagens = [
    "Um Pau de um Negão de 2 metros atras de você...",
    "Você não está sozinho aqui...",
    "O silêncio é a mão do negão em ti...",
    "Correr não adianta...",
    "Eles vêm pela noite..."
];

// Muda a cor do título aleatoriamente a cada 1 segundo
setInterval(() => {
    const colors = ['#ff0000', '#880000', '#ff4444', '#aa0000', '#ff2222'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainTitle.style.color = randomColor;
}, 1000);

// Quando clicar no botão, mostra uma mensagem assustadora aleatória
scaryBtn.addEventListener('click', () => {
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    scaryMsg.textContent = msg;
});
// Toca o som automaticamente (se o navegador permitir)
window.addEventListener('DOMContentLoaded', () => {
    const scarySound = document.getElementById('scary-sound');
    
    // Tentar forçar a reprodução
    scarySound.play().catch(err => {
        console.warn('Som bloqueado pelo navegador até interação do usuário.', err);
    });
});