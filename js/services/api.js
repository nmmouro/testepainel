import { CONFIG } from "../config.js";

export async function get(acao, params = {}) {

  const url = new URL(CONFIG.API_URL);

  url.searchParams.append("acao", acao);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const resposta = await fetch(url);

  return resposta.json();
}

export async function post(params = {}) {

  const url = new URL(CONFIG.API_URL);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const resposta = await fetch(url);

  return resposta.json();
}