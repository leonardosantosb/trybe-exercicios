const primeiroAngulo = 100;
const segundoAngulo = 40;
const terceiroAngulo = 40;

const teste = primeiroAngulo + segundoAngulo + terceiroAngulo;
const resultado = teste === 180;

if (resultado == 'true' && primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo >0) {
 console.log('true')
}
else if (resultado == 'false') {
    console.log('false')
}
else (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0)
    console.log("erro, coloque todos os angulos positivos")
