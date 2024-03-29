# Tugas 2
# Praktikum Pemrograman Web

Tugas 2 ini dibuat menggunakan

- HTML
- CSS
- Javascript

## Content

- Berisi 2 tabel dengan 1 dibuat dengan html dan 1 diberi css
- Perkalian dari dua bilangan yang berada di tabel dan dioutputkan di javascript alert 
- Terdapat function waktu untuk mengambil nilai variabel waktu
- Menyesuaikan nilai variabel waktu dengan nilai variabel greeting menggunakan if else
- mengoutputkan kembali hasil dari variabel greeting melalui Javascript alert

## Preview

```sh
const hour = new Date().getHours();
```
- Digunakan untuk mengambil nilai dari variabel waktu

```sh
if (hour < 10) {
    greeting = "Good Morning";
  } else if (hour < 15) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
```
- Digunakan untuk pengaturan nilai dari variabel greeting
```sh
const d = new Date();
  let h = tambah0(d.getHours());
  let m = tambah0(d.getMinutes());
  let s = tambah0(d.getSeconds());
  let time = h + ":" + m + ":" + s;
```
- Proses pengambilan nilai dari variabel jam (h), menit (m) dan detik (s).
```sh
let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
```
- Proses pengambilan variabel hari (day). 
