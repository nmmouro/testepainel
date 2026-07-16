import {
  listarTodosLancamentos,
  excluirLancamento,
  restaurarLancamento
}
from "../services/api.js";

const tabela =
  document.querySelector("#tabela");

async function carregar() {

  const resultado =
    await listarTodosLancamentos();

  if (!resultado.sucesso) {

    tabela.innerHTML =
      `<tr>
        <td colspan="10">
          ${resultado.erro}
        </td>
      </tr>`;

    return;

  }

  renderizar(resultado.dados);

}