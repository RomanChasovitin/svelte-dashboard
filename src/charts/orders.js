import Chart from 'chart.js';

export default function buildOrdersChart(ctx, data) {
  return new Chart(ctx, data);
}

export const ordersData = {
  type: 'doughnut',
  data: {
    datasets: [
      { 
        label: "Корзина",
        backgroundColor: ["#4E73DF", "#F1A244", '#64666D'],
        data: [800, 400, 320],
        borderWidth: 3,
        weight: 1,
      },
    ],
    labels: [
      'Успешные',
      'Отмененные',
      'С ошибкой',
    ]
  },
  options: {
    legend: {
      display: false
    },
  }
}