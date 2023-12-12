import { buatChartDariData } from './data-penjualan.mjs';
import { topLabelsPlugin, topLabelsPlugin2 } from './plugin.mjs';
let blue = '#463BFB';
let green = '#20D1A8';
let yellow = 'rgb(255, 205, 86)';
let grey = '#F2F5FA';
export async function createBarChart() {
  const { bulan, sepatu, celana, baju, totalPenjualanSepatu } = await buatChartDariData();
  
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
        data: celana,
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
            beginAtZero: true,
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
      },
    };


  // render init block
  const myChart = new Chart(
    document.getElementById('grafikPenjualan'),
    config
  );
}

// Grafik Penjualan 2
export async function createBarChart2() {
  const { bulan, sepatu, celana, baju } = await buatChartDariData();
  // setup 
    const data = {
      labels: bulan,
      datasets: [
        {
        type: 'bar',
        label: 'Sepatu',
        data: sepatu,
        borderWidth: 7,
        borderColor: 'transparent',
        backgroundColor: '#20D1A8',
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false,
      },
      {
        type: 'bar',
        label: 'Baju',
        data: baju,
        borderWidth: 7,
        borderColor: 'transparent',
        backgroundColor: '#463BFB',
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false,
      },
      {
        label: 'Celana',
        data: celana,
        borderWidth: 7,
        borderColor: 'transparent',
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderRadius: {
          topLeft: 50,
          topRight: 50,
          bottomLeft: 50,
          bottomRight: 50,
        },
        borderSkipped: false,
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
            stacked: true,
            beginAtZero: true,
            
          },
          x: {
            stacked: true,
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
        },
        layout: {
          padding: {
            top: 30,
          }
        }
      },
      plugins: [ChartDataLabels, topLabelsPlugin2]
    };


  // render init block
  const barChart2 = new Chart(
    document.getElementById('grafikPenjualan2'),
    config
  );
}


// Grafik Penjualan 3
export async function createBarChart3() {
  const { bulan, sepatu, celana, baju } = await buatChartDariData();
  // setup 
    const data = {
      labels: bulan,
      datasets: [
      {
        type: 'bar',
        label: 'Baju',
        data: baju,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: '#463BFB',
        borderRadius: 50,
      },
      {
        type: 'bar',
        label: 'Sepatu',
        data: sepatu,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: '#20D1A8',
        borderRadius: 50,
      },
      {
        label: 'Celana',
        data: celana,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderRadius: 50,
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
            stacked: true,
            beginAtZero: true,
            
          },
          x: {
            stacked: true,
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
        },
        layout: {
          padding: {
            top: 30,
          }
        }
      },
      plugins: [ChartDataLabels, topLabelsPlugin2]
    };


  // render init block
  const barChart3 = new Chart(
    document.getElementById('grafikPenjualan3'),
    config
  );
}


// Buat tabel untuk bar chart 3
// function calculateTotal(row) {
//   return row.totalPenjualanSepatu + row.totalPenjualanBaju + row.totalPenjualanCelana;
// }

// Fungsi untuk mengonversi nilai numerik ke format mata uang
function formatCurrency(value) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Jika nilai null, kembalikan string kosong
  if (value === null) {
    return '';
  }

  return formatter.format(value);
}

export async function bukan(data) {
  const { bulan, totalPenjualanSepatu, totalPenjualanBaju, totalPenjualanCelana } = await buatChartDariData();
  const tableBody = document.querySelector('#tab tbody');

  // Pastikan data adalah array
  if (!Array.isArray(data)) {
    data = [data];
  }

  // Iterasi melalui setiap baris data
  // data.forEach(row => {
  //   const totalPenjualan = calculateTotal(row);

  //   const newRow = document.createElement('th');
  //   newRow.innerHTML = `
  //   <tr>${row.Bulan}</tr>
  //   <tr>${formatCurrency(row.totalPenjualanSepatu)}</tr>
  //   <tr>${formatCurrency(row.totalPenjualanBaju)}</tr>
  //   <tr>${formatCurrency(row.totalPenjualanCelana)}</tr>
  //   <tr>${formatCurrency(calculateTotal(row))}</tr>
  // `;

  // Iterasi melalui setiap baris data
  data.forEach((row, rowIndex) => {
    // Tambahkan baris ke tabel
    const newRow = document.createElement('tr');
    tableBody.appendChild(newRow);

    // Iterasi melalui setiap kolom data
    Object.keys(row).forEach((key, colIndex) => {
      // Tambahkan sel ke baris
      const newCell = document.createElement('td');
      newCell.textContent = row[key];
      newRow.appendChild(newCell);
    });

    tableBody.appendChild(newRow);
  });
}


export async function tabelBarChart3(data) {
  const { bulan, totalPenjualanSepatu, totalPenjualanBaju, totalPenjualanCelana } = await buatChartDariData();
  const tableBody = document.querySelector('#tabelPenjualanTahun tbody');

  // Pastikan data adalah array
  if (!Array.isArray(data)) {
    data = [data];
  }

  // Iterasi melalui setiap jenis produk
  ['sepatu', 'baju', 'celana'].forEach((jenisProduk, index) => {
    const existingRow = tableBody.rows[index];

    // Iterasi melalui setiap bulan
    data.forEach((row) => {
      const cell = document.createElement('td');
      cell.textContent = formatCurrency(row[`totalPenjualan${capitalize(jenisProduk)}`]);
      existingRow.appendChild(cell);
    });
  });

  // Tambahkan baris total
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = '<td>Total</td>';

  data.forEach((row) => {
    const total = calculateTotal(row);
    const cell = document.createElement('td');
    cell.textContent = formatCurrency(total);
    totalRow.appendChild(cell);
  });

  tableBody.appendChild(totalRow);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function calculateTotal(row) {
  return row.totalPenjualanSepatu + row.totalPenjualanBaju + row.totalPenjualanCelana;
}
