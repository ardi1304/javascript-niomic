function tugas9(){
    // Membuat variabel objek
    let person = {
        name: 'Alice',
        age: 25,
        city: 'Paris',
        occupation: 'Engineer'
    };

    // Menampilkan nilai pada setiap properti objek
    console.log('Nilai properti pada objek:');
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
tugas9();