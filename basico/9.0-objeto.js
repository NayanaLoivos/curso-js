//1. Objeto literal
const pessoa1 = {
    nome: 'Nayana',
    sobrenome: 'Loivos',
    idade: 37
};
console.log(pessoa1.nome);

const pessoa2 = {
    nome: 'Bruno',
    sobrenome: 'Fernandez',
    idade: 32
};
console.log(pessoa2.nome);

//2. Criar função que cria objeto - função factury
function criaPessoa(nome, sobrenome, idade) { //parâmetros
    return {
        nome, //nome: nome
        sobrenome, //sobrenome: sobrenome
        idade //idade: idade
    };
}
const pessoa3 = criaPessoa('Gessica', 'Dias', 32); //argumentos - são valores passados aos parâmetros
console.log(pessoa3.nome);
const pessoa4 = criaPessoa('Maria', 'do Carmo', 53);
console.log(pessoa4.nome);

/*No return da função o JS já compreende que nome é para ser criado igual ao valor que será 
ao parâmetro nome  e assim por diante.*/

//3. Métodos dentro do objeto
const pessoa5 = {
    nome: 'Nayana',
    sobrenome: 'Loivos',
    idade: 37,

    saudar() {
        console.log(`Olá ${this.nome}`); //this referencia o objeto e qualquer atributo do objeto dentro de um método
    },
    incrementarIdade() {
        ++this.idade;
        console.log(`Idade: ${this.idade}`);
    }
};
pessoa5.saudar();
pessoa5.incrementarIdade();
pessoa5.incrementarIdade();