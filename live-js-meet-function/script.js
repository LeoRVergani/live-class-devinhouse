function calcularMediaNotas(nota1, nota2, nota3, nota4){
    var mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;
    return mediaNotas;
};

document.getElementById('calculadora').addEventListener('submit', function (event) {
    event.preventDefault();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

});

/*
const display = document.getElementById('calculadora');

display.addEventListener('submit', e => {
    e.preventDefault();
console.log('entrei aqui');
}) */