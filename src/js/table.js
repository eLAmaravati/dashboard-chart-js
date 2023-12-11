// Fetch data dari data.json
fetch('/src/data/data.json')
  .then(response => response.json())
  .then(data => processData(data));

// Fungsi untuk memproses data dan menambahkannya ke tabel
export function processData(data) {
  const tableBody = document.querySelector('#tabelPenjualan tbody');

  // Iterasi melalui setiap baris data
  data.forEach(row => {
    // Tambahkan baris ke tabel
    // Hitung total penjualan untuk setiap baris
    const totalPenjualan = calculateTotal(row);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${row.Bulan}</td>
    <td>${formatCurrency(row.Sepatu)}</td>
    <td>${formatCurrency(row.Baju)}</td>
    <td>${formatCurrency(row.Celana)}</td>
    <td>${formatCurrency(calculateTotal(row))}</td>
  `;

    tableBody.appendChild(newRow);
  });
}

// Fungsi untuk menghitung total penjualan dari sebuah baris data
function calculateTotal(row) {
  const penjualanA = (row["Sepatu"]);
  const penjualanB = (row["Baju"]);
  const penjualanC = (row["Celana"]);

  // Jika ada nilai yang tidak valid, kembalikan null atau 0 atau pesan kesalahan sesuai kebutuhan
  if (isNaN(penjualanA) || isNaN(penjualanB) || isNaN(penjualanC)) {
    return null;
  }

  return penjualanA + penjualanB + penjualanC;
}

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

