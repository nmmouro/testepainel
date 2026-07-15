import { get }
from "../services/api.js";

async function salvar() {

  const resultado =
    await get(
      "salvarLancamento",
      {
        nome:
          nome.value,

        veiculo:
          veiculo.value
      }
    );

}