function mostrarUsuario({ nome, email }) {
  return `${nome} - ${email}`;
}

const usuario = { nome: "Ana", email: "ana@email.com" };

console.log(mostrarUsuario(usuario));
