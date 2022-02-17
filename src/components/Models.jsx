import React from 'react';
import '../styles/models.css';

export const Rendimento = () => {
  return (
    <div className="models rendimento">
      <p>O <strong>rendimento bruto</strong> são os ganhos totais da aplicação, enquanto que o <strong>rendimento líquido</strong> é esse montante menos as taxas e impostos sobre ele.</p>
      <p> Portanto, mais importante do que saber o valor total dos ganhos é saber quanto será descontado.</p>
    </div>
  );
};

export const Indexacao = () => {
  return (
    <div className="models indexacao">
      <p>A diferença é que, enquanto o <strong>prefixado</strong> apresenta rentabilidade definida, o <strong>pós-fixado</strong> acompanha algum indicador.</p>
      <p>Assim, quem investe no primeiro grupo sabe como será seu rendimento previamente, enquanto quem investe no segundo, só conhecerá os resultados na data de vencimento</p>
    </div>
  )
};
