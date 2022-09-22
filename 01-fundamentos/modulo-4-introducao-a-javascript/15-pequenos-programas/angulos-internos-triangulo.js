const primeiroAngulo = 100;
const segundoAngulo = 40;
const terceiroAngulo = -2;

const teste = primeiroAngulo + segundoAngulo + terceiroAngulo;

if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0) {
    console.log("erro, coloque todos os angulos positivos")

}else if (teste === 180 && primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo >0) {
 console.log('true')

}else{
    console.log('false')
}
