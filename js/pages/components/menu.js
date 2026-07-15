document.addEventListener("DOMContentLoaded", () => {

    const btnCadastro = document.getElementById("btnCadastro");
    const btnDashboard = document.getElementById("btnDashboard");

    // Abrir Cadastro
    if (btnCadastro) {
        btnCadastro.addEventListener("click", () => {
            window.location.href = "cadastro.html";
        });
    }

    // Abrir Dashboard
    if (btnDashboard) {
        btnDashboard.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    }

});