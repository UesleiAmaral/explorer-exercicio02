export let alunos = [];

export const CriaAluno = () => {
const Aluno = {
  nome: '',
  primeiraNota: 0,
  segundaNota: 0,
};

  while (confirm('Deseja continuar?')) {
    const nome = prompt('Digite o nome: ');
    const primeiraNota = prompt('Digite a primeira nota: ');
    const segundaNota = prompt('Digite a segunda nota: ');

    Aluno.nome = nome;
    Aluno.primeiraNota = primeiraNota;
    Aluno.segundaNota = segundaNota;

    if (alunos == undefined) {
      alunos.push(Aluno);
    } else {
      alunos.push(Aluno);
    }
  }
  return console.log(alunos);
};
