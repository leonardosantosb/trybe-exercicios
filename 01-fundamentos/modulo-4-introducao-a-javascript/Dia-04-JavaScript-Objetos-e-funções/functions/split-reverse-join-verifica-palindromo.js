//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo (nome){
    let separandoEmArray = nome.split('');
    let revertendoArray = separandoEmArray.reverse();
    let desfazendoArray = revertendoArray.join('');

    if( nome == desfazendoArray){
        return console.log("true")
    }else {
        return console.log("false")
    }
}

verificaPalindromo('arara')
