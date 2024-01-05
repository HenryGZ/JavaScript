const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, sobrenome, idade} = pessoa; // aqui eu estou extraindo os atributos nome, sobrenome e idade do objeto pessoa para variaveis

console.log(pessoa); // aqui eu estou imprimindo o objeto pessoa
console.log(nome, sobrenome, idade); // aqui eu estou imprimindo os atributos nome, sobrenome e idade do objeto pessoa
console.log(nome) // aqui eu estou imprimindo o atributo nome do objeto pessoa
console.log(sobrenome) // aqui eu estou imprimindo o atributo sobrenome do objeto pessoa
console.log(idade) // aqui eu estou imprimindo o atributo idade do objeto pessoa

const{endereco: {logradouro, numero, cep}, endereco} = pessoa; // aqui eu estou extraindo os atributos logradouro, 
//numero e cep do objeto endereco do objeto pessoa para variaveis

console.log(endereco) // aqui eu estou imprimindo o atributo endereco do objeto pessoa