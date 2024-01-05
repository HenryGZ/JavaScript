const _velocidade = Symbol('velocidade');

class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this[_velocidade] = 0;
    }

    get velocidade() {
        console.log('getter');
        return this[_velocidade];
    }//método getter para a propriedade _velocidade na classe Carro. 
    //Este método permitirá que você acesse o valor de _velocidade de fora da classe.

    set velocidade(valor) {
        console.log('setter');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }//método setter para a propriedade _velocidade na classe Carro.

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade] += 5;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade] -= 5;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 30; i++) {
    c1.acelerar(); //ativa o getter
    console.log(c1.velocidade);
}

c1.velocidade = 99; //ativa o setter

console.log('---------------------');
console.log(c1.velocidade);