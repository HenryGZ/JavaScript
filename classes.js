class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    } // aqui eu estou criando um construtor para a classe Pessoa

    falar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    } // aqui eu estou criando um metodo para a classe Pessoa
}

function Pessoa2(nome, idade){
    this.nome = nome;
    this.idade = idade;
} // aqui eu estou criando uma função construtora para a classe Pessoa2

Pessoa2.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
} // aqui eu estou criando um metodo para a classe Pessoa2

const p1 = new Pessoa('João', 20); // aqui eu estou instanciando um objeto da classe Pessoa
p1.falar(); // aqui eu estou chamando o metodo falar do objeto p1

const p2 = new Pessoa2('João', 20); // aqui eu estou instanciando um objeto da classe Pessoa2
p2.falar(); // aqui eu estou chamando o metodo falar do objeto p2

//a diferencça entre uma classe e uma função construtora é que uma classe é uma forma diferente de escrever uma função construtora
