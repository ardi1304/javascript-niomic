//mengubah kode karakter menjadi kode ASCII
function stringToAscii(){
    var kode = 'abcdefghijklmnopqrstuvwxyz';
    console.log(kode.charCodeAt(0));
}
stringToAscii();



//merubah menjadi kode ASCII menjadi karakter 
function codePoint(){
    console.log(String.fromCodePoint(65));
    console.log(String.fromCodePoint(0x2615, 0x2744, 0x2f40));
}
codePoint();


//merubah string lower, upper
function ubah(){
    var huruf = 'Ardi Andri';
    console.log(huruf.toLocaleLowerCase());
    console.log(huruf.toLocaleUpperCase());
}
ubah();


//Latihan 23: fungsi char at : menampilkan karakter  tertentu sesuai posisi yang di tentukan
function posisiKarakter(){
    var poskrktr = 'Nama Saya Ardi';
    console.log(poskrktr.charAt(13));
    console.log(poskrktr.substring(10, 14)); //Latihan 24 Substring
}
posisiKarakter();

//Latihan 31 string includes : hasil dari string ini adalah boolean
function ejaan(){
    var inc = 'perjalan hidup';
     console.log(inc.includes('Jalan'));
}
ejaan();

//latihan 32 start with dan end with : menunjukan hasil boolean dari kata akhir atau kata depan yang ditentukan
function startEnd(){
    var kata = "pertumbahan ekonomi massive";
    console.log(kata.startsWith("pertumbuhan"));
}
startEnd();