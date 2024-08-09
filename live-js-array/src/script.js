const usuario = {
  nome: "João",
  idade: 30,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}`
  },
  comer: function () {
    return `${this.nome} está comendo`
  }
};
console.log(usuario.saudacao());
console.log(usuario.comer());

const frutas = ["maçã", "banana", "laranaja"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);





