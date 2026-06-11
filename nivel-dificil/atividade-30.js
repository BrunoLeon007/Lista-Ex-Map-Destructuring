class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

class Relatorio {
  gerar(usuarios) {
    return usuarios.map(({ nome, email }) => `${nome} - ${email}`);
  }
}

const usuarios = [
  new Usuario("Ana", "ana@email.com"),
  new Usuario("Joao", "joao@email.com")
];

const relatorio = new Relatorio();

console.log(relatorio.gerar(usuarios));
