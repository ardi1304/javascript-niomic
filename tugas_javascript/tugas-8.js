function tugas8(){
    // Membuat variabel objek
    let orang = {
        nama: 'John',
        umur: 25,
        pekerjaan: 'Programmer'
    };

    // Menampilkan nilai awal dari objek
    console.log("Nilai awal dari objek 'orang':");
    console.log(orang);

    // Melakukan perubahan nilai pada objek
    orang.umur = 30;
    orang.pekerjaan = 'Developer';

    // Menampilkan kembali nilai setelah perubahan dilakukan
    console.log("\nSetelah perubahan nilai:");
    console.log(orang);
}
tugas8();