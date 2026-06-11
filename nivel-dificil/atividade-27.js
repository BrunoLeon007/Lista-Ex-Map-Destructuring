const clientes = [
  { nome: "Ana", endereco: { cidade: "Sao Paulo" } },
  { nome: "Joao", endereco: { cidade: "Curitiba" } }
];

const resultado = clientes.map(({ nome, endereco: { cidade } }) => ({
  nome,
  cidade
}));

console.log(resultado);
