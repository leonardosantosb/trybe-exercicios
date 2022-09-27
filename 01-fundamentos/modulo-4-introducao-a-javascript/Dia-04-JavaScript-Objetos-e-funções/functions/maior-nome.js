function maiorNome (nomes){
    
    let maior = nomes[0];
    
    for (let index = 0; index < nomes.length; index += 1){
        if(nomes[index].length > maior.length){
            maior = nomes[index]
        }
    }
return console.log(maior)
}maiorNome (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
