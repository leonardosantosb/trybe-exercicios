//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 10;
let limite = 1;


for (let index = fatorial; index >0; index -=1){
   limite *= index
}

console.log(limite)