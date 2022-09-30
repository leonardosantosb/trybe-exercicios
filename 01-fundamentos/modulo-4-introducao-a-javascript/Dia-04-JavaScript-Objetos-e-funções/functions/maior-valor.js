//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.



function maiorValor (inteiros){
    let maior = 0
    for (let index = 0; index < inteiros.length; index += 1){
        
        if (inteiros[maior] < inteiros[index]) {
            maior = index

        }
    }
    return console.log(maior)
}
maiorValor([2, 3, 6, 7, 10, 1])