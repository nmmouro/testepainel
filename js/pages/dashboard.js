import { get }
from "../services/api.js";

const selectVeiculo =
  document.getElementById(
    "veiculo"
  );

async function carregarVeiculos() {

  const resultado =
    await get(
      "listarVeiculos"
    );

  if (
    !resultado.sucesso
  ) {

    return;

  }

  selectVeiculo.innerHTML =
    `<option value="">
      Selecione
    </option>`;

  resultado.dados.forEach(
    veiculo => {

      selectVeiculo.innerHTML += `

        <option value="${veiculo}">
          ${veiculo}
        </option>

      `;

    }
  );

}

carregarVeiculos();
