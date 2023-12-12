import { circleNumberPlugin } from './plugin.mjs';

let blue = '#463BFB';
let green = '#20D1A8';
let yellow = 'rgb(255, 205, 86)';
let grey = '#F2F5FA';
let transparent = 'transparent'

export function createCircularProgress(elementId, chartData, chartOptions) {
    const chartElement = document.getElementById(elementId);
    return new Chart(chartElement, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
        plugins: [circleNumberPlugin]
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
      green,
      transparent,
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
      yellow,
      transparent,
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
      blue,
      transparent,
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
createCircularProgress('circularProgress1', data1, options);
createCircularProgress('circularProgress2', data2, options);
createCircularProgress('circularProgress3', data3, options);
