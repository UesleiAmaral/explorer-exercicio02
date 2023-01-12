export const Aluno = {
  nome: '',
  primeiraNota: 0,
  segundaNota: 0,

  criaAluno(nome, primeiraNota, segundaNota) {
    Aluno.nome = nome;
    Aluno.primeiraNota = primeiraNota;
    Aluno.segundaNota = segundaNota;

    return Aluno;
  },
};
