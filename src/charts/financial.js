import Chart from 'chart.js';

export default function buildFinancialChart(ctx, data) {
  return new Chart(ctx, data);
}

export const financialData = {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    datasets: [
      { 
        data: [100,500,400,200,800,2000,700,300,3000],
        label: "Оборот",
        borderColor: "#3e95cd",
        pointBackgroundColor: '#3e95cd',
        fill: false
      },
      { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Маржа",
        borderColor: "#8e5ea2",
        pointBackgroundColor: '#8e5ea2',
        fill: false,
      }
    ],
  },
  options: {
    legend: {
      display: false
    },
  }
}