//Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

const specialFruit = ['abacate', 'banana', 'mamao'];

const additionalItens = ['uva', 'maça', 'pera'];

const fruitSalad = () => {
 const saladaDeFrutas = [...specialFruit, ...additionalItens,];
 return saladaDeFrutas;  
};

console.log(fruitSalad());