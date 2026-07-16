import { get } from "../services/api.js";

const selectVeiculo =
  document.getElementById("veiculo");

async function carregarVeiculos() {

  const resultado =
    await get("listarVeiculos");

  console.log(resultado);

}

carregarVeiculos();