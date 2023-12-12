// Angka di tengah plugin
export const circleNumberPlugin = {
  id: 'circleNumber',
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
    ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
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

// topLabels
export const topLabelsPlugin = {
  id: 'topLabelsPlugin',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.font = 'bold 12px Poppins';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    const datasets = chart.data.datasets;
    const { x, y } = chart.scales;

    // Hitung jumlah total untuk setiap bar
    let totals = datasets.reduce((acc, dataset) => {
      dataset.data.forEach((value, index) => {
        acc[index] = (acc[index] || 0) + value;
      });
      return acc;
    }, {});

    // Ubah totals menjadi array
    totals = Object.values(totals);

    // Tambahkan label data ke bagian atas setiap bar
    totals.forEach((total, index) => {
      const xPos = x.getPixelForTick(index);  
      const yPos = y.getPixelForValue(total);
      // Ubah total menjadi format "juta"
      const formattedTotal = `${total / 1000000} juta`;
      ctx.fillText(formattedTotal, xPos, yPos - 10);
    });
  }
};


export const topLabelsPlugin2 = {
  id: 'topLabelsPlugin2',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.font = 'bold 12px Poppins';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    const datasets = chart.data.datasets;
    const { x, y } = chart.scales;

    // Hitung jumlah total untuk setiap bar
    let totals = datasets.reduce((acc, dataset, i) => {
      // Periksa apakah dataset ini disembunyikan
      const isHidden = chart.getDatasetMeta(i).hidden;
      if (!isHidden) {
        dataset.data.forEach((value, index) => {
          acc[index] = (acc[index] || 0) + value;
        });
      }
      return acc;
    }, {});

    // Ubah totals menjadi array
    totals = Object.values(totals);

    // Tambahkan label data ke bagian atas setiap bar
    totals.forEach((total, index) => {
      const xPos = x.getPixelForTick(index);  
      const yPos = y.getPixelForValue(total);
      // Ubah total menjadi format "juta"
      const formattedTotal = `${total / 1000000} juta`;
      ctx.fillText(formattedTotal, xPos, yPos - 10);
    });
  }
};
