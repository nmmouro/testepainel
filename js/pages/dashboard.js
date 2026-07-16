import {
  listarLancamentos,
  excluirLancamento
} from "../services/api.js";

console.log("Dashboard iniciado");

const cards = document.querySelector("#cards");

async function carregar() {

  const resultado =
    await listarLancamentos();

  console.log(resultado);

  if (!resultado.sucesso) {

    cards.innerHTML =
      `<p>${resultado.erro}</p>`;

    return;

  }

  renderizar(resultado.dados);

}