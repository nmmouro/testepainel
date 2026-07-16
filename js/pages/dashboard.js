import { get }
from "../services/api.js";


console.log("Dashboard iniciado");

const cards =
  document.querySelector("#cards");

async function carregar() {


  const resultado =
  await listarLancamentos();

console.log(resultado);

  import {
  listarLancamentos
}
from "../services/api.js";

const resultado =
  await listarLancamentos();

  if (!resultado.sucesso) {

    cards.innerHTML = `
      <p>
        ${resultado.erro}
      </p>
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

  cards.innerHTML = "";

  if (
    registros.length === 0
  ) {

    cards.innerHTML =
      "<p>Nenhuma ocorrência em andamento.</p>";

    return;

  }

  registros.forEach(
    registro => {

      cards.innerHTML += `

      <div class="card">

        <h3>
          ${registro.veiculo}
        </h3>

        <p>

          <strong>
            Motorista:
          </strong>

          ${registro.nome}

        </p>

        <p>

          <strong>
            Motivo:
          </strong>

          ${registro.motivo}

        </p>

        <p>

          <strong>
            KM Inicial:
          </strong>

          ${registro.kmInicial}

        </p>

        <p>

          <strong>
            Status:
          </strong>

          ${registro.status}

        </p>

        <div class="acoes">

          <button
            class="btn-editar"
            onclick="
              editar('${registro.id}')
            ">
            Editar
          </button>

          <button
            class="btn-excluir"
            onclick="
              excluirRegistro('${registro.id}')
            ">
            Excluir
          </button>

        </div>

      </div>

      `;

    });

}

window.editar = function(id) {

  location.href =
    `cadastro.html?id=${id}`;

};

window.excluirRegistro =
async function(id) {

  const confirmar =
    confirm(
      "Excluir registro?"
    );

  if (!confirmar)
    return;

  const resultado =
    await get(
      "excluirLancamento",
      { id }
    );

  alert(
    resultado.mensagem
  );

  carregar();

};

carregar();