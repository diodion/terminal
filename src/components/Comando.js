import React from 'react';
import useDigitando from './../hooks/useDigitando';
import { executado } from './../data/Respostas';

const Comando = ({ enviado }) => {

  const linhas = executado[enviado];
  const digitando = useDigitando(linhas);

  return (
    <div className='resposta' dangerouslySetInnerHTML={{ __html: digitando }} />
  );
};

export default Comando;
