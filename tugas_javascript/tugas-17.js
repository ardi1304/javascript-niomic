function tugas17(){
    var kata1 = 'Saya beLajar BahaSa PeMrograman deNgan khUsuk';
    var kata2 = 'Allen SedAng MemAmcinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.';
    var kata3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    console.log(kata1.toLocaleLowerCase());
    console.log(kata1.toLocaleUpperCase());
    console.log(kata2.toLocaleLowerCase());
    console.log(kata2.toLocaleUpperCase());
    var kata4 = kata3.substring(0, 6);
    console.log(kata4.charCodeAt(0-1-2-3-4-5-6)); 
}
tugas17();


const kalimat = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const enamKarakterPertama = kalimat.substring(0, 6);

const kodeASCII = [];
for (let i = 0; i < enamKarakterPertama.length; i++) {
  kodeASCII.push(enamKarakterPertama.charCodeAt(i));
}

console.log(kodeASCII);
