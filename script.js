// Variáveis
const cores = ['verde', 'vermelho', 'amarelo', 'azul'];
const botoes = {
  verde: document.querySelector('.botão.verde'),
  vermelho: document.querySelector('.botão.vermelho'),
  amarelo: document.querySelector('.botão.amarelo'),
  azul: document.querySelector('.botão.azul')
}

const btnStart = document.getElementById('btnStart');
const btnCreditos = document.getElementById('btnCreditos');
const btnReset = document.getElementById('btnReset');

const creditos = document.getElementById('creditos');
const msg = document.getElementById('msg');

const form = document.getElementById('feedbackForm');
const mensagemEnviada = document.getElementById('mensagem-enviada');

let sequencia = [];
let sequenciaJogador = [];
let rodada = 0;
let podeJogar = false;

//esconde créditos e mensagem de feedback
creditos.style.display = 'none';
mensagemEnviada.style.display = 'none';

//Mostrar créditos com toggle mostrar/esconder
btnCreditos.addEventListener('click', () => {
  if (creditos.style.display === 'none') {
    creditos.style.display = 'block';
    creditos.textContent = 'Feito por ';
  } else {
    creditos.style.display = 'none';
  }
});

//Inicio
btnStart.addEventListener('click', () => {
  msg.textContent = 'Jogo iniciado! Boa sorte!';
});

//Resetar (limpa mensagens e pontos)
btnReset.addEventListener('click', () => {
  msg.textContent = '';
  creditos.style.display = 'none';
  mensagemEnviada.style.display = 'none';
  document.getElementById('ponto').textContent = '0';
});

// Envia feedback
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita enviar de verdade


  // Mostra mensagem de obrigado e limpa formulário
  mensagemEnviada.style.display = 'block';
  form.reset();
});
