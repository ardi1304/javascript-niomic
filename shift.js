function panggilShift() {
    var kota = ['jakarta', 'malang', 'surabaya', 'bandung'];
    console.log(kota); 
    kota.shift();
    console.log(kota);
    kota.pop();
    
    return kota;    
}

console.log(panggilShift());

