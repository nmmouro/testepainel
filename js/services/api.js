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

    return await resposta.json();

  }
  catch (erro) {

    console.error(erro);

    return {

      sucesso: false,

      erro: erro.message

    };

  }

}

export function get(
  acao,
  params = {}
) {

  return request(
    acao,
    params
  );

}

export function listarLancamentos() {

  return request(
    "listarLancamentos"
  );

}

export function listarTodosLancamentos() {

  return request(
    "listarTodosLancamentos"
  );

}

export function obterLancamento(id) {

  return request(
    "obterLancamento",
    { id }
  );

}

export function excluirLancamento(id) {

  return request(
    "excluirLancamento",
    { id }
  );

}

export function restaurarLancamento(id) {

  return request(
    "restaurarLancamento",
    { id }
  );

}
