import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Context from './Context';

function Provider({ children }) {
  const [prazo, setPrazo] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');
  const [simulacao, setSimulacao] = useState();
  const [aportes, setAportes] = useState({
    inicial: '',
    mensal: '',
  });
  const [indicadores, setIndicadores] = useState({
    cdi: {},
    ipca: {},
  });
  const [controller, isCtrl] = useState(false);
  const [options, setOptions] = useState({
    rendimento: '',
    indexacao: '',
  });
  const [stylesRendimento, setStylesRendimento] = useState({
    bruto: {
      display: 'none',
    },
    liquido: {
      display: 'none',
    }
  });
  const [stylesBgRendimento, setBgRendimento] = useState({
    bruto: {
      backgroundColor: 'transparent',
    },
    liquido: {
      backgroundColor: 'transparent',
    }
  });
  const [stylesIndexacao, setStylesIndexacao] = useState({
    pre: {
      display: 'none',
    },
    pos: {
      display: 'none',
    },
    fixado: {
      display: 'none',
    }
  });
  const [stylesBgIndexacao, setStylesBgIndexacao] = useState({
    pre: {
      backgroundColor: 'transparent',
    },
    pos: {
      backgroundColor: 'transparent',
    },
    fixado: {
      backgroundColor: 'transparent',
    }
  });

  const handleAporteInicial = (e) => {
    setAportes((prevState) => ({
      inicial:e.target.value,
      mensal: prevState.mensal,
    }));
  };

  const handleAporteMensal = (e) => {
    setAportes((prevState) => ({
      inicial: prevState.inicial,
      mensal: e.target.value,
    }));
  };

  const handleOptionsRendimento = (e) => {
    setOptions((prevState) => ({
      indexacao: prevState.indexacao,
      rendimento: e.target.value,
    }));
  };

  const handleOptionsIndexacao = (e) => {
    setOptions((prevState) => ({
      indexacao: e.target.value,
      rendimento: prevState.rendimento,
    }));
  };

  const changeRadioButtomRendimento = () => {
    if (options.rendimento === 'bruto') {
      setStylesRendimento({
        bruto: {
          display: 'flex',
        },
        liquido: {
          display: 'none',
        }
      });
      setBgRendimento({
        bruto: {
          backgroundColor: '#ff751f',
        },
        liquido: {
          backgroundColor: 'transparent',
        }
      });
    } else if (options.rendimento === 'liquido') {
      setStylesRendimento({
        bruto: {
          backgroundColor: 'transparent',
          display: 'none',
        },
        liquido: {
          backgroundColor: '#ff751f',
          display: 'flex',
        }
      });
      setBgRendimento({
        bruto: {
          backgroundColor: 'transparent',
        },
        liquido: {
          backgroundColor: '#ff751f',
        }
      });
    }
  };

  const chandoRadioButtomIndexacao = () => {
    if (options.indexacao === 'pre') {
      setStylesIndexacao({
        pre: {
          display: 'flex',
        },
        pos: {
          display: 'none',
        },
        fixado: {
          display: 'none',
        }
      });
      setStylesBgIndexacao({
        pre: {
          backgroundColor: '#ff751f',
        },
        pos: {
          backgroundColor: 'transparent',
        },
        fixado: {
          backgroundColor: 'transparent',
        }
      });
    } else if (options.indexacao === 'pos') {
        setStylesIndexacao({
          pre: {
            display: 'none',
          },
          pos: {
            display: 'flex',
          },
          fixado: {
            display: 'none',
          }
        });
        setStylesBgIndexacao({
          pre: {
            backgroundColor: 'transparent',
          },
          pos: {
            backgroundColor: '#ff751f',
          },
          fixado: {
            backgroundColor: 'transparent',
          }
        });
    } else if (options.indexacao === 'ipca') {
        setStylesIndexacao({
          pre: {
            display: 'none',
          },
          pos: {
            display: 'none',
          },
          fixado: {
            display: 'flex',
          }
        });
        setStylesBgIndexacao({
          pre: {
            backgroundColor: 'transparent',
          },
          pos: {
            backgroundColor: 'transparent',
          },
          fixado: {
            backgroundColor: '#ff751f',
          }
        });
    }
  };

  const [pass, setPass] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/indicadores').then((response) => {
      setIndicadores({ cdi: response.data[0], ipca: response.data[1] });
      isCtrl(true);
    });
    axios.get('http://localhost:3000/simulacoes').then((response) => {
     setSimulacao(response.data);
  });
    changeRadioButtomRendimento();
    chandoRadioButtomIndexacao();
  // eslint-disable-next-line  
  },[controller, options]);

  const value = {
    indicadores,
    options,
    aportes,
    prazo,
    stylesRendimento,
    stylesIndexacao,
    stylesBgRendimento,
    stylesBgIndexacao,
    rentabilidade,
    simulacao,
    pass,
    setRentabilidade,
    setPrazo,
    setAportes,
    setOptions,
    setPass,
    handleOptionsRendimento,
    handleOptionsIndexacao,
    handleAporteInicial,
    handleAporteMensal,
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
