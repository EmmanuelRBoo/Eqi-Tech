import React from 'react';
import FormRight from './FormRight';
import '../styles/simulador.css';
import FormLeft from './FormLeft';
import Resultado from './Resultado';

function Simulador() {
  return (
    <div className="simulador">
      <form>
        <h2>Simulador</h2>
        <div className="forms">
          <FormLeft />
          <FormRight />
        </div>
      </form>
    <div className="result">
      <Resultado />
    </div>
    </div>
  );
}

export default Simulador;
