frase('Nome', 'Final');
    /* function nomeDaFuncao (parametro) */
function frase(inicial, final){
  console.log(inicial, final);
}

/* -------------- função anônima -------------- */

const soma = function (a, b) {
  return a + b;
}
soma(1, 2);
soma(3, 5);

/* -------------- Função anônima auto invocável -------------- */
/* IIFE - Immediately Invoked Function Expression */
(
  function() {
    let name = "Um frase tal";
    return name;
  }
)();
/* ----- EXEMPLO */
(
  function(a,b) {
    return a + b;
  }
)(1,2);
/* ----- EXEMPLO */
const soma1 = (
  function () {
    return a + b;
  }
) (1,2);
console.log(soma1);

/* --------------Callbacks  -------------- 
Função passada como arqumento para outra função */

const calc = function (operacao, num1, num2) {
/* operacao é um parametro mas sendo a função p executar operacao */
  return operacao(num1, num2);
}
/* operacao soma */
const soma = function (num1, num2) {
  return num1 + num2;
}
/* operacao subtracao */
const subtracao = function (num1, num2) {
  return num1 - num2;
}
/* soma e subtracao = operacao do parametro da funcao */
const resultSoma = calc(soma, 1,2);
const resultSubtracao = calc(subtracao, 1, 2);

console.log(resultSoma);
console.log(resultSubtracao);

/* -------------- OBJETO arguments -------------- */
function findMax() {
  
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max ){
      max = arguments[i];
    }   
  }
  return max;
}

/* -------------- Arrays - Spreed --------------
Uma forma lidar separadamente com elementos */
/* o que era uma array se torna um elemento independente */
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

/* -------------- Arrays - Rest --------------
Combina os argumentos em um array */
/*  o que era um elemento independente, se torna parte de um array */
function confereTamanho(...args) {
  console.log(args.length);
}
confereTamanho();
confereTamanho(1,2);
confereTamanho(3,4,5);

/* -------------- Objetos - Object Destructuring -------------- 
Entre {} podemos filtrar apenas os dados que nos interessam no objeto */
const user = {
  id: 3,
  displayName: 'JDoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
/* pegando somente o id da constante */
function userId({id}) {
  return id;
}
/* alterando argumento do prmeiro nome e final */
function getFullName({fullName: {firstName:first, lastName:last}}) {
  return `${first} ${last}`;
}
userId(user);
getFullName(user);

/* -------------- IF e ELSE -------------- */

function numeroPositivo(numTal) {
  
  const ehNegativo = numTal < 0;
  const maiorQueDez = numTal > 10;
  
  if (ehNegativo) {
    return "Número negativo.";
    /* não é negativo e maior que 10 */
  } else if (!ehNegativo && maiorQueDez) {
    return "Número é positivo e maior que 10";
  }
  return "Esse número é positivo";
}
/* -------------- THIS  -------------- */
/* referencia de contexto. this refere-se ao objeto pessoa no exemplo */
/* sempre será o objeto global */
const pessoa = {
  firstName : "André",
  lastName  : "Soares",
  id        : 1,
  fullName  : function() {
    return this.firstName + " " + this.lastName;
  },
  getId: function() {
    return this.id;
  }
};
pessoa.fullName(); // André Soares
pessoa.getId();    // 1

/* CALL */
const pessoa = {
  nome: 'Nome Pessoa',
};
const animal = {
  nome: 'Nome Animal',
};
function pegarValor() {
  console.log(this.nome);
}
pegarValor.call(pessoa);

/* APPLY */
const pessoa2 = {
  nome = 'Nome Pessoa2',
};
const animal2 = {
  nome = 'Nome Animal',
};
function pegarValor2() {
  console.log(this.nome);
}
pegarValor2.apply(pessoa);

/* -------------- Arrow functions  -------------- */
/* normal */
const helloWord = function () {
  return "Hello World";
}
/* Arrow */
const helloWord = () => {
  return "Hello World";
}
/* Outra forma */
const helloWord = () => "HelloWorld";
