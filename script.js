function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);
    let porcentagem = parseFloat(document.getElementById("porcentagem").value);

    if (!isNaN(valor) && !isNaN(porcentagem)) {
        let resultado = (valor * porcentagem) / 100;
        document.getElementById("resultado").textContent = resultado.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Erro! Insira valores válidos.";
    }
}
