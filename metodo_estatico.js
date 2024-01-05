class controle{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }


    static trocaPilha(){
        console.log('Ok, vou trocar');
    }// a diferença é que o método estático não pode acessar o this, ou seja, ele não tem acesso aos dados do objeto
    //além de não precisar de objeto instanciado para ser chamado, apenas a classe
}

const c1 = new controle('LG');
c1.aumentarVolume();
console.log(c1);

controle.trocaPilha();