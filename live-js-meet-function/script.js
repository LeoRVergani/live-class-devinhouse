function calcularMediaNotas(nota1, nota2, nota3, nota4){
    var mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;
    return mediaNotas;
};

function executarFormulario (event) {
    event.preventDefault();
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var nota4 = parseFloat(document.getElementById('nota4').value);

    console.log(calcularMediaNotas(nota1, nota2, nota3, nota4).toFixed(2));
}

// Evento
document // document é o arquivo que recebe o script
.getElementById('calculadora') // pegar o elemento com id calculadora
.addEventListener('submit', executarFormulario);



/*
const display = document.getElementById('calculadora');

display.addEventListener('submit', e => {
    e.preventDefault();
console.log('entrei aqui');
}) */