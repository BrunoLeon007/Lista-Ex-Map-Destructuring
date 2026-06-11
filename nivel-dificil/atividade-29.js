const usuarios = [
  { nome: "Ana", telefone: "9999-9999" },
  { nome: "Joao" },
  { nome: "Maria", telefone: "8888-8888" }
];

const resultado = usuarios.map(({ nome, telefone = "Nao informado" }) => ({
  nome,
  telefone
}));

console.log(resultado);
