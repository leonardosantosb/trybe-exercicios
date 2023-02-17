//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const name = names.find((nome) => nome.length === 5)
  return name;
};

console.log(findNameWithFiveLetters());