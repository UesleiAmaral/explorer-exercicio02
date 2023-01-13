export const Media = (primeiraNota, segundaNota) => {
  const media = (primeiraNota + segundaNota) / 2;
  const msg = '';

  const aprovado = true;

  if (aprovado) {
    msg = 'Parabéns você foi aprovado!';
  } else {
    msg = 'Que pena! estude mais da próxima!';
  }

  return {
    media,
    msg,
  };
};
