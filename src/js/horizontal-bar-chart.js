export function createHorizontalBarChart(elementId, chartData, chartOptions) {
  const chartElement = document.getElementById(elementId);
  return new Chart(chartElement, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
}

// Data untuk horizontal bar
const data = {
  labels: ['April', 'Jan', 'Feb', 'April', 'Agustus'],
  datasets: [{
    label: '# Projecst 1',
    data: [90, 87, 50, 45, 90],
    borderWidth: 1,
    backgroundColor: ['#463BFB', '#20D1A8', '#463BFB', '#20D1A8', '#463BFB', '#20D1A8',],
    borderRadius: 20,
    borderSkipped: false,
    categoryPercentage: 0.1,
    barPercentage: 0.9,
    barThickness: 20,
  },
  ]
};


// Options
const options = {
  maintainAspectRatio: true,
  responsive: true,
  indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 4,
            formatter: function(value, context) {
              return value + '%'; 
            },
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            }
          },
          y: {
            beginAtZero: true,
           
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
  layout: {
    padding: {
      right: 40,
    }
  },
  plugins: [ChartDataLabels]
};

// Membuat grafik
createHorizontalBarChart('horizontalBar', data, options);

 