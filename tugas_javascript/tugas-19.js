function tugas19(){
    var isi = "Semangat...";
    console.log(isi.repeat(5));
}
tugas19();

var n = 6;
for (i = 0; i < n; i++) {
    console.log("#".repeat(i+1))
}


function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(10));


function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(10));