function arraySplice(){
    var brandMobil = ['honda', 'toyota', 'hyundai', 'mazda'];
    console.log(brandMobil);
    brandMobil.splice(1,0,'suzuki');
    console.log(brandMobil);
    brandMobil.splice(2,1);
    console.log(brandMobil);
    brandMobil.unshift('wuling', 'kia'); //menambahkan index paling awal
    return brandMobil;
}
console.log(arraySplice());
