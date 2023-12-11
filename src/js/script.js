Chart.defaults.font.family = 'Poppins';
import { processData } from './table.js';
import { buatChartDariData } from './modules/data-penjualan.mjs';
import { createBarChart } from './modules/bar-chart.mjs';
import { createLineChart } from './modules/line-chart.mjs';


async function main() {
  const data = await buatChartDariData();
  
  // Anda dapat mempassing data ke fungsi contohGrafikLagi jika diperlukan
  createBarChart(data);
  createLineChart(data);
}

main();
