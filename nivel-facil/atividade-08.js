const cidades = [
  { nome: "Sao Paulo", populacao: 12000000 },
  { nome: "Rio de Janeiro", populacao: 6000000 },
  { nome: "Curitiba", populacao: 1900000 }
];

const nomesDasCidades = cidades.map(cidade => cidade.nome);

console.log(nomesDasCidades);
