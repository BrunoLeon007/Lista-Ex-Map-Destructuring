const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tenis", preco: 200 },
  { nome: "Bone", preco: 30 }
];

const comDesconto = produtos.map(produto => ({
  ...produto,
  preco: produto.preco * 0.9
}));

console.log(comDesconto);
