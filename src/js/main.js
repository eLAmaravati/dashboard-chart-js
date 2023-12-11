Chart.defaults.font.family = 'Poppins';


// Fetching data from data.json
let bulan, sepatu, baju, celana;
let totalPenjualanSepatu;
let totalPenjualanBaju;
let totalPenjualanCelana;

async function dataPenjualan() {
  const dataUrl = '/src/data/data.json';
  const response = await fetch(dataUrl);
  const dataPoints = await response.json();
  
  bulan = dataPoints.map(dataPoint => dataPoint.Bulan);
  sepatu = dataPoints.map(dataPoint => dataPoint.Sepatu);
  baju = dataPoints.map(dataPoint => dataPoint.Baju);
  celana = dataPoints.map(dataPoint => dataPoint.Celana);

  const totalPenjualanSepatu = sepatu.reduce((total, penjualan) => total + penjualan, 0);

  return { dataPoints, totalPenjualanSepatu };

  // return dataPoints;
}

// dataPenjualan().then(() => {
  

//   createBarChart();
//   createLineChart();
//   createDonutChart();
// });

async function createCharts() {
  await dataPenjualan();
  totalPenjualanSepatu = sepatu.reduce((total, penjualan) => total + penjualan, 0);
  totalPenjualanCelana = celana.reduce((total, penjualan) => total + penjualan, 0);
  totalPenjualanBaju = baju.reduce((total, penjualan) => total + penjualan, 0);

  

  createBarChart();
  createLineChart();
  cobaAja();
}

createCharts();

async function cobaAja() {
  let totalPenjualan = totalPenjualanSepatu + totalPenjualanBaju + totalPenjualanCelana;
  console.log(totalPenjualan);

  let persentasePenjualanSepatu = Math.round((totalPenjualanSepatu / totalPenjualan) * 100);
  console.log(`Persentase Penjualan Sepatu: ${persentasePenjualanSepatu}%`);

  let persentasePenjualanBaju = Math.round((totalPenjualanBaju / totalPenjualan) * 100);
  console.log(`Persentase Penjualan Baju: ${persentasePenjualanBaju}%`);

  let persentasePenjualanCelana = Math.round((totalPenjualanCelana / totalPenjualan) * 100);
  console.log(`Persentase Penjualan Celana: ${persentasePenjualanCelana}%`);
}








// Create Bar Chart
async function createBarChart() {
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
};


// Doughnut chart
function createDonutChart() {
  
  const data = {
  labels: [
    'Sepatu',
    'Baju',
    'Celana'
  ],
  datasets: [{
    label: 'Januari',
    data: [20, 30, 45],
    backgroundColor: [
      '#20D1A8',
      '#463BFB',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4,
    cutout: '80',
    borderWidth: 0,
    borderRadius: 2,
  }]
};
  const config = {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      labels: {
        render: 'percentages'
      },
      legend: {
        display: false,
      }
    }
  },
  plugins: [ChartDataLabels]
};


// render init block
  const myChart = new Chart(
    document.getElementById('lingkaran'),
    config
  );
}

createDonutChart();


// Lingkaran 2
const doughnutBackground = {
  id: 'doughnutBackground',
  beforeDraw(chart) {
    const { ctx, data: { datasets } } = chart;
    datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (chart.isDatasetVisible(datasetIndex)) {
        meta.data.forEach((arc, index) => {
          const startAngle = arc._model.startAngle;
          const endAngle = arc._model.endAngle;
          const outerRadius = arc._model.outerRadius;
          const innerRadius = arc._model.innerRadius;
          ctx.save();
          ctx.fillStyle = 'lightgray';
          ctx.beginPath();
          ctx.arc(arc._model.x, arc._model.y, outerRadius, startAngle, endAngle);
          ctx.arc(arc._model.x, arc._model.y, innerRadius, endAngle, startAngle, true);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        });
      }
    });
  }
}



function buatLingkaranDua() {
  
  const data = {
  labels: [
    'Sepatu',
    'Baju',
    'Celana'
  ],
  datasets: [{
    label: 'Januari',
    data: [77, 23],
    backgroundColor: [
      '#20D1A8',
      '#f2f2f2',
    ],
    hoverOffset: 4,
    cutout: '90',
    borderWidth: 0,
    borderRadius: [20, 0, 0, 0, 0],
  }]
};
  const config = {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Circular Progress',
        fullSize: true,
      },
      labels: {
        render: 'percentages'
      },
      legend: {
        display: false,
      }
    }
  },
  plugins: [ChartDataLabels]
};


// render init block
  const myChart = new Chart(
    document.getElementById('lingkaran2'),
    config
  );
}

buatLingkaranDua();





// Horizontal Bar
const horizontalBackground = {
  id: 'horizontalBackground',
  beforeDraw(chart) {
    const { ctx, scales: { x, y }, data: { datasets } } = chart;
    const borderRadius = 20;
    datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (chart.isDatasetVisible(datasetIndex)) {
        meta.data.forEach((bar, index) => {
          const yPosition = y.getPixelForTick(index);
          ctx.save();
          ctx.fillStyle = 'lightgray';
          ctx.beginPath();
          ctx.moveTo(x.left + borderRadius, yPosition - bar.height / 2);
          ctx.lineTo(x.left + x.width - borderRadius, yPosition - bar.height / 2);
          ctx.arcTo(x.left + x.width, yPosition - bar.height / 2, x.left + x.width, yPosition - bar.height / 2 + borderRadius, borderRadius);
          ctx.lineTo(x.left + x.width, yPosition + bar.height / 2 - borderRadius);
          ctx.arcTo(x.left + x.width, yPosition + bar.height / 2, x.left + x.width - borderRadius, yPosition + bar.height / 2, borderRadius);
          ctx.lineTo(x.left + borderRadius, yPosition + bar.height / 2);
          ctx.arcTo(x.left, yPosition + bar.height / 2, x.left, yPosition + bar.height / 2 - borderRadius, borderRadius);
          ctx.lineTo(x.left, yPosition - bar.height / 2 + borderRadius);
          ctx.arcTo(x.left, yPosition - bar.height / 2, x.left + borderRadius, yPosition - bar.height / 2, borderRadius);
          ctx.fill();
          ctx.restore();
        });
      }
    });
  }
}


function buatHorizontalBar() {
  
  const data = {
  labels: ['Jan', 'Feb', 'Maret', 'April', 'Mei', 'Juni'],
  datasets: [
    {
    label: 'Progress',
    data: [95, 87, 50, 45, 90, 37],
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
    data: [100, 100, 100, 100, 100, 100],
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
    document.getElementById('horizontalBar'),
    config
  );
}

buatHorizontalBar();