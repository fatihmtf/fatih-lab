function ikiEkle(sayi) {
    let sonuc = sayi+2;
    return sonuc;
}
let deger = ikiEkle(10);

function birEkle(sayi) {
    let sonuc = sayi+1;
    return sonuc;
}
let sonDeger = birEkle(deger);

function kareAl(sayi) {
    let kare = sayi**2;
    return kare;
}
let sonuncuDeger = kareAl(sonDeger);

function besEkle(sayi) {
    let sonuc = sayi+5;
    return sonuc;
}
let eklenmisDeger = besEkle(sonuncuDeger);

function altiEkle(sayi) {
    let sonuc = sayi+6;
    return sonuc;
}
let nextDeger = altiEkle(eklenmisDeger);

function onEkle(sayi) {
    let sonuc = sayi+10;
    console.log(sonuc);
}
let tamDeger = onEkle(nextDeger);
