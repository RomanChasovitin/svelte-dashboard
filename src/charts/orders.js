import Chart from 'chart.js';

export default function buildOrdersChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToOrdersData(awaiting, canceled, success, error){
  return {
    type: 'doughnut',
    data: {
      datasets: [
        { 
          label: "Заказы",
          backgroundColor: ["#20AE80", "#4E73DF", "#F1A244", '#64666D'],
          data: [success, awaiting, canceled, error],
          borderWidth: 3,
          weight: 1,
        },
      ],
      labels: [
        'Успешные',
        'Ожидает оплаты',
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