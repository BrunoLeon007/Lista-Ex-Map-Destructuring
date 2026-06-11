const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tenis", preco: 200 },
  { nome: "Bone", preco: 30 }
];

const frases = produtos.map(produto => `O produto ${produto.nome} custa R$ ${produto.preco}`);

console.log(frases);
