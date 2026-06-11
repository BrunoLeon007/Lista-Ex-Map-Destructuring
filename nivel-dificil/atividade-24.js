const alunos = [
  { nome: "Ana", notas: [8, 9, 10] },
  { nome: "Joao", notas: [6, 7, 8] }
];

const resultado = alunos.map(({ nome, notas }) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;

  return { nome, media };
});

console.log(resultado);
