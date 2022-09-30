//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor (inteiros){
    let menor = 0
    for (let index = 0; index < inteiros.length; index += 1){
        
        if (inteiros[menor] > inteiros[index]) {
            menor = index

        }
    }
    return console.log(menor)
}
menorValor([2, 4, 6, 7, 10, 0, -3])