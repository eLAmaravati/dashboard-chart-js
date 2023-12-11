import { sampoernKretek } from './data-penjualan.mjs';

export async function contohGrafikLagi() {
  const { bulan, sepatu, celana } = await sampoernKretek();
  
  const data = {
    labels: bulan,
    datasets: [
      {
        label: 'Progress',
        data: sepatu,
        borderWidth: 1,
        backgroundColor: ['#463BFB', '#20D1A8', 'rgb(255, 205, 86)', '#463BFB', '#20D1A8', 'rgb(255, 205, 86)', '#463BFB', '#20D1A8',],
        borderRadius: 20,
        borderSkipped: false,
        categoryPercentage: 0.1,
        barPercentage: 0.9,
        barThickness: 20,
      },
      {
        label: 'Progress 2',
        data: celana,
        borderRadius: 20,
        backgroundColor: ['#f2f2f2'],
        borderSkipped: false,
        categoryPercentage: 0.1,
        barPercentage: 0.9,
        barThickness: 20,
        datalabels: {
          display: false,
        }
      }
    ]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          stacked: false,
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        labels: {
          render: 'percentages'
        },
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          offset: 0,
          formatter: function(value, context) {
            return value + '%';
          },
          font: {
            weight: 'bold',
          }
        }
      }
    },
    plugins: [ChartDataLabels],
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('contohGrafik'),
    config
  );
}

contohGrafikLagi();
