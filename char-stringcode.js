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
