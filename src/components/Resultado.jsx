import React, { useContext } from 'react';
import Context from '../context/Context';
import BoxResultado from './BoxResultado';
import '../styles/resultado.css';

const Resultado = () => {
  const { pass } = useContext(Context);

  const simularResultados = () => {
    if (pass === true) {
      return (
        <BoxResultado />
      );
    } else if (pass === false){
      return (
        <div>
        </div>
      )
    }
  }

  return (
    <section className="resultado">
      {simularResultados()}
    </section>
  );
}

export default Resultado;
