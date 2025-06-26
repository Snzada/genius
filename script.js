// Variáveis
const cores = ['verde', 'vermelho', 'amarelo', 'azul'];
const botoes = {
  verde: document.querySelector('.botão.verde'),
  vermelho: document.querySelector('.botão.vermelho'),
  amarelo: document.querySelector('.botão.amarelo'),
  azul: document.querySelector('.botão.azul')
};

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

// esconde créditos e mensagem de feedback
creditos.style.display = 'none';
mensagemEnviada.style.display = 'none';

// Mostrar créditos com toggle mostrar/esconder
btnCreditos.addEventListener('click', () => {
  if (creditos.style.display === 'none') {
    creditos.style.display = 'block';
    creditos.textContent = 'Feito por ';
  } else {
    creditos.style.display = 'none';
  }
});

// Enviar feedback
form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita enviar de verdade



  // Mostra mensagem de obrigado e limpa formulário
  mensagemEnviada.style.display = 'block';
  form.reset();
});

// Função para iniciar o jogo
function iniciarJogo() {
  podeJogar = true;
  rodada = 0;
  sequencia = [];
  sequenciaJogador = [];
  document.getElementById('ponto').textContent = '0';
  msg.textContent = 'Preparando a primeira rodada...';
  gerarSequencia();
}

// Função para gerar uma nova sequência
function gerarSequencia() {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  sequencia.push(corAleatoria);
  rodada++;
  mostrarSequencia();
}

// Função para mostrar a sequência ao jogador
function mostrarSequencia() {
  let i = 0;
  const intervalo = setInterval(() => {
    acionarBotao(sequencia[i]);
    i++;
    if (i === sequencia.length) {
      clearInterval(intervalo);
      msg.textContent = 'Sua vez! Repita a sequência.';
      sequenciaJogador = [];
      permitirJogada();
    }
  }, 1000);
}

// Função para permitir que o jogador clique nos botões
function permitirJogada() {
  Object.values(botoes).forEach(botao => {
    botao.addEventListener('click', verificarJogada);
  });
}

// Função para verificar a jogada do jogador
function verificarJogada(event) {
  const corClicada = event.target.classList[1];

  sequenciaJogador.push(corClicada);
  acionarBotao(corClicada);

  if (sequenciaJogador[sequenciaJogador.length - 1] !== sequencia[sequenciaJogador.length - 1]) {
    msg.textContent = 'Você errou! Tente novamente.';
    podeJogar = false;
    resetarJogo();
    return;
  }

  if (sequenciaJogador.length === sequencia.length) {
    msg.textContent = 'Você acertou! Preparando próxima rodada...';
    setTimeout(() => {
      document.getElementById('ponto').textContent = rodada;
      gerarSequencia();
    }, 1000);
  }
}

// Função para acionar o botão (efeito visual)
function acionarBotao(cor) {
  const botao = botoes[cor];
  botao.style.opacity = '0.6';
  setTimeout(() => {
    botao.style.opacity = '1';
  }, 300);
}

// Função para resetar o jogo
function resetarJogo() {
  setTimeout(() => {
    sequencia = [];
    sequenciaJogador = [];
    rodada = 0;
    document.getElementById('ponto').textContent = '0';
    msg.textContent = 'Jogo resetado! Clique em "INICIAR" para começar.';
  }, 1500);
}
