import Chart from 'chart.js';

export default function buildCartChart(ctx, data) {
  return new Chart(ctx, data);
}

export function transformToCartData(openCart, closedCart) {
  return {
    type: 'doughnut',
    data: {
      datasets: [
        { 
          label: "Корзина",
          backgroundColor: ["#4E73DF", "#20AE80"],
          data: [openCart, closedCart],
          borderWidth: 3,
          weight: 1,
        },
      ],
      labels: [
        'Открытые',
        'Закрытые',
      ]
    },
    options: {
      legend: {
        display: false
      },
    }
  }
}

export const cartData = {
  type: 'doughnut',
  data: {
    datasets: [
      { 
        label: "Корзина",
        backgroundColor: ["#20AE80", "#CD4F4F"],
        data: [800, 400],
        borderWidth: 3,
        weight: 1,
      },
    ],
    labels: [
      'Оплаченные',
      'Неоплаченные',
    ]
  },
  options: {
    legend: {
      display: false
    },
  }
}