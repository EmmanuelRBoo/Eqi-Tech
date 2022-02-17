import React, { useContext } from 'react';
import Context from '../context/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export const GraphV = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { simulacao, options } = useContext(Context);
  const [res] = simulacao.filter((i) => i.tipoIndexacao === options.indexacao && i.tipoRendimento === options.rendimento);
  const comAporte = res.graficoValores.comAporte;
  const semAporte = res.graficoValores.semAporte;

  const opt = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom',
      },
    },
    responsive: true,
    scales: {
      x: {
        grid:{
          color: 'transparent'
        },
        title: {
          display: true,
          text: 'Tempo (em meses)'
        }
      },
      y: {
        grid:{
          color: 'transparent'
        },
        title: {
          display: true,
          text: 'Valor (R$)'
        }
      },
    },
  };

  const labels = ['0','1','2','3','4','5','6','7','8','9','10',];

  const data = {
    labels,
    datasets: [
      {
        label: 'Sem Aporte',
        data: labels.map((i) => semAporte[i]),
        backgroundColor: '#000',
        stack: 'Stack 0'
      },
      {
        label: 'Com Aporte',
        data: labels.map((i) => comAporte[i]),
        backgroundColor: '#ff751f',
        stack: 'Stack 1'
      },
    ],
  };

  return <Bar options={opt} data={data} />
}

export const Graph = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { simulacao, options } = useContext(Context);
  const [res] = simulacao.filter((i) => i.tipoIndexacao === options.indexacao && i.tipoRendimento === options.rendimento);
  const comAporte = res.graficoValores.comAporte;
  const semAporte = res.graficoValores.semAporte;

  const opt = {
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom',
      },
    },
    responsive: true,
    scales: {
      x: {
        grid:{
          color: 'transparent'
        },
        title: {
          display: true,
          text: 'Tempo (em meses)'
        }
      },
      y: {
        grid:{
          color: 'transparent'
        },
        title: {
          display: true,
          text: 'Tempo (em meses)'
        }
      },
    },
  };

  const labels = ['0','1','2','3','4','5','6','7','8','9','10',];

  const data = {
    labels,
    datasets: [
      {
        label: 'Sem Aporte',
        data: labels.map((i) => semAporte[i]),
        backgroundColor: '#000',
        stack: 'Stack 0'
      },
      {
        label: 'Com Aporte',
        data: labels.map((i) => comAporte[i]),
        backgroundColor: '#ff751f',
        stack: 'Stack 1'
      },
    ],
  };

  return <Bar options={opt} data={data} />
};
