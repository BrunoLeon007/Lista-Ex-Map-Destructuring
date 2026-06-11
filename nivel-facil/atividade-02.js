const nomes = ["ana", "joao", "maria"];

const nomesComMaiuscula = nomes.map(nome => nome[0].toUpperCase() + nome.slice(1));

console.log(nomesComMaiuscula);
