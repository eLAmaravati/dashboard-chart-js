// Angka di tengah plugin
const number = {
  id: 'number',
  beforeDraw ( chart, args, options) {
    const {ctx, chartArea: { top, right, bottom, left, width, height }} = chart;
    ctx.save();
    ctx.fillStyle = '#6690FF';
    // Menghitung titik tengah
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Mengambil data pertama dari dataset
    const firstData = chart.data.datasets[0].data[0] + '%';

    // Menggambar lingkaran
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fill();

    // Menambahkan data pertama ke dalam lingkaran
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '90% Poppins';
    ctx.fillText(firstData, centerX, centerY);

    ctx.restore();
  }
};

export function createCircleChart(elementId, chartData, chartOptions) {
    const chartElement = document.getElementById(elementId);
    return new Chart(chartElement, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
        plugins: [number]
    });
}

// Data
const data1 = {
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [{
    data: [75, 25],
    backgroundColor: [
      '#463BFB',
      '#20D1A8',
    ],
    cutout: '80%',
    borderWidth: 0,
    borderRadius: 20,
  }]
};

const data2 = {
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [{
    data: [56, 44],
    backgroundColor: [
      '#463BFB',
      '#20D1A8',
    ],
    cutout: '80%',
    borderWidth: 0,
    borderRadius: 20,
  }]
};

const data3 = {
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [{
    data: [67, 23],
    backgroundColor: [
      '#463BFB',
      '#20D1A8',
    ],
    cutout: '80%',
    borderWidth: 0,
    borderRadius: 20,
  }]
};

// Options
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    title: {
      display: true,
      text: 'Circle Chart',
      fullSize: true,
      position: 'bottom',
      align: 'center',
      font: {
        weight: 'bold',
      }
    },
  },
  elements: {
    arc: {
      backgroundColor: '#111',
      borderDash: 2,
    }
  }
};


// Membuat grafik
createCircleChart('circleChart1', data1, options);
createCircleChart('circleChart2', data2, options);
createCircleChart('circleChart3', data3, options);