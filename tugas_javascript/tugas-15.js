// Fungsi untuk menghitung panjang sisi AC pada segitiga siku-siku
function panjangAC(AB, BC) {
    
    // Menggunakan teorema Pythagoras: a^2 + b^2 = c^2
    const AC = Math.sqrt(Math.pow(AB, 2) + Math.pow(BC, 2));
    return AC;
}

// Nilai sisi AB dan BC yang diberikan
const nilaiAB = 8;
const nilaiBC = 6;

// Menghitung panjang sisi AC
const panjangACSegitiga = panjangAC(nilaiAB, nilaiBC);

// Menampilkan output
console.log(`Nilai AB = ${nilaiAB}`);
console.log(`Nilai BC = ${nilaiBC}`);
console.log(`Panjang sisi AC pada segitiga siku-siku tersebut adalah = ${panjangACSegitiga}` + ' cm');
