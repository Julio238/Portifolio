function verificarEstacao() {
    let mes = prompt("Digite o nome de um mês (ex: Janeiro)").toUpperCase();
    let estacao = "";

    if (mes === "DEZEMBRO" || mes === "JANEIRO" || mes === "FEVEREIRO") {
        estacao = "VERÃO";
        document.body.style.backgroundColor === "#FFD54F"; 

    } else if (mes === "MARÇO" || mes === "ABRIL" || mes === "MAIO") {
        estacao = "OUTONO";
        document.body.style.backgroundColor = "#A1887F"; 


    } else if (mes === "JUNHO" || mes === "JULHO" || mes ==="AGOSTO") {
        estacao = "INVERNO";
        document.body.style.backgroundColor = "#90CAF9";


    } else if (mes = "SETEMBRO" || mes === "OUTUBRO" || mes === "NOVEMBRO") {
        estacao = "PRIMAVERA";
        document.body.style.backgroundColor = "#A5D6A7"; 


    } else {
        estacao = "Mês inválido. Por favor, digite corretamente.";
        document.body.style.backgroundColor = "white";
    }

    document.getElementById("resultado").innerText = estacao;
}