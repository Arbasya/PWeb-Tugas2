function hitung(aa, bb) {
  return aa * bb;
}
let aa = 7;
let bb = 8;
let hasil = hitung(aa, bb);
document.write("Bilangan dari Tabel A Baris ke 2 = " + aa + "<br>");
document.write("Bilangan dari Tabel B Baris ke 2 = " + bb + "<br>");

// alert(greet);
function button() {
  alert("Bilangan A x B = " + hasil);
}

function waktu() {
  let nama = prompt("silahkan isi nama anda");
  const hour = new Date().getHours();
  let greeting;

  if (hour < 10) {
    greeting = "Good Morning";
  } else if (hour < 15) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  function tambah0(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let h = tambah0(d.getHours());
  let m = tambah0(d.getMinutes());
  let s = tambah0(d.getSeconds());
  let time = h + ":" + m + ":" + s;

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

  let greet =
    "Its " + time + ", " + greeting + " " + nama + ", Happy " + day + ".";
  alert(greet);
}
