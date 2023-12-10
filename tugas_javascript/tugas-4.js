//nilai tinggi badan siswa
var tinggiSiswa1 = 170;
var tinggiSiswa2 = 180;
var tinggiSiswa3 = 165;

//membandingkan tinggi badan untuk menemukan yang tertinggi
if (tinggiSiswa1 > tinggiSiswa2 && tinggiSiswa1 > tinggiSiswa3) {
    console.log("Siswa 1 memiliki tinggi badan tertinggi:", tinggiSiswa1);
    if (tinggiSiswa2 > tinggiSiswa3) {
        console.log('Siswa 2 dengan tinggi badan : ' + tinggiSiswa2);
        console.log('Siswa 3 dengan tinggi badan : ' + tinggiSiswa3); 
    } else {
        console.log('Siswa 3 dengan tinggi badan : ' + tinggiSiswa3);
        console.log('Siswa 2 dengan tinggi badan : ' + tinggiSiswa2); 
    }
} else if (tinggiSiswa2 > tinggiSiswa1 && tinggiSiswa2 > tinggiSiswa3) {
    console.log("Siswa 2 memiliki tinggi badan tertinggi:", tinggiSiswa2);
    if (tinggiSiswa1 > tinggiSiswa3) {
        console.log('Siswa 1 dengan tinggi badan : ' + tinggiSiswa1);
        console.log('Siswa 3 dengan tinggi badan : ' + tinggiSiswa3); 
    } else {
        console.log('Siswa 3 dengan tinggi badan : ' + tinggiSiswa3);
        console.log('Siswa 1 dengan tinggi badan : ' + tinggiSiswa1); 
    }
} else {
    console.log("Siswa 3 memiliki tinggi badan tertinggi:", tinggiSiswa3);
    if (tinggiSiswa1 > tinggiSiswa2) {
        console.log('Siswa 1 dengan tinggi badan : ' + tinggiSiswa1);
        console.log('Siswa 2 dengan tinggi badan : ' + tinggiSiswa2); 
    } else {
        console.log('Siswa 2 dengan tinggi badan : ' + tinggiSiswa2);
        console.log('Siswa 1 dengan tinggi badan : ' + tinggiSiswa1); 
    }
}
