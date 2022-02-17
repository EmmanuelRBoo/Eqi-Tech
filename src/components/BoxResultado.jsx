import React, { useContext } from 'react';
import Context from '../context/Context';
import Input from '../components/Input';
import { Graph, GraphV} from './Chart';

const BoxResultado = () => {
  const {simulacao, options } = useContext(Context);
  const [res] = simulacao.filter((i) => i.tipoIndexacao === options.indexacao && i.tipoRendimento === options.rendimento);

  return (
    <div className="resultado-container">
      <h2>Resultado da Simulação</h2>
      <div className="box-container">
        <div className="box-one">
          <div className="box">
              <p>Valor Final Bruto</p>
              <Input 
                value={res.valorFinalBruto}
                type="text"
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
              />
          </div>
          <div className="box">
            <p>Alíquota do IR</p>
            <Input 
              value={res.aliquotaIR}
              type="text"
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              sufix="%"
            />
          </div>
          <div className="box">
            <p>Valor Pago em IR</p>
            <Input 
              value={res.valorPagoIR}
              type="text"
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
            />
          </div>
        </div>
        <div className="box-two">
        <div className="box">
          <p>Valor Final Liquido</p>
          <Input 
            value={res.valorFinalLiquido}
            type="text"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            style={{color: 'green'}}
          />
        </div>
        <div className="box">
          <p>Valor Total Investido</p>
          <Input 
            value={res.valorTotalInvestido}
            type="text"
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
          />
        </div>
          <div className="box">
            <p>Ganho Líquido</p>
            <Input 
              value={res.ganhoLiquido}
              type="text"
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              style={{color: 'green'}}
            />
          </div>
        </div>
      </div>
      <div className="grafico-container">
        <h4>Projeção de Valores</h4>
       <div className="g1">
        <GraphV />
       </div>
       <div className="g2">
        <Graph />
       </div>
      </div>
    </div>
  )
}

export default BoxResultado;
