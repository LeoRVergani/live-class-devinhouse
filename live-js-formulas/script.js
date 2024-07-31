function calcularPerimetro (ladoA, ladoB, ladoC){
    var perimetro = ladoA + ladoB + ladoC;
    return perimetro;
}

function processarFormulario(event){
    event.preventDefault();

    var ladoA = parseFloat(document.getElementById('ladoa').value);
    var ladoB = parseFloat(document.getElementById('ladob').value);
    var ladoC = parseFloat(document.getElementById('ladoc').value);

    var resultadoCalculo = calcularPerimetro(ladoA, ladoB, ladoC);

    document.getElementById('resultado').style.backgroundColor = 'black';
    document.getElementById('resultado').innerText = ("O resultado é: " + resultadoCalculo.toFixed(2).toString().replace(".",","));
}

document.getElementById('formPerimetro').addEventListener('submit', processarFormulario );