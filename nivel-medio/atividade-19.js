const dados = [
  { id: 1, nome: "Ana", idade: 25 },
  { id: 2, nome: "Joao", idade: 30 }
];

const simples = dados.map(({ id, nome }) => ({ id, nome }));

console.log(simples);
