const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.map(numero => ({
  valor: numero,
  par: numero % 2 === 0
}));

console.log(resultado);
