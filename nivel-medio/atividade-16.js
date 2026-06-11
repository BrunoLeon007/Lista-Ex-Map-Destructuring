const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Joao", idade: 22 },
  { nome: "Maria", idade: 18 }
];

const resultado = pessoas.map(pessoa => pessoa.idade < 18 ? "Menor" : "Maior");

console.log(resultado);
