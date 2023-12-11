async function dataPenjualan() {
        const dataUrl = '/src/data/data.json';
        const response = await fetch(dataUrl);
        const dataPoints = await response.json();
        console.log(dataPoints);
        return dataPoints;

      };

      dataPenjualan().then(dataPoints => {
        const bulan = dataPoints.map(dataPoint => {
          dataPoint.Bulan;
          return dataPoint.Bulan;
        });

        const sepatu = dataPoints.map(dataPoint => {
          dataPoint.Sepatu;
          return dataPoint.Sepatu;
        });

        const baju = dataPoints.map(dataPoint => {
          dataPoint.Baju;
          return dataPoint.Baju;
        });

        const celana = dataPoints.map(dataPoint => {
          dataPoint.Celana;
          return dataPoint.Celana;
        });





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
          }
        });
        // Akhir line chart
      });



      // Sudah betul
      let bulan, sepatu, baju, celana;

      async function dataPenjualan() {
        const dataUrl = '/src/data/data.json';
        const response = await fetch(dataUrl);
        const dataPoints = await response.json();
        console.log(dataPoints);

        bulan = dataPoints.map(dataPoint => dataPoint.Bulan);
        sepatu = dataPoints.map(dataPoint => dataPoint.Sepatu);
        baju = dataPoints.map(dataPoint => dataPoint.Baju);
        celana = dataPoints.map(dataPoint => dataPoint.Celana);

        return dataPoints;
      }

      dataPenjualan().then(() => {
        createLineChart();
      });

      async function createLineChart() {
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
          }
        });
        // Akhir line chart
      }

// barchart udah betul
fetch('/src/data/data.json')
        .then(response => response.json())
        .then(data => {
          let labels = data.map(item => item.Bulan);
          let datasets = [
            {
              label: 'Sepatu',
              data: data.map(item => item['Sepatu']),
              borderWidth: 0,
              backgroundColor: '#20D1A8',
              borderRadius: 20,
            },
            {
              label: 'Baju',
              data: data.map(item => item['Baju']),
              borderWidth: 0,
              backgroundColor: '#463BFB',
              borderRadius: 20,
            },
            {
              label: 'Celana',
              data: data.map(item => item['Celana']),
              backgroundColor: 'rgba(255, 206, 86, 1)',
              borderRadius: 20
            },
          ];

          let ctx = document.getElementById('#').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: datasets
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
                x: {
                  grid: {
                    display: false,
                  }
                }
              },
              datalabels: {
                display: false,
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
          });
        })
        .catch(error => console.error('Error:', error));

// Bar Chart

export function createBarChart(elementId, chartData, chartOptions) {
    const chartElement = document.getElementById(elementId);
    return new Chart(chartElement, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}

// Data dan opsi untuk grafik
const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: '# Projecst 1',
        data: [1200, 1900, 2800, 1700, 2200, 2700],
        borderWidth: 0,
        backgroundColor: '#20D1A8',
        borderRadius: 20,
    },
    {
        label: '# Projects 2',
        data: [1500, 2300, 2100, 2600, 1100, 1800],
        backgroundColor: 'purple',
        borderRadius: 20,
    }]
};

// Options
const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
            }
        },
        x: {
            grid: {
                display: false,
            },
        }
    },
    layout: {
        padding: 0,
    },
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false,
        },
    }
};

// Membuat grafik
createBarChart('contohBar', data, options);

