const configuracao = {
  tema: "escuro",
  idioma: "pt-BR",
  senha: "123456",
  notificacoes: true
};

const { senha, ...configuracaoPublica } = configuracao;

console.log(configuracaoPublica);
