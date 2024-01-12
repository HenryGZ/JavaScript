class ValidaCPF {
    constructor(cpfEnviado) {
        //Object.defineProperty define uma propriedade de um objeto
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,//não permite que a propriedade seja alterada
            enumerable: true,//permite que a propriedade seja listada
            configurable: false,//não permite que a propriedade seja reconfigurada
            value: cpfEnviado.replace(/\D+/g, '') //remove todos os caracteres que não são numeros
        });
    }

    isSequencia() { //verifica se o cpf é uma sequencia de numeros iguais
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; 
    }

    criaDigito(cpfParcial) { //cria o digito verificador
        //o digito verificador é o 10º e 11º dígito do cpf

        const cpfArray = Array.from(cpfParcial); //transforma a string em array
        let regressivo = cpfArray.length + 1; //inicia o regressivo com o tamanho do array + 1

        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val)); //multiplica o valor pelo regressivo
            regressivo--;//decrementa o regressivo
            return ac;
        }, 0); //soma todos os valores do array multiplicados pelo regressivo

        const digito = 11 - (total % 11); //o digito é o resultado da subtração de 11 pelo resto da divisão do total por 11
        return digito > 9 ? '0' : String(digito);//se o digito for maior que 9, retorna 0, senão retorna o digito
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false; //verifica se o cpfLimpo foi definido
        if(this.cpfLimpo.length !== 11) return false; //verifica se o cpfLimpo tem 11 caracteres
        if(this.isSequencia()) return false; //verifica se o cpfLimpo é uma sequencia de numeros iguais

        const cpfParcial = this.cpfLimpo.slice(0, -2); //pega os 9 primeiros digitos do cpf
        const digito1 = this.criaDigito(cpfParcial); //cria o primeiro digito verificador
        const digito2 = this.criaDigito(cpfParcial + digito1); //cria o segundo digito verificador

        const cpfVerificador = cpfParcial + digito1 + digito2; ///cria o novo cpf com os digitos verificadores

        return cpfVerificador === this.cpfLimpo; //retorna true se o novo cpf for igual ao cpfLimpo
    }
}

