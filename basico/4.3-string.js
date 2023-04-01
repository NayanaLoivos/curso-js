//1. Como escrever string com scape
const str = 'Sou um "texto"';
const str2 = "Sou um \"texto\""; //uso do caracter scape
const str3 = 'Sou um \\"texto"'; // exibir scape literal
const str4 = `Sou um "texto"`;
console.log(str, str2, str3);

//2. String em JS são indexadas, isso quer dizer que cada carater possui um índice
            //0 1 2 3 4 5 6 7 8 9 10 11 12
const str5 = 'um texto';

//2.1. Formas de obter o index da string
console.log(str5[1]);
console.log(str5.charAt(1));

//2.2. Encontrar o index
console.log(str5.indexOf('um')); //começa a busca do início
console.log(str5.indexOf('o', 3)); //começa a busca do inpicio a partir do index 3
console.log(str5.lastIndexOf('texto')); //começa a buscar do fim
console.log(str5.lastIndexOf('o', 3)); //começa a buscar do fim a partir do index 3

//3. Concatenar string
console.log(str5.concat(' e cada carater meu possui um index!'));
console.log(str5 + ' e cada carater meu possui um index!');
console.log(`${str5} e cada carater meu possui um index!`);