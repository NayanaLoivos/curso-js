//1. Como escrever string com scape
const str = 'Sou um "texto"';
const str2 = "Sou um \"texto\""; //uso do caracter scape
const str3 = 'Sou um \\"texto"'; // exibir scape literal
const str4 = `Sou um "texto"`;
console.log(str, str2, str3);

//2. String em JS são indexadas, isso quer dizer que cada carater possui um índice
            //0 1 2 3 4 5 6 7 8
const str5 = 'um texto';

//2.1. Formas de obter o index da string
console.log(str5[1]);
console.log(str5.charAt(1));

//2.2. Encontrar o index
console.log(str5.indexOf('um')); //começa a busca do início
console.log(str5.indexOf('o', 3)); //começa a busca do inicio a partir do index 3 para o fim
console.log(str5.lastIndexOf('texto')); //começa a buscar do fim
console.log(str5.lastIndexOf('o', 3)); //começa a buscar do fim a partir do index 3 para o início

//3. Concatenar string
console.log(str5.concat(' e cada carater meu possui um index!'));
console.log(str5 + ' e cada carater meu possui um index!');
console.log(`${str5} e cada carater meu possui um index!`);

//4. Busca por expressões regulares
console.log(str5.match(/[a-z]/g)) //a flag 'g' retorna a configuração em array 
console.log(str5.search(/t/g)) //similar ao indexOf, porém aceita expressão regular

//5. Substituir uma letra ou palavra
console.log(str5.replace('um texto', 'uma string'))
console.log(str5.replace(/t/, '#')) //substitui só o primeiro 't' encontrado
console.log(str5.replace(/t/g, '#')) //substitui todos os 't' encontrados

//6.Tamanho da string
console.log(str5.length); //espaços também são contados como caracteres, espaços também ocupam lugar.

//PS: Não confuda a quantidade de caracteres com a posição dos indíces.

//7. Fatiando a string
console.log(str5.slice(3, 7)); //posição de inicio e de fim + 1
console.log(str5.slice(-3));  
console.log(str5.length -3); //Tecnicamente o resultado seria o mesmo que dizer slice(-3)
console.log(str5.slice(5));

//PS: Quando usamos número negativo em uma string estamos pegando o tamanho real da string (length)
        // menos a quantidade do número negativo. Ou seja, o -3 acima está começando do 5 e indo até o final:
console.log(str5.slice(-3, str5.length -1));
console.log(str5.slice(5, -1)); //mesma coisa
console.log(str5.substring(str5.length -5, str5.length -1)); //mesma coisa

//8. Dividir uma string
console.log(str5.split('t'));
console.log(str5.split('t', 1));