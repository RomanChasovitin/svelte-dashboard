import Chart from 'chart.js';

import { colors } from '../components/shared/colors.js';

export default function buildRegionsChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToRegionsData(regions) {
  let viewColors = colors;
  const keys = Object.keys(regions);
  const isMoreColors = Math.ceil(keys.length / colors.length);
  if (isMoreColors > 1) {
    for (let i = 1; i < isMoreColors; i++) {
      viewColors = [...viewColors, colors];
    }
  }
  const data = keys.map(key => regions[key][1]);
  const labels = keys;
  return {
    type: 'pie',
    data: {
      datasets: [
        { 
          label: "Регионы",
          backgroundColor: [...viewColors],
          data,
          borderWidth: 3,
          weight: 1,
        },
      ],
      labels
    },
    options: {
      legend: {
        display: false,
        defaultFontSize: 20,
      },
      tooltips: {
        titleFontSize: 18,
        bodyFontSize: 18,
      }
    }
  }
}