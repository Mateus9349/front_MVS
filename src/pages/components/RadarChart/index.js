import React from 'react';
import { Chart } from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

import styles from './RadarChart.module.scss';

const RadarChart = ({ labels, values, title }) => {

  // Verifica se labels e values têm o mesmo comprimento
  if (labels.length !== values.length) {
    throw new Error('O comprimento das labels e valores deve ser o mesmo.');
  }

  // Dados do gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Pontos",
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: values,
      }
    ],
  };

  // Opções do gráfico
  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return (
    <div className={styles.containerChart}>
      <h2>{title}</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;



