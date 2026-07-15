const URL =
    "https://script.google.com/macros/s/AKfycbw2rV5GaICVNmFn0i0P4RRwiCzzYbvRgpnwPjI7AIcS-uqhJg62bk3B0pKITChqZw-R0w/exec";

async function carregarOcorrencias() {

    try {

        const resposta =
            await fetch(
                `${URL}?acao=listarOcorrencias`
            );

        const dados =
            await resposta.json();

            console.log(dados);

        const tbody =
            document.querySelector(
                "#tabelaOcorrencias tbody"
            );

        tbody.innerHTML = "";

        const registros =
            dados.filter(item =>
                item.status?.toUpperCase() ===
                "EM ANDAMENTO"
            );

        document.getElementById(
            "totalRegistros"
        ).textContent = registros.length;

        registros.forEach(item => {

            
        
        const data = new Date(item.data);

        const dataFormatada =
        data.toLocaleDateString(
            "pt-BR",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

         const hora = new Date(item.hora);

         const horaFormatada =
          hora.toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

            const horarioInicial = item.horarioInicial
            ? new Date(item.horarioInicial)
            .toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
            )
            : "";

            const horarioFinal = item.horarioFinal
            ? new Date(item.horarioFinal)
            .toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
            )
            : "";
        
        
            tbody.innerHTML += `
                <tr>
                    
                    <td>${dataFormatada}</td>
                    <td>${horaFormatada}</td>
                    <td>${item.nome}</td>
                    <td>${item.veiculo}</td>
                    <td>${item.motivo}</td>
                    <td>${item.itinerario}</td>
                    <td>${item.horarioInicial || ""}</td>
                    <td>${item.kmInicial || ""}</td>
                    <td>${item.horarioFinal || ""}</td>
                    <td>${item.kmFinal || ""}</td>                    
                    <td>${item.distanciaPercorrida || ""}</td>
                    <td>${item.status}</td>

                    <td>
                       <button
                           class="btn-editar"
                           
                        onclick="editarRegistro('${item.id}')">
                        ✏️ Editar
                       </button>
                    </td>

                </tr>
            `;

        });

    } catch (erro) {

        console.error(
            "Erro ao carregar dados:",
            erro
        );

    }

}

function editarRegistro(id) {

    console.log("Editando:", id);

    window.location.href =
        `cadastro.html?id=${id}`;

}

function atualizarRelogio() {

    const agora = new Date();

    document.getElementById(
        "dataHora"
    ).textContent =
        agora.toLocaleString("pt-BR");

}



carregarOcorrencias();
atualizarRelogio();

setInterval(carregarOcorrencias, 10000);
setInterval(atualizarRelogio, 1000);