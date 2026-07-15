import {
  salvarLancamento
}
from "../services/api.js";

const resultado =
  await salvarLancamento({

    nome,
    veiculo,
    motivo,
    itinerario,

    horarioInicial,
    kmInicial,

    horarioFinal,
    kmFinal

  });