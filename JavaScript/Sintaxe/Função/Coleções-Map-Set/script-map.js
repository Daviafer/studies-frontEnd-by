/* Coleção arrays formato [chave, valor]; */
/* Podem ter chaves de qualquer tipo;
  Possuem length;
  Tem o mesmo tipo */

/* métodos */

const myMap = new Map()
/* apple recebe fruit  - setando chave e valor*/
myMap.set('apple', 'fruit');
/* fruit */
myMap.get('apple');

myMap.delete('apple')

/* Retornando somente os ADMIN */
function getAdmins(map) {
  let admins = [];
  for ([key, value] of map){
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Rei', 'Admin');
usuarios.set('Lof', 'User');
usuarios.set('Hig', 'Admin');

console.log(getAdmins(usuarios));