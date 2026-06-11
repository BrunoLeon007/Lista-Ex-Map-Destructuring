const estoque = [
  { nome: "Camisa", preco: 50, quantidade: 3 },
  { nome: "Calca", preco: 100, quantidade: 2 }
];

const resultado = estoque.map(item => ({
  ...item,
  totalItem: item.preco * item.quantidade
}));

console.log(resultado);
