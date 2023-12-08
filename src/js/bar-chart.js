Chart.register(ChartDataLabels);
export function createBarChart(elementId, chartData, chartOptions) {
    const chartElement = document.getElementById(elementId);
    return new Chart(chartElement, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
}

// Data dan opsi untuk grafik
const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: '# Projecst 1',
        data: [1200, 1900, 2800, 1700, 2200, 2700],
        borderWidth: 0,
        backgroundColor: '#20D1A8',
        borderRadius: 20,
    },
    {
        label: '# Projects 2',
        data: [1500, 2300, 2100, 2600, 1100, 1800],
        backgroundColor: '#463BFB',
        borderRadius: 20,
    }]
};

// Options
const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
            }
        },
        x: {
            grid: {
                display: false,
            },
        }
    },
    layout: {
        padding: 0,
    },
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: false,
        },
    }
};

// Membuat grafik
createBarChart('barChart', data, options);

