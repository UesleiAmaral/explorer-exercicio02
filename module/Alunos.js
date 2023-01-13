export const CriaAluno = (nome, primeiraNota, segundaNota, media) => {
  const aluno = {
    nome: nome,
    primeiraNota: primeiraNota,
    segundaNota: segundaNota,
    media: media,
  };

  return aluno;
};

export const DadosAlunos = () => {
  const nome = prompt('Digite o nome: ');
  const primeiraNota = prompt('Digite a primeira nota: ');
  const segundaNota = prompt('Digite a segunda nota: ');

  return {
    nome,
    primeiraNota,
    segundaNota,
  };
};
