import { dataPenjualan, bulan, sepatu, baju, celana } from './data-penjualan.js';

dataPenjualan().then(() => {
  console.log(bulan, sepatu, baju, celana);
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
          }
        });
});
