
//EHLİYET ALIP ALAMAMA DURUMU ALGORİTMASI
let ad = prompt("AD GİRİNİZ");
let soyad = prompt("SOYAD GİRİNİZ");
let tckn = Number(prompt("TC GİRİNİZ"));
let yas = Number(prompt("YAŞINIZI GİRİNİZ"));
let para = Number(prompt("PARA MİKTARI GİRİNİZ"));
if(ad != " " && soyad != " ") {
  if(tckn != " ") {
     if(yas > 18 && para > 5000) {
         console.log("EHLİYET ALABİLİRSİNİZ");
     }
     else if(yas > 18 && para < 5000) {
         console.log("EHLİYET ALAMAZSINIZ:(");
     }
     else if(yas < 18 && para > 5000) {
         console.log("EHLİYET ALAMAZSINIZ:(");
     }
     else {
         console.log("EHLİYET ALAMAZSINIZ:(");
     }
  }
}





