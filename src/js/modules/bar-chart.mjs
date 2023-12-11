import { buatChartDariData } from './data-penjualan.mjs';

export async function createBarChart() {
  const { bulan, sepatu, celana, baju } = await buatChartDariData();
  
  // setup 
    const data = {
      labels: bulan,
      datasets: [{
        label: 'Sepatu',
        data: sepatu,
        borderWidth: 0,
        backgroundColor: '#20D1A8',
        borderRadius: 20,
      },
      {
        label: 'Baju',
        data: baju,
        borderWidth: 0,
        backgroundColor: '#463BFB',
        borderRadius: 20,
      },
      {
        label: 'Celana',
        data: baju,
        borderWidth: 0,
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderRadius: 20,
      },
    ],
    };

    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              display: false,
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            labels: {
              boxWidth: 40,
              boxHeight: 20,
              useBorderRadius: true,
              borderRadius: 10,
            },
            onHover: function (event, legendItem) {
              document.getElementById("grafikPenjualan").style.cursor = 'pointer';
            },
            onLeave: function (event, legendItem) {
              document.getElementById("grafikPenjualan").style.cursor = 'default';
            }
          },
          datalabels: {
            display: false,
          }
        }
      }
    };


  // render init block
  const myChart = new Chart(
    document.getElementById('grafikPenjualan'),
    config
  );
}


