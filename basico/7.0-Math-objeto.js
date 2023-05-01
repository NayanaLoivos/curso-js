let num1 = 8.65873;

//1. Arredondamentos
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));

//2. Maior ou menor número da lista
console.log(Math.max(1, 2, 6, 7, -10, 3900, 8, 4, 0));
console.log(Math.min(1, 2, 6, 7, -10, 3900, 8, 4, 0));

//3. Gerar número aleatório entre 0 e <1
console.log(Math.random());

//3.1. Gerar numeros aleatório em dado intervalo
console.log(Math.random() * (10 - 5) + 5);
console.log(Math.round(Math.random() * (10 - 5) + 5));
