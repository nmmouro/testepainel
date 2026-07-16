import { get }
from "../services/api.js";

const selectNome =
  document.getElementById("nome");

const selectVeiculo =
  document.getElementById("veiculo");

async function carregarEmpregados() {

  const resultado =
    await get("listarEmpregados");

  if (!resultado.sucesso)
    return;

  selectNome.innerHTML = `
    <option value="">
      Selecione o empregado
    </option>
  `;

  resultado.dados.forEach(
    empregado => {

      selectNome.innerHTML += `
        <option value="${empregado.nome}">
          ${empregado.nome}
        </option>
      `;

    }
  );

}

async function carregarVeiculos() {

  const resultado =
    await get("listarVeiculos");

  if (!resultado.sucesso)
    return;

  selectVeiculo.innerHTML = `
    <option value="">
      Selecione o veículo
    </option>
  `;

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

async function inicializar() {

  try {

    await Promise.all([

      carregarEmpregados(),

      carregarVeiculos()

    ]);

    console.log(
      "Empregados e veículos carregados."
    );

  }
  catch (erro) {

    console.error(
      "Erro ao carregar dados:",
      erro
    );

  }

}

document.addEventListener(
  "DOMContentLoaded",
  inicializar
);
