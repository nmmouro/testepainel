const URL =
"https://script.google.com/macros/s/AKfycbw2rV5GaICVNmFn0i0P4RRwiCzzYbvRgpnwPjI7AIcS-uqhJg62bk3B0pKITChqZw-R0w/exec";


const parametros =
    new URLSearchParams(
        window.location.search
    );

const idEdicao =
    parametros.get("id");
    console.log("ID recebido:", idEdicao);


// Preenche automaticamente o horário inicial
document.addEventListener("DOMContentLoaded", () => {

    const campoHorario =
        document.getElementById("horarioInicial");

    // Só preenche se estiver vazio
    if (!campoHorario.value) {

        const agora = new Date();

        const hora =
            String(agora.getHours()).padStart(2, "0");

        const minuto =
            String(agora.getMinutes()).padStart(2, "0");

        campoHorario.value =
            `${hora}:${minuto}`;
    }
});


// SUBMIT DO FORMULÁRIO
document
.getElementById("formulario")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const veiculo =
        document.getElementById("veiculo").value;

    const motivo =
        document.getElementById("motivo").value;

    const itinerario =
        document.getElementById("itinerario").value;

    const horarioInicial =
        document.getElementById("horarioInicial").value;

    // restante do seu código...
});






/* ===========================
   CARREGAR NOMES
=========================== */

async function carregarNomes() {
    try {

        const resposta =
            await fetch(`${URL}?acao=listarNomes`);

        const nomes =
            await resposta.json();

        const select =
            document.getElementById("nome");

        select.innerHTML =
            '<option value="">Selecione...</option>';

        nomes.forEach(nome => {

            const option =
                document.createElement("option");

            option.value = nome;
            option.textContent = nome;

            select.appendChild(option);

        });

    } catch (erro) {

        console.error(
            "Erro ao carregar nomes:",
            erro
        );

    }
}

/* ===========================
   CARREGAR VEÍCULOS
=========================== */

async function carregarVeiculos() {

    try {

        const resposta =
            await fetch(`${URL}?acao=listarVeiculos`);

        const veiculos =
            await resposta.json();

        const select =
            document.getElementById("veiculo");

        select.innerHTML =
            '<option value="">Selecione...</option>';

        veiculos.forEach(veiculo => {

            const option =
                document.createElement("option");

            option.value = veiculo;
            option.textContent = veiculo;

            select.appendChild(option);

        });

    } catch (erro) {

        console.error(
            "Erro ao carregar veículos:",
            erro
        );

    }
}

/* ===========================
   SALVAR FORMULÁRIO
=========================== */

