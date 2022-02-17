import React, { useContext } from 'react';
import Context from '../context/Context';
import '../styles/form.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import Input from './Input';

const FormRight = () => {
  const { 
    indicadores, 
    rentabilidade, 
    setRentabilidade,
    handleOptionsIndexacao,
    aportes,
    handleAporteMensal,
    stylesIndexacao,
    stylesBgIndexacao,
    options,
    prazo,
    setPass,
  } = useContext(Context);

  const nome = indicadores.cdi.nome;
  const valor = indicadores.cdi.valor;
  const optR = options.rendimento;
  const optI = options.indexacao;
  const apI = aportes.inicial;
  const apM = aportes.mensal;
  const verificacoes = optR === '' || optI === '' || apI === '' || apM === '' || prazo === '' || rentabilidade === '';

  return (
    <section className="form-container">
      <div
        className="form-radio-container m" 
        onChange={ handleOptionsIndexacao }
      >
        <div className="form-radio-title m">
          <p className="m">Tipos de indexação</p>
          <div className="info-btn"
          // onMouseOver={() => }  
          >
            <AiOutlineInfoCircle size={20} />
          </div>
        </div>
          <div className="form-label-container m">
            <label
              htmlFor="pre"
              className="form-label-right inicial"
              style={stylesBgIndexacao.pre}
            >
              <div 
                className="form-icon"
                style={stylesIndexacao.pre}
              >
                <FaCheck 
                  color='white' 
                  size={12}
                />
              </div>
              <input
                className="form-radio"
                id="pre"
                type="radio"
                name="rendimento" 
                value="pre"
              />
              <p>PRÉ</p>
            </label>
            <label 
              htmlFor="pos" 
              className="form-label-right meio"
              style={stylesBgIndexacao.pos}
            >
              <div 
                className="form-icon"
              >
                <FaCheck 
                  color='white' 
                  size={12}
                  style={stylesIndexacao.pos}
                />
              </div>
              <input 
                className="form-radio"
                id="pos"
                type="radio"
                name="rendimento"
                value="pos"
              />
              <p>POS</p>
            </label>
            <label
              htmlFor="fixado"
              className="form-label-right final" 
              style={stylesBgIndexacao.fixado}
            >
              <div 
                className="form-icon"
                style={stylesIndexacao.fixado}
              >
                <FaCheck 
                  color='white' 
                  size={12}
                />
              </div>
              <input
                className="form-radio"
                id="fixado"
                type="radio"
                name="rendimento" 
                value="ipca"
              />
              <p>FIXADO</p>
            </label>
          </div>
      </div>
      <div className="form-inputs-container m">
        <label htmlFor="aporteMensal" className="m">
          <p className="m">Aporte Mensal</p>
          <Input
            value={aportes.mensal}
            onChange={handleAporteMensal}
            thousandSeparator={'.'}
            prefix={'R$ '}
            sufix={',00'}
          />
        </label>
        <label htmlFor="rentabilidade" className="m">
          <p className="m">Rentabilidade</p>
          <Input
            name="rentabilidade"
            onChange={(e) => setRentabilidade(e.target.value)}
            value={rentabilidade}
            sufix="%"
            isAllowed={(value) => {
              const { formattedValue, floatValue } = value;
              return formattedValue === '' || floatValue <=100;
            }}
          />
        </label>
        <label htmlFor="CDI" className="m">
          <p className="m">{nome} (por ano)</p>
          <input
            type="text"
            value={valor + "%"}        
          />
        </label>
      </div>
      <button
        type="button"
        disabled={verificacoes}
        onClick={() => setPass(true)}
        className="form-btn"
      >
        Simular
      </button>
    </section>
  );
}

export default FormRight;
