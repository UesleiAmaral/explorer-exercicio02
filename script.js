import { CriaAluno, DadosAlunos } from './module/Alunos.js ';
import { Media } from './module/Calculo.Calculo.js';

let alunos = [];

while (confirm('Deseja continuar? ')) {
  const { nome, primeiraNota, segundaNota } = DadosAlunos();

  const aluno = CriaAluno(nome, primeiraNota, segundaNota);

  alunos.push(aluno);
}

console.log(alunos);

for (let i = 0; i < alunos.length; i++) {
  const { media, msg } = Media(alunos[i].primeiraNota, alunos[i].segundaNota, alunos[i].nome);

  alert(`${msg}! \n a média foi ${media}`);
  
}
