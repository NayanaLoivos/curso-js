//Permite efetuar cópia de dado

//1. Cópia com spread em array
let arr = [1, 2, 3];
let arr2 = arr //passado por referência
let arr3 = [...arr]; //cópia do dado de arr
console.log(arr, arr2, arr3);

arr3.push(4);
console.log(arr, arr2, arr3);

//2. Cópia com spread em object
const pessoa = {
    nome: 'Nayana',
    sobrenome: 'Loivos'
}

const copiaPessoa = {...pessoa};
console.log(pessoa, copiaPessoa);

copiaPessoa.nome = 'Nay';
console.log(pessoa, copiaPessoa);