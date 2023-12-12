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

  totalPenjualanSepatu = sepatu.reduce((total, penjualan) => total + penjualan, 0);
  totalPenjualanBaju = baju.reduce((total, penjualan) => total + penjualan, 0);
  totalPenjualanCelana = celana.reduce((total, penjualan) => total + penjualan, 0);

  return { bulan, sepatu, baju, celana, totalPenjualanSepatu, totalPenjualanBaju, totalPenjualanCelana }; 
}

export async function buatChartDariData() {
  const data = await dataPenjualan();
  

  return data;
}

export default buatChartDariData;
