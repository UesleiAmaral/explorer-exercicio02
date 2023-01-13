import { CriaAluno, DadosAlunos } from './module/Alunos.js ';
import { Media } from './module/Calculo.Calculo.js'

let alunos = [];

while (confirm('Deseja continuar? ')) {
  const { nome, primeiraNota, segundaNota } = DadosAlunos();
  const { media, msg } = Media(primeiraNota, segundaNota);
  const aluno = CriaAluno(nome, primeiraNota, segundaNota, media);

  alunos.push(aluno);
}

console.log(alunos);

for (let i = 0; i < alunos.length; i++) {
  alert(`Parabéns ${alunos[i].nome} a sua media foi: ${alunos[i].media}`);
}
