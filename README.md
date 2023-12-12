# Dashboard Chart.js

Latihan visualisasi data dengan Chart.js. Sebelum meneruskan latihan membuat dashboard dengan React, saya mundur terlebih dahulu dengan menggunakan HTML dan JavaScript biasa agar membiasakan diri dengan cara kerja library untuk membuat grafik. Sekaligus latihan menggunakan dan memvisualisasikan data sederhana sebelum bekerja dengan data yang rumit.

## Mengolah Tipe Data di File JSON

Sama seperti mesin dan bahasa lainnya, JSON mengenali tipe data sebagai string, numerik, boolean, object, dll. Ini data awal yang saya gunakan:

```json
{
	"Bulan": "Juni",
	"Sepatu": "230,000,000",
	"Baju": "320,000,000",
	"Celana": "300,000,000",
	"Total Penjualan": "850,000,000"
},
```

Dalam data di atas, angka penjualan yang seharusnya numerik ditulis menjadi string, belum lagi angka dipisahkan dengan tanda koma (,). Data ini tidak akan menjadi masalah apabila hanya akan ditampilkan dalam tabel di HTML. Tetapi akan bermasalah apabila akan dilakukan operasi matematika seperti penambahan dan pengurangan.

Di sisi lain, datasets di Chart.js formatnya adalah `data: [1200, 1900, 2800, 1700, 2200, 2700]` (data primitive). Keberadaan tanda koma dalam value di JSON, misalnya `230,000,000` akan dianggap sebagai data 1: 230, data 2: 000, dan seterusnya.

Ya, kita bisa mengkonversi tipe data string menjadi angka dengan JavaScript saat proses fetching. TETAPI, agar JavaScript tidak terlalu banyak beban kehidupan, saya kira langkah paling baik adalah mengolah file JSON agar tipe datanya sesuai.

```json
{
	"Bulan": "Juni",
	"Sepatu": 230000000,
	"Baju": 320000000,
	"Celana": 300000000,
	"Total Penjualan": null
},
```

Total Penjualan diberi nilai `null` karena akan dijumlahkan di dalam tabel. Saya kira cara ini lebih fleksibel agar apabila kita mengubah nilai penjualan di dalam JSON, total penjualan tetap akurat.

## Ekstraksi dan Visualisasi Data

Di dunia nyata, data di dashboard diambil dari back-end. Maka untuk mensimulasikan itu, semua data yang akan dibuat grafik dan tabel diambil dari file JSON. Jadi, data hanya diambil satu kali untuk kemudian diekstraksi ke dalam variabel-variabel yang bisa digunakan oleh Chart.js dan tabel.

Hal lain yang menjadi concern saya ketika melihat berbagai desain dashboard adalah: 

- Perlukah semua grafik itu ditampilkan di dashboard?
- Apakah grafik itu untuk menunjukkan data atau hanya untuk tujuan visual (supaya desainnya terlihat keren)?
- In the real world, 

Tapi ya sudahlah ya, itu nanti dipikirkan. Toh, ini cuma latihan.

## Latihan JavaScript Modules

Untuk membuat satu grafik, dibutuhkan setidaknya 50 baris JavaScript. Selain ukuran file akan menjadi besar, juga akan sulit dikelola. Saya mencoba mengorganisasi file JavaScript menggunakan modules dengan skenario:

- `main.js` file JavaScript utama.
- `data-penjualan.mjs` file JavaScript untuk fetching data dari JSON.
- `bar-chart.mjs` file untuk membuat grafik batang yang datanya diambil dari `data-penjualan.mjs`.
- `table.mjs` file untuk membuat tabel, sorting, dan filter. Datanya juga diambil dari `data-penjualan.mjs`.
- File lainnya untuk membuat berbagai jenis grafik, semua data diambil dari `data-penjualan.mjs`.

(Abaikan penamaan file yang campur aduk antara bahasa Inggris dan bahasa Indonesia)

Saya familiar dengan `import` dan `eksport`. Juga tidak masalah apabila yang diimpor hanya satu `function` dan data grafiknya statis (hardcode). Tetapi sempat menghadapi kesulitan ketika mendistribusikan data ke berbagai file/module lainnya.

## Membuat Grafik Batang dari JSON dengan Chart.js dan Fetch API

Ada banyak cara untuk melakukan HTTP request untuk menampilkan data. Saya menggunakan Fetch API sesuai petunjuk para senior, oh dan sintaksisnya pun lebih singkat.

Konfigurasi untuk membuat grafik dengan Chart.js lebih sederhana daripada Apex Chart. Atau mungkin karena Apex Chart saya gunakan di React. Di dokumentasinya, 

## Mengisi Data Tabel dengan Fetch API

Dari file JSON yang sama, saya membuat tabel yang bisa diurutkan dan difilter.

Algoritma: ambil data dari JSON ==> hitung total penjualan ==> konversi currency menjadi IDR ==> tampilkan hasilnya dalam tabel.

## Progress Bar

By default, Chart.js tidak memiliki fungsi atau jenis chart untuk membuat progress bar. Beberapa programmer menggunakan stacked horizontal bar, dengan menumpuk dua data, di belakang full 100%, kemudian di atasnya 90% atau berapa pun untuk menunjukkan progres. Beberapa yang lain menggunakan plugin (membuat sendiri) untuk memberi latar belakang tiap bar.

Jika hanya untuk visual, itu tidak masalah. Bahkan, menggunakan CSS biasa juga bisa. Tetapi bagaimana jika bekerja dengan data sebenarnya?

## CSS

Tidak ada yang istimewa dari CSS, saya hanya menggunakan SCSS, tanpa framework. Yang menjadi tantangan adalah mengatur layout grafik. Kita tidak bisa mengatur tinggi dan lebar `<canvas>` Chart.js dengan CSS (inline maupun eksternal). Untuk mengatur lebar dan tinggi, kita harus membungkus `<canvas>` tersebut dengan tag `<figure>` atau tag lainnya.

```html
<figure class="chart-wrapper">
	<canvas id="myChart"></canvas>
</figure>
```

Tag `<figure class="chart-wrapper">` inilah yang kemudian bisa kita atur tingginya di CSS.

1. **Progress Bar**

Agak tricky juga, sih, membuat progress bar yang warnanya selang-seling per tiga item. Sempat tergoda untuk memberikan `class` berbeda pada masing-masing elemen, tapi cara ini mungkin akan baik-baik saja apabila cuma ada 3 atau 6 elemen, kalau 100? 

Maka saya menggunakan `:nth-child()` modulus. Dalem banget ini menyelamnya. :smile:

```css
.progress-bar {
  ...
  
&__container {
...

	&:nth-child(3n+1) .progress-bar__item {
		background-color: $greenColor;
	}
	&:nth-child(3n+2) .progress-bar__item {
		background-color: $blueColor;
	}
	&:nth-child(3n) .progress-bar__item {
		background-color: $yellowColor;
	}
}

&__item {
...
}
}
```