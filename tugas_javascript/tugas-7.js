function tugas7(){
    // Mendefinisikan array dengan tinggi badan
    let tinggiBadan = [160, 165, 170, 175, 168, 172, 180, 158, 182, 169];

    // Menampilkan isi array dengan perulangan biasa (for loop)
    console.log("Menampilkan dengan perulangan biasa:");
    for (let i = 0; i < tinggiBadan.length; i++) {
    console.log(tinggiBadan[i]);
    }

    // Menampilkan isi array dengan for...of loop
    console.log("\nMenampilkan dengan for...of loop:");
    for (let tinggi of tinggiBadan) {
    console.log(tinggi);
    }
}
tugas7();

// Perulangan Biasa (for loop):
// Menggunakan indeks (variabel i) untuk mengakses setiap elemen array.
// Memerlukan penanganan indeks dengan tinggiBadan[i].
// Cocok digunakan jika Anda membutuhkan akses khusus ke indeks array atau perlu mengubah nilai pada indeks tertentu.

// For...of Loop:
// Secara otomatis mengakses setiap elemen array tanpa memerlukan indeks tambahan.
// Lebih sederhana dan bersih karena tidak memerlukan penanganan indeks.
// Cocok digunakan jika Anda hanya perlu mengakses nilai dari array dan tidak memerlukan indeks.