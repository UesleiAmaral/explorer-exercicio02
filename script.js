import { CriaAluno, DadosAlunos } from './module/Alunos.js ';

let alunos = [];

while (confirm('Deseja continuar? ')) {
  const { nome, primeiraNota, segundaNota } = DadosAlunos();

  const aluno = CriaAluno(nome, primeiraNota, segundaNota);

  alunos.push(aluno);
}

console.log(alunos);
