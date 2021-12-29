//verificando integridade da variável //
/*
// boolean //
var verdadeiroOuFalso = false;

// conferindo o tipo da variável e mostrando dados //
console.log(typeof(verdadeiroOuFalso));
console.log(verdadeiroOuFalso);

// número //
var numero = 1;
console.log(numero);
console.log(typeof(numero));

// string //
var nome = 'fulano';
console.log(nome);
console.log(typeof(nome));

var nomeInicial = 'Nome';
var nomeFinal = 'Final';
var nomeTotal = `Nome completo: ${nomeInicial} ${nomeFinal}`;
console.log(nomeTotal);

// função //
var funcao = function(){
  console.log(funcao);
  console.log(typeof(funcao));
};
*/
/*
// var (escopo global e local)  - let (escopo local)  - const //

var variavel = 'Beleza';
variavel = 1;
console.log(variavel);
let variavel2 = 'Beleza';
variavel2 = 1;
console.log(variavel2);

const constante = 'Beleza'; // escopo local, somente leitura, valor inicial obrigatório //
constante = 1;
console.log(constante);

// Escopo global //
var escopoGlobal = 'global';
console.log(escopoGlobal);

// Escopo local //
function escopoLocal(){
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}

//OUTRO EXEMPLO:  var , let
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11;   //alterando valor (será alterado)
  let b = 22;   //alterando valor (será alterado no escopo do if)

  console.log(a);   // valor será 11
  console.log(b);   // valor será 22
}
console.log(a);     // valor será 11
console.log(b);     //valor voltará a ser 2, está fora do if 


escopoLocal();
*/
/*
// atribuição //
var atribuicao = 'nome';
// comparação //
var comparacao = '0' == 0;
console.log(comparacao);
// identico //
var comparacaoIdentico = '0' === 0;
console.log(comparacaoIdentico);
*/