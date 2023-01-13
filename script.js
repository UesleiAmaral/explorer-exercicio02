import { CriaAluno, DadosAlunos } from './module/Alunos.js ';
import { Resultado } from './module/Calculo.js';

let alunos = [];

while (confirm('Deseja continuar? ')) {
  const { nome, primeiraNota, segundaNota } = DadosAlunos();

  const aluno = CriaAluno(nome, primeiraNota, segundaNota);

  alunos.push(aluno);
}

Resultado(alunos);




