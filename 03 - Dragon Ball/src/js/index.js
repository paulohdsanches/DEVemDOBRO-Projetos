// Seleciona todos os botões de personagem
const botoes = document.querySelectorAll(".botao");

// Seleciona todos os elementos de personagem
const personagens = document.querySelectorAll(".personagem");

// Adiciona o evento de clique para cada botão
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desmarcarBotaoSelecionado();
    marcarBotaoComoSelecionado(botao);

    esconderPersonagemSelecionado();
    mostrarPersonagem(indice);
  });
});

/**
 * Remove a classe "selecionado" do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

/**
 * Adiciona a classe "selecionado" ao botão clicado
 * @param {HTMLElement} botao - O botão clicado
 */
function marcarBotaoComoSelecionado(botao) {
  botao.classList.add("selecionado");
}

/**
 * Remove a classe "selecionado" do personagem atualmente visível
 */
function esconderPersonagemSelecionado() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

/**
 * Adiciona a classe "selecionado" ao personagem correspondente ao botão clicado
 * @param {number} indice - O índice do personagem na lista
 */
function mostrarPersonagem(indice) {
  personagens[indice].classList.add("selecionado");
}
