function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}
const pessoa1 = {
  nome: 'Maria',
  idade: 30,
};
const pessoa2 = {
  nome: 'Julie',
  idade: 26,
};
const animal = {
  nome: 'Tótó',
  idade: 5,
};
/* pelo call . daqui a 10 anos */
console.log(calcularIdade.call(pessoa1, 10));

console.log(calcularIdade.apply(pessoa1, [10]));