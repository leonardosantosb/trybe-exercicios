//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array [0];
let menor = array [0];

for (let index = 0;index < array.length; index += 1){
  if(array[index] > maior){
   array[index] = maior
  }
}
for (let index = 0;index < array.length; index += 1){
    if (array[index] < menor){
        menor = array[index]
    }
}
console.log("A maior palavra é: " + maior)
console.log("A menor palavra é: " + menor)