document
.getElementById("formulario")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const veiculo =
        document.getElementById("veiculo").value;

    const motivo =
        document.getElementById("motivo").value;

    const itinerario =
        document.getElementById("itinerario").value;

    const horarioInicial =
        document.getElementById("horarioInicial").value;

    const kmInicial =
        document.getElementById("kmInicial").value;
    
    const horarioFinal =
        document.getElementById("horarioFinal").value;    
    
    const kmFinal =
        Number(
            document.getElementById("kmFinal").value
        ) || 0;    

    const distanciaPercorrida =
        document.getElementById("distanciaPercorrida").value;
            
        distanciaPercorrida > 0
            ? distanciaPercorrida
            : "";

    const status =
        document.getElementById("status").value;

    try {

        let url;

        if (idEdicao) {

            url =
                `${URL}?acao=atualizarLancamento`
                + `&id=${idEdicao}`
                + `&nome=${encodeURIComponent(nome)}`
                + `&veiculo=${encodeURIComponent(veiculo)}`
                + `&motivo=${encodeURIComponent(motivo)}`
                + `&itinerario=${encodeURIComponent(itinerario)}`
                + `&horarioInicial=${encodeURIComponent(horarioInicial)}`
                + `&kmInicial=${encodeURIComponent(kmInicial)}`
                + `&horarioFinal=${encodeURIComponent(horarioFinal)}`
                + `&kmFinal=${encodeURIComponent(kmFinal)}`                
                + `&distanciaPercorrida=${encodeURIComponent(distanciaPercorrida)}`
                + `&status=${encodeURIComponent(status)}`;

        } else {

            url =
                `${URL}?nome=${encodeURIComponent(nome)}`
                + `&veiculo=${encodeURIComponent(veiculo)}`
                + `&motivo=${encodeURIComponent(motivo)}`
                + `&itinerario=${encodeURIComponent(itinerario)}`
                + `&horarioInicial=${encodeURIComponent(horarioInicial)}`
                + `&kmInicial=${encodeURIComponent(kmInicial)}`
                + `&horarioFinal=${encodeURIComponent(horarioFinal)}`
                + `&kmFinal=${encodeURIComponent(kmFinal)}`                
                + `&distanciaPercorrida=${encodeURIComponent(distanciaPercorrida)}`
                + `&status=${encodeURIComponent(status)}`;

        }


const resposta =
    await fetch(url);

const resultado =
    await resposta.json();

    if (!resultado.sucesso) {

    alert(resultado.mensagem);

    return;

}

/*
        await fetch(url, {
            method: "GET",
            mode: "no-cors"
        });
*/
        const mensagem =
        document.getElementById("mensagem");

        mensagem.innerHTML =
        idEdicao
            ? "✅ Registro atualizado com sucesso"
            : "✅ Registro salvo com sucesso";

        /* Limpa todos os campos */
        e.target.reset();

        /* Se estiver editando, volta para o Dashboard */
        if (idEdicao) {

            setTimeout(() => {

         mensagem.innerHTML = "";

            window.location.href =
            "dashboard.html";

        }, 1500);

        } else {

        /* Novo cadastro */
        setTimeout(() => {

         mensagem.innerHTML = "";

        }, 1500);

        document
            .getElementById("nome")
            .focus();

}

    } catch (erro) {

        console.error(erro);

    }

});

async function carregarRegistroParaEdicao() {

    if (!idEdicao) return;

    try {

        const resposta =
            await fetch(
                `${URL}?acao=obterLancamento&id=${idEdicao}`
            );

        const registro =
            await resposta.json();

            console.log(registro);

        if (!registro.sucesso)
            return;

        document.getElementById("nome").value =
            registro.nome;

        document.getElementById("veiculo").value =
            registro.veiculo;

        document.getElementById("motivo").value =
            registro.motivo;

        document.getElementById("itinerario").value =
            registro.itinerario;

        document.getElementById("horarioInicial").value =
            registro.horarioInicial || "";

        document.getElementById("kmInicial").value =
            registro.kmInicial;

        document.getElementById("horarioFinal").value =
            registro.horarioFinal || "";        
        
        document.getElementById("kmFinal").value =
            registro.kmFinal;

        document.getElementById("distanciaPercorrida").value =
            registro.distanciaPercorrida || "";

        document.getElementById("status").value =
            registro.status || "";

        document.querySelector(
            "h1"
        ).textContent =
             "✏️ Editar Ocorrência";

const botao =
            document.querySelector(
                'button[type="submit"]'
            );

        if (botao) {

            botao.textContent =
                "Atualizar Registro";

        }



    } catch (erro) {

        console.error(
            "Erro ao carregar registro",
            erro
        );

    }

}

function excluirLancamento(e) {

  const id = e.parameter.id;

  const resultado =
    PlanilhaService.buscarPorId(
      CONFIG.ABAS.LANCAMENTOS,
      id
    );

  if (!resultado) {

    return respostaErro(
      "Registro não encontrado."
    );

  }

  PlanilhaService.getAba(
    CONFIG.ABAS.LANCAMENTOS
  )
  .getRange(
    resultado.linha,
    14
  )
  .setValue("EXCLUÍDO");

  return respostaJson({
    sucesso: true
  });

}







/* ===========================
   INICIALIZAÇÃO
=========================== */

async function inicializar() {

    await carregarNomes();

    await carregarVeiculos();

    await carregarRegistroParaEdicao();

}

inicializar();