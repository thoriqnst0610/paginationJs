
document.addEventListener("DOMContentLoaded", () => {

  // membuat data array sebanyak 200
  const pages = [];
  for (let i = 1; i <= 200; i++) {
    pages.push(`Page ${i} Content`);
  }

  const jumlahData = pages.length;
  const dataPerhalaman = 10;
  const jumlahHalaman = jumlahData / dataPerhalaman;

  const halamanSaatIni = "page1";
  const kelipatans = kelipatan(1, jumlahData);
  console.info(kelipatans);

  let nomor = 1;
  for (let i = 1; i <= jumlahData; i++) {

    if (i <= jumlahHalaman) {

      const teks = i;

    }

    if (kelipatans.includes(i)) {


      const ul = document.getElementById("pagination");

      const li = document.createElement("li");
      li.className = "page-item";


      const a = document.createElement("a");
      a.className = "btn page-link";
      a.id = `page-${i}`;
      a.textContent = nomor;
      nomor++;

      a.onclick = function () {

        mengambilDataHalaman(i);

      };


      li.appendChild(a);
      ul.appendChild(li);

    }
  }

  function menampilkanData(valueData) {

    const data = document.getElementById("data");

    const content = document.createElement("div");
    content.id = "content";
    content.textContent = valueData;

    data.appendChild(content);

  }

  function menghapusElement() {

    const todoListBody = document.getElementById("data");
    while (todoListBody.firstChild) {
      todoListBody.removeChild(todoListBody.firstChild);
    }

  }

  function mengambilDataHalaman(dataSaatIni) {

    menghapusElement()
    const startIndex = dataSaatIni - 1;
    const batasData = startIndex + 9;

    for (let i = startIndex; i <= batasData; i++) {
      const ambilData = pages[i];
      menampilkanData(ambilData);
    }
  }

  function kelipatan(angka, jumlahData) {
    let dataArray = [];

    while (angka <= jumlahData) {
      dataArray.push(angka); // Tambahkan angka ke array
      angka += 10; // Lompat ke angka berikutnya (kelipatan 10 ditambah 1)
    }

    return dataArray;
  }

  mengambilDataHalaman(1)

});
