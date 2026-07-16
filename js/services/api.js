import { CONFIG }
from "../config.js";

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
      .forEach(([k, v]) => {

        if (
          v !== undefined &&
          v !== null
        ) {
          url.searchParams.append(
            k,
            v
          );
        }

      });

    const response =
      await fetch(url);

    if (!response.ok) {

      throw new Error(
        `HTTP ${response.status}`
      );

    }

    return await response.json();

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

export function salvarLancamento(
  dados
) {

  return request(
    "salvarLancamento",
    dados
  );

}

export function atualizarLancamento(
  dados
) {

  return request(
    "atualizarLancamento",
    dados
  );

}

export function excluirLancamento(
  id
) {

  return request(
    "excluirLancamento",
    { id }
  );

}

export function restaurarLancamento(
  id
) {

  return request(
    "restaurarLancamento",
    { id }
  );

}