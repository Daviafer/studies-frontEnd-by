function filtraPares(arr) {
  return arr.filter(callback);
}
function callback(item) {
  return item % 2 === 0;
//num ímpares
//return item % 2 !== 0;
}
const meuArray = [1,23, 13,41,30,2,6];
console.log(filtraPares(meuArray));
