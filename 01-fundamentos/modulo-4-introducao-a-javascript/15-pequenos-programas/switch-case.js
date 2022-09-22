let nomePeca = 'bispo'; 

switch (nomePeca.toLowerCase()) {
    case 'rei':
      console.log( nomePeca + ' -> Uma casa apenas para qualquer direção.');
      break;
    case 'bispo':
      console.log(nomePeca + ' -> Diagonal.');
      break;
    case 'rainha':
      console.log(nomePeca + ' -> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log(nomePeca + '  -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log(nomePeca + '  -> Horizontal e vertical.');
      break;
    case 'peão':
      console.log(nomePeca + '  -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
      break;
    default:
      console.log('Erro, peça inválida!');
      break;
};
  

