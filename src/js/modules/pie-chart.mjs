let blue = '#463BFB';
let green = '#20D1A8';
let yellow = 'rgb(255, 205, 86)';
let grey = '#F2F5FA';

export function createPieChart2() {
  // setup 
    const data = {
      labels: ['Sepatu', 'Celana', 'Baju'],
      datasets: [{
        label: 'Weekly Sales',
        data: [45, 32, 23],
        backgroundColor: [
          blue,
          green,
          yellow,
        ],
        borderColor: [
          grey,
          grey,
          grey,
        ],
        borderWidth: 5,
        cutout: '30',
        // borderRadius: 20,
        offset: 10,
      }]
    };

    // config 
    const config = {
      type: 'pie',
      data,
      options: {
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('pieChart2'),
      config
    );
}

createPieChart2();

