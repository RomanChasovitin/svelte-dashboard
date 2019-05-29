import Chart from 'chart.js';

export default function buildFinancialChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToFinancialData(data, { isShowMargin, isShowTurnover, isDay }) {
  const keys = Object.keys(data);
  const margins = keys.map(key => data[key].margin);
  const turnovers = keys.map(key => data[key].turnover);
  const datasets = [];
  if (isShowTurnover) {
    datasets.push(
      { 
        data: [...turnovers],
        label: "Оборот",
        borderColor: "#2BBAC3",
        pointBackgroundColor: '#2BBAC3',
        fill: false
      }
    )
  }
  if (isShowMargin) {
    datasets.push(
      { 
        data: [...margins],
        label: "Маржа",
        borderColor: "#AB64AC",
        pointBackgroundColor: '#AB64AC',
        fill: false,
      }
    )
  }
  let viewKeys = [...keys];
  if (isDay) {
    viewKeys = viewKeys.map(key => key.slice(0, -3));
  } else {
    viewKeys = viewKeys.map(key => key.substr(11, 2));
  }
  return {
    type: 'line',
    data: {
      labels: [...viewKeys],
      datasets,
    },
    options: {
      legend: {
        display: false,
        defaultFontSize: 20,
      },
    }
  }
}