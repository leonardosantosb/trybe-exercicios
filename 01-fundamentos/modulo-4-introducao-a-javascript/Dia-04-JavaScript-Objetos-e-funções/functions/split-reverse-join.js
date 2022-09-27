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
