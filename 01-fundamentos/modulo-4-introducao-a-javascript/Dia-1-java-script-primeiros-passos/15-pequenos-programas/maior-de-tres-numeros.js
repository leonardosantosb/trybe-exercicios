const primeiroValor = 39;
const segundoValor = 31;
const terceiroValor = 39;

if (primeiroValor >= segundoValor && primeiroValor >= terceiroValor) {
    console.log("O maior número é: " + primeiroValor)
}
else if (segundoValor >= primeiroValor && segundoValor >= terceiroValor){
    console.log("O maior número é: " + segundoValor)
}
else if (terceiroValor >= primeiroValor && terceiroValor >= segundoValor){
    console.log("O maior número é: " + segundoValor)
}
else {
    console.log('Os números tem o mesmo valor')
}