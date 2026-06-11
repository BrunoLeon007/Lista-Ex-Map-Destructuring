const numeros = [10, 20, 30, 40];

const porcentagens = numeros.map((numero, indice, array) => {
  const total = array.reduce((soma, item) => soma + item, 0);
  return (numero / total) * 100;
});

console.log(porcentagens);
