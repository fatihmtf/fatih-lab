// --- DOM ELEMENTLERİNİ SEÇME (Selectors) ---
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const filterInput = document.querySelector("#filter-input");
const clearButton = document.querySelector("#clear-todos");

// --- UYGULAMA BAŞLANGIÇ AYARLARI ---
// Sayfa yüklendiğinde HTML'deki örnek todoları temizleyelim
document.addEventListener("DOMContentLoaded", function() {
    todoList.innerHTML = ""; // Listeyi boşalt
});

// --- OLAY DİNLEYİCİLERİ (Event Listeners) ---
form.addEventListener("submit", addTodo); // Form gönderilince (Ekle butonu veya Enter)
todoList.addEventListener("click", deleteTodo); // Listeye tıklanınca (Silme x'i için)
filterInput.addEventListener("keyup", filterTodos); // Arama kutusuna yazınca
clearButton.addEventListener("click", clearAllTodos); // Tümünü temizle butonuna basınca


// --- FONKSİYONLAR ---

// 1. Yeni Todo Ekleme
function addTodo(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    const newTodo = input.value.trim(); // Boşlukları temizle

    if (newTodo === "") {
        alert("Lütfen bir todo giriniz!");
        return; // Fonksiyondan çık
    }

    // A. Yeni bir list öğesi (li) oluştur
    const li = document.createElement("li");
    li.className = "list-group-item"; // Bootstrap sınıfı
    li.appendChild(document.createTextNode(newTodo)); // Metni içine ekle

    // B. Silme linkini (x) oluştur
    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.className = "delete-item";
    deleteLink.innerHTML = "x"; // x işaretini koy

    // C. x linkini li'ye, li'yi de ul listesine ekle
    li.appendChild(deleteLink);
    todoList.appendChild(li);

    // D. İnput kutusunu temizle
    input.value = "";
}

// 2. Tek Bir Todo Silme (Event Delegation)
function deleteTodo(e) {
    // Eğer tıklanan elementin sınıfı 'delete-item' ise (yani x'e tıklandıysa)
    if (e.target.className === "delete-item") {
        // Tıklanan x'in babasının babasını (yani komple li'yi) sil
        e.target.parentElement.remove();
    }
    // Olayın HTML linki gibi davranmasını engelle
    e.preventDefault();
}

// 3. Todoları Filtreleme/Arama
function filterTodos(e) {
    const text = e.target.value.toLowerCase(); // Aranan metni küçült
    const listItems = document.querySelectorAll(".list-group-item"); // Tüm todoları seç

    listItems.forEach(function(item) {
        const itemText = item.firstChild.textContent.toLowerCase(); // Todo metnini al ve küçült
        
        // Eğer aranan metin todo içinde VARSA
        if (itemText.indexOf(text) !== -1) {
            item.setAttribute("style", "display: flex !important"); // Göster (Bootstrap flex çakışmasını önlemek için !important kullandık)
        } else {
            // Yoksa GİZLE
            item.setAttribute("style", "display: none !important");
        }
    });
}

// 4. Tüm Todoları Temizle
function clearAllTodos() {
    // todoList'in içindeki her şeyi sil
    todoList.innerHTML = "";
    
    // Alternatif ve daha performanslı yöntem:
    // while(todoList.firstChild) {
    //     todoList.removeChild(todoList.firstChild);
    // }
}

// console.log(document.contentType); //Belgenin kimlik kartına bakar

// console.log(document.location); //Sayfanın adresine dair tüm bilgileri içeren dev bir paketi (objeyi) getirir

// console.log(document.location.href); //Sayfanın tam web adresini (URL) bir metin olarak getirir

// console.log(document.location.hostname); //Sadece sitenin alan adını getirir

// console.log(document.location.port); //Eğer varsa, sitenin çalıştığı port numarasını getirir

// console.log(document.location.pathname); //Alan adından sonra gelen dosya yolunu getirir

// console.log(document.location.characterSet); //Sayfanın hangi karakter kodlamasını kullandığını söyler

// console.log(document.title); //Sayfanın sekmesinde yazan başlığı getirir.

// console.log(document.links.item(4).id); //Bu biraz spesifik bir sorgu. Şunu der: "Sayfadaki tüm linkleri (<a> etiketlerini) bir listeye diz. 
//                                         //Bu listenin 5. sırasındaki (yazılımda saymaya 0'dan başlarız, o yüzden 4 aslında 5'incidir) 
//                                         // linkin ID ismini bana getir

// console.log(document.links.item(4).classList[3]); //Sayfadaki 5. linkin sahip olduğu 4. CSS sınıf ismini (kıyafetini) getirir

// console.log(document.forms.item(1).children); //Sayfadaki 2. formun içindeki tüm alt elemanları (çocuk etiketleri) bir liste olarak gösterir

// console.log(document.getElementById("todo-form")); //Tüm sayfada arama başlatır sadece id="todo-form" yazan etiketi bulmaya çalışır 
//                                                    //sayfada varsa tüm özelliklerini obje olarak konsola yazdırır

// // const x = document.getElementsByClassName("card-header bg-white");
// // console.log(x);

// // console.log(document.getElementsByTagName("div"));
// // const tagName = document.getElementsByTagName("div");
// // console.log(tagName);

// // console.log(typeof document.querySelector("#todo-form"));
// // console.log(document.querySelector("#todo-form").children);
//ANNEDEN ÇOCUĞA ERİŞMEK

const todoListe = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item");
const card = document.querySelector(".card");

let value;
value = todoListe;
value = todoListe.children;
value = todoListe.children[3].textContent = "DEĞİŞİK";










console.log(value);








