const chave = "nome";
const usuario = { nome: "Ana", idade: 25 };

const { [chave]: valor } = usuario;

console.log(valor);
