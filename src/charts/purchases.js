import Chart from 'chart.js';

export default function buildPurchasesChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToPurchasesData(data, { successPurchase, canceledPurchase, awaitingPurchase, errorPurchase, isDay }) {
  const keys = Object.keys(data);
  const success = keys.map(key => data[key].success_amount ? Math.round(data[key].success_amount) : 0);
  const errors = keys.map(key => data[key].errors_amount ? Math.round(data[key].errors_amount) : 0);
  const awaiting = keys.map(key => data[key].awaiting_amount ? Math.round(data[key].awaiting_amount) : 0);
  const canceled = keys.map(key => data[key].canceled_amount ? Math.round(data[key].canceled_amount) : 0);
  const datasets = [];
  if (successPurchase) {
    datasets.push(
      { 
        data: [...success],
        label: "Успешные заказы",
        borderColor: "#20AE80",
        pointBackgroundColor: '#20AE80',
        fill: false
      }
    )
  }
  if (awaitingPurchase) {
    datasets.push(
      { 
        data: [...awaiting],
        label: "Ожидающие оплаты",
        borderColor: "#4E73DF",
        pointBackgroundColor: '#4E73DF',
        fill: false,
      }
    )
  }
  if (canceledPurchase) {
    datasets.push(
      { 
        data: [...canceled],
        label: "Отмененные заказы",
        borderColor: "#F1A244",
        pointBackgroundColor: '#F1A244',
        fill: false,
      }
    )
  }
  if (errorPurchase) {
    datasets.push(
      { 
        data: [...errors],
        label: "Заказы с ошибкой",
        borderColor: "#CD4F4F",
        pointBackgroundColor: '#CD4F4F',
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