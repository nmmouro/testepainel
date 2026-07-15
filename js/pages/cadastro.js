import { post } from "../services/api.js";

async function salvar() {

  const dados = {
    nome: nome.value,
    veiculo: veiculo.value,
    motivo: motivo.value
  };

  const resultado = await post(dados);

  console.log(resultado);
}