//Coleção de valores idexados por elemento

                //0        1         2         3
const nomes = ['Bruno', 'Nayana', 'Goofy', 'Gessica'];
console.debug(nomes[3]);

//1. Adicionar elemento no final
nomes[nomes.length] = 'Jhonny';
nomes[nomes.length] = 'Simone';
console.debug(nomes);

nomes.push('Fabio');
nomes.push('Dani');
console.debug(nomes);

//2. Altera qualquer elemento
nomes[1] = 'Nay';
console.debug(nomes);

//3. Adiciona elemento no início
nomes.unshift('Dario');
console.debug(nomes);

//4. Remove elemento do final
nomes.pop();
console.debug(nomes);

//5. Remove elemento do início
nomes.shift();
console.debug(nomes);

//6. deletar elemento sem alterar posição dos índices
delete nomes[3];
console.debug(nomes);

//7. Fatiando array
console.log(nomes.slice(0, 3));

console.log(nomes.slice(0, -1));

//8. Tipo do array
console.log(typeof nomes); //object

//9. Descobrir instância de array
console.log(nomes instanceof Array); //true