const imgVisualizadaSelecionada = document.querySelector("#visualizacao img");
const tituloElemento = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imgMinhatura0 = document.querySelector('[for = "0-imagem"] img');
const imgMinhatura1 = document.querySelector('[for = "1-imagem"] img');
const imgMinhatura2 = document.querySelector('[for = "2-imagem"] img');

const opcoesNomesCores = [
  "Verde cipreste",
  "Azul inverno",
  "Meia noite",
  "Estelar",
  "Rosa claro",
];

const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name = "opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;

  nomeCorSelecionada.textContent = `Cor - ${opcoesNomesCores[numCorSelecionada]}`;

  imgMinhatura0.src = `./imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada]}/imagem-0.jpeg`;
  imgMinhatura1.src = `./imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada]}/imagem-1.jpeg`;
  imgMinhatura2.src = `./imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada]}/imagem-2.jpeg`;

  imgVisualizadaSelecionada.src = `./imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada]}/imagem-${numImagemSelecionada}.jpeg`;

  tituloElemento.textContent = `Pulseira loop esportiva ${opcoesNomesCores[numCorSelecionada]} para caixa de 45 mm`;
}

function selecionarImagem() {
  const opcaoImagemSelecionada = document
    .querySelector('[name = "opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imgVisualizadaSelecionada.src = `./imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada]}/imagem-${numImagemSelecionada}.jpeg`;
}

function atualizarTamanho() {
  const tamanhoSelecionado = document
    .querySelector('[name = "opcao-tamanho"]:checked')
    .id.charAt(0);
  numTamanhoSelecionado = tamanhoSelecionado;

  let imagemPrincipal = document.getElementById("imagemPrincipal");
  imagemPrincipal.classList.remove("tamanhomenor");

  if (numTamanhoSelecionado === "0") {
    imagemPrincipal.classList.add("tamanhomenor");
  }

  let text = numTamanhoSelecionado === "0" ? "41 mm" : "45 mm";

  tituloElemento.textContent = `Pulseira loop esportiva ${opcoesNomesCores[numCorSelecionada]} para caixa de ${text}`;
}
