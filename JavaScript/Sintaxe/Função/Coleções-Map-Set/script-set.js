/* Estruturas que armazenam apenas valores únicos */
/* no lugar de lenght, consulta-se o número de registros pela propriedade size
não possui métodos map, filter, reduce */
/* métodos */
const mySet = new Set()

mySet.add(1);
mySet.add(5);
/* ver valor */
mySet.has(1)
mySet.has(3)
/*  */
mySet.delete(5);

/* Valores únicos */
const meuArray = [30, 30, 2, 6, 54, 54, 8, 9, 9];
function valoresUnicos(arr) {
  const mySet = new Set(arr);
  /* retornando forma de array */
  return [...mySet];
  /* retornando em set */
  //return[mySet];
}
console.log(valoresUnicos(meuArray));
