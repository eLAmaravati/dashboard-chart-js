Chart.defaults.font.family = 'Poppins';
import { processData } from './table.js';
import { buatChartDariData } from './modules/data-penjualan.mjs';
import { createBarChart, createBarChart2, createBarChart3, tabelBarChart3 } from './modules/bar-chart.mjs';
import { createLineChart } from './modules/line-chart.mjs';
import { createPyramidChart } from './modules/pyramid-chart.mjs';
import { createPieChart2 } from './modules/pie-chart.mjs';
import { createCircularProgress } from './modules/circular-progress.mjs';


async function main() {
  const data = await buatChartDariData();
  
  createBarChart(data);
  createBarChart2(data);
  createBarChart3(data);
  createLineChart(data);
  tabelBarChart3(data);
}

main();

