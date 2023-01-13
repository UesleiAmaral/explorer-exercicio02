const Media = (primeiraNota, segundaNota, nome) => {
  const media = (Number(primeiraNota) + Number(segundaNota)) / 2;
  let msg = '';

  if (media >= 6) {
    msg = `Parabéns ${nome}! você foi aprovado!`;
  } else {
    msg = `Que pena ${nome}! estude mais da próxima!`;
  }

  return {
    media,
    msg,
  };
};

export const Resultado = (alunos) => {
  for (let i = 0; i < alunos.length; i++) {
    const { media, msg } = Media(
      alunos[i].primeiraNota,
      alunos[i].segundaNota,
      alunos[i].nome
    );

    alert(`${msg}! \n a média foi: ${media.toFixed(1)}`);
  }
};
