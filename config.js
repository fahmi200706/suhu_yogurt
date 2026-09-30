/* =========================================================
   PENGATURAN - Configuration File
   =========================================================
   File ini yang menyimpan semua pengaturan website.
   Kalau perlu ganti alamat server atau acuan suhu,
   cukup ubah file INI, tidak perlu menyentuh index.html.

   Isi file ini bukan rahasia dan memang terlihat publik
   di browser. Yang melindungi data adalah "Rules" Firebase,
   bukan dengan menyembunyikan file ini.

   Pakai "var" supaya nilainya jadi variabel global yang
   pasti terbaca oleh script berikutnya.
   ========================================================= */

var KONFIGURASI = {

  /* ---------- Firebase Realtime Database ---------- */
  firebase: {

    // Alamat database. Salin dari:
    // Firebase Console > Realtime Database > Database URL
    //
    // Database proyek tim:
    //   https://monitoring-plain-yogurt-default-rtdb.firebaseio.com
    //
    // Kalau masih tertulis YOUR-PROJECT-ID, berarti belum diisi.
    url: 'https://monitoring-plain-yogurt-default-rtdb.firebaseio.com',

    // Node tempat data sensor disimpan.
    // ESP32 mengirim ke:  <url>/<node>.json
    //
    // Node yang dipakai tim: "data"
    //   https://monitoring-plain-yogurt-default-rtdb.firebaseio.com/data.json
    node: 'data'

  },

  /* ---------- Cara halaman mengambil data ---------- */
  pembacaan: {

    // Berapa milidetik halaman mengambil data baru dari Firebase.
    // Jangan lebih cepat dari 2000 ms.
    jedaAmbil: 2000,

    // Berapa milidetik satu titik disimpan di grafik.
    jedaGrafik: 2000,

    // Berapa titik yang disimpan di grafik.
    // 300 titik x 2 detik = 10 menit riwayat.
    maksTitik: 300

  },

  /* ---------- Acuan ruang fermentasi plain yogurt ---------- */
  // Suhu optimal 42,0 - 45,0 °C
  // Kelembapan optimal 70 - 80 %RH
  acuan: {

    suhu: {
      set: 43.5,      // nilai tengah yang dituju
      min: 42.0,      // batas bawah optimal
      max: 45.0,      // batas atas optimal
      aman: 45.0      // di atas ini kipas_pendingin menyala
    },

    lembap: {
      set: 75,
      min: 70,
      max: 80
    }

  },

  /* ---------- Seberapa cepat nilai contoh bergerak ---------- */
  // Dipakai hanya kalau Firebase belum terhubung.
  // Makin besar, makin cepat nilainya bergerak ke setpoint.
  simulasi: {
    tarikan: 0.08,   // seberapa kuat nilai ditarik ke setpoint
    acuanSuhu: 0.25,   // besar fluktuasi acak suhu (°C)
    acuanLembap: 1.2   // besar fluktuasi acak kelembapan (%RH)
  }

};
