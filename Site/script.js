// Array de cores para o título
const colors = ['red','black', 'gree', 'green', 'blue', 'orange', 'purple', 'yellow'];
let colorIndex = 0;

// Função para mudar a cor do título
function changeTitleColor() {
    const title = document.getElementById('/title');
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// (1 segundo)
setInterval(changeTitleColor, 1000);
