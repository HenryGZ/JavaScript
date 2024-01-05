const numero = [1,2,3,4,5,6,7,8];

const [primeiroNumero, segundoNumero, ...resto] = numero; // ...resto = rest operator que pega o resto dos elementos do array
//o primeiro elemento do array vai ser atribuido a variavel primeiroNumero, o segundo elemento do array vai ser atribuido a variavel segundoNumero 
//e o resto dos elementos do array vai ser atribuido a variavel resto

console.log(primeiroNumero, segundoNumero);
console.log(resto);
