const contadorGlobalElement = document.getElementById('contador-global');
const jogadoresOnlineElement = document.getElementById('jogadores-online');
const clicarBtn = document.getElementById('clicar-btn');

let contadorLocal = 0;
let jogadoresOnline = 1;

function atualizarInterface(novoContador, novosJogadores) {
    contadorGlobalElement.textContent = novoContador;
    jogadoresOnlineElement.textContent = novosJogadores;
}

clicarBtn.addEventListener('click', function() {
    contadorLocal++;
    
    const novoContador = contadorLocal; 
    const novosJogadores = Math.floor(Math.random() * 5) + 1; 
    atualizarInterface(novoContador, novosJogadores);
});


setInterval(() => {
    
    const novoContador = parseInt(contadorGlobalElement.textContent) + 1;
    const novosJogadores = Math.floor(Math.random() * 5) + 1;
    atualizarInterface(novoContador, novosJogadores);
}, 3000);