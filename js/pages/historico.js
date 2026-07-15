import { get }
from "../services/api.js";

const tabela =
  document.querySelector("#tabela");

async function carregar() {

  import {
  listarTodosLancamentos
}
from "../services/api.js";

const resultado =
  await listarTodosLancamentos();

  if (!resultado.sucesso) {

    tabela.innerHTML = `

      <tr>

        <td colspan="10">

          ${resultado.erro}

        </td>

      </tr>

    `;

    return;

  }

  renderizar(
    resultado.dados
  );

}

function renderizar(
  registros
) {

  tabela.innerHTML = "";

  registros.forEach(
    registro => {

      tabela.innerHTML += `

      <tr>

        <td>${registro.data}</td>

        <td>${registro.nome}</td>

        <td>${registro.veiculo}</td>

        <td>${registro.motivo}</td>

        <td>${registro.kmInicial}</td>

        <td>${registro.kmFinal}</td>

        <td>${registro.distancia}</td>

        <td>${registro.status}</td>

        <td>${registro.situacao}</td>

        <td>

          <button
            class="btn-editar"
            onclick="editar('${registro.id}')">

            Editar

          </button>

          ${
            registro.situacao === "ATIVO"

            ? `

              <button
                class="btn-excluir"
                onclick="excluirRegistro('${registro.id}')">

                Excluir

              </button>

            `

            : `

              <button
                class="btn-restaurar"
                onclick="restaurarRegistro('${registro.id}')">

                Restaurar

              </button>

            `
          }

        </td>

      </tr>

      `;

    });

}

window.editar = function(id) {

  location.href =
    `cadastro.html?id=${id}`;

};

window.excluirRegistro =
async function(id) {

  if (
    !confirm(
      "Deseja excluir?"
    )
  ) return;

  await get(
    "excluirLancamento",
    { id }
  );

  carregar();

};

window.restaurarRegistro =
async function(id) {

  await get(
    "restaurarLancamento",
    { id }
  );

  carregar();

};

carregar();
