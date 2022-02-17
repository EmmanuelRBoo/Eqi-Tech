import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/form.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import Input from './Input';

const FormLeft = () => {
  const { 
    indicadores, 
    prazo,
    setPrazo,
    handleOptionsRendimento,
    aportes,
    handleAporteInicial,
    stylesRendimento,
    stylesBgRendimento
  } = useContext(Context);

  const nome = indicadores.ipca.nome;
  const valor = indicadores.ipca.valor;

  return (
    <section className="form-container">
      <div
        className="form-radio-container m" 
        onChange={ handleOptionsRendimento }
      >
        <div className="form-radio-title m">
          <p className="m">Rendimento</p>
          <div className="info-btn"
          // onMouseOver={() => }  
          >
            <AiOutlineInfoCircle size={20} />
          </div>
        </div>
          <div className="form-label-container m">
            <label
              htmlFor="bruto"
              className="form-label inicial" 
              style={stylesBgRendimento.bruto}
            >
              <div 
                style={stylesRendimento.bruto}
                className="form-icon"
              >
                <FaCheck 
                  color='white' 
                  size={12}
                />
              </div>
              <input
                className="form-radio"
                id="bruto"
                type="radio"
                name="rendimento" 
                value="bruto" 
              />
              Bruto
            </label>
            <label 
              htmlFor="liquido" 
              className="form-label final"
              style={stylesBgRendimento.liquido}
            >
              <div 
                className="form-icon"
                style={stylesRendimento.liquido}
              >
                <FaCheck 
                  color='white' 
                  size={12}
                />
              </div>
              <input 
                className="form-radio"
                id="liquido"
                type="radio"
                name="rendimento"
                value="liquido"
              />
              Líquido
            </label>
          </div>
      </div>
      <div className="form-inputs-container m">
        <label htmlFor="aporteInicial" className="m">
          <p className="m">Aportes</p>
          <Input
            value={aportes.inicial}
            onChange={handleAporteInicial}
            thousandSeparator={'.'}
            prefix={'R$ '}
            sufix={',00'}
          />
        </label>
        <label htmlFor="prazo" className="m">
          <p className="m">Prazo (em meses)</p>
          <Input
            name="prazo"
            onChange={(e) => setPrazo(e.target.value)}
            value={prazo}
            isAllowed={(value) => {
              const { formattedValue, floatValue } = value;
              return formattedValue === '' || floatValue <=  12;
            }}
          />
        </label>
        <label htmlFor="IPCA" className="m">
          <p className="m">{nome} (por ano)</p>
          <input
            type="text"
            value={valor + "%"}        
          />
        </label>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload(false)}
        className="form-btn-clear"
      >
        Limpar campos
      </button>
    </section>
  );
}

export default FormLeft;
