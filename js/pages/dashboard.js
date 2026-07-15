import { get }
from "../services/api.js";

async function carregarOcorrencias() {

  const resultado =
    await get(
      "listarLancamentos"
    );

  if (!resultado.sucesso)
    return;

  renderizarCards(
    resultado.dados
  );

}

carregarOcorrencias();
