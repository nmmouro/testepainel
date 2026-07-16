import { get } from "../services/api.js";


const selectNome =
  document.getElementById(
    "nome"
  );

async function carregarEmpregados() {

  const resultado =
    await get(
      "listarEmpregados"
    );


const selectVeiculo =
  document.getElementById("veiculo");

async function carregarVeiculos() {

  const resultado =
    await get("listarVeiculos");

  console.log(resultado);

}

carregarVeiculos();


  ///carrega empregdos e veículos juntos

/*
  async function inicializar() {

  await carregarEmpregados();

  await carregarVeiculos();

}

inicializar();
  */
