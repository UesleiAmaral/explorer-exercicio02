export const Media = (primeiraNota, segundaNota, nome) => {
  const media = (primeiraNota + segundaNota) / 2;
  const msg = '';

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
