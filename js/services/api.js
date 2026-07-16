import { CONFIG } from "../config.js";

async function request(
  acao,
  params = {}
) {

  try {

    const url =
      new URL(CONFIG.API_URL);

    url.searchParams.append(
      "acao",
      acao
    );

    Object.entries(params)
      .forEach(([key, value]) => {

        if (
          value !== undefined &&
          value !== null
        ) {

          url.searchParams.append(
            key,
            value
          );

        }

      });

    const resposta =
      await fetch(url);

    if (!resposta.ok) {

      throw new Error(
        `Erro HTTP ${resposta.status}`
      );

    }

    return await resposta.json();

  } catch (erro) {

    console.error(erro);

    return {

      sucesso: false,

      erro:
        erro.message ||
        "Erro ao comunicar com a API."

    };

  }

}

export async function get(
  acao,
  params = {}
) {

  return request(
    acao,
    params
  );

}