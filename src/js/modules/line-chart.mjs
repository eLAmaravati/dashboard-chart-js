import { buatChartDariData } from './data-penjualan.mjs';

export async function createLineChart() {
  const { bulan, sepatu, celana, baju } = await buatChartDariData();

  // Line Chart
  const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: bulan,
      datasets: [
        {
          label: 'Sepatu',
          data: sepatu,
          borderWidth: 3,
          borderColor: '#20D1A8',
          backgroundColor: '#20D1A8',
          lineTension: 0.4
        },
        {
          label: 'Baju',
          data: baju,
          borderWidth: 3,
          borderColor: '#463BFB',
          backgroundColor: '#463BFB',
          lineTension: 0.4
        },
        {
          label: 'Celana',
          data: celana,
          borderWidth: 3,
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 1)',
          lineTension: 0.4
        },
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        },
        x: {
          beginAtZero: true,
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });
  // Akhir line chart
}
