import Chart from 'chart.js';

import { colors } from '../components/shared/colors.js';

export default function buildCategoriesChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToCategoriesData(categories) {
  let viewColors = colors;
  const keys = Object.keys(categories);
  const isMoreColors = Math.ceil(keys.length / colors.length);
  if (isMoreColors > 1) {
    for (let i = 1; i < isMoreColors; i++) {
      viewColors = [...viewColors, colors];
    }
  }
  const data = keys.map(key => categories[key][1]);
  const labels = keys;
  return {
    type: 'pie',
    data: {
      datasets: [
        { 
          label: "Категории",
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