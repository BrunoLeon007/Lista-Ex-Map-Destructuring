const ids = [1, 2, 3];
const nomes = ["Ana", "Joao", "Maria"];

const usuarios = ids.map((id, indice) => ({
  id,
  nome: nomes[indice]
}));

console.log(usuarios);
