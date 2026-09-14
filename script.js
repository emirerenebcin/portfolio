// Projeler bölümüne kaydır
function projelerGit() {

    document.getElementById("projeler").scrollIntoView({
        behavior: "smooth"
    });

}


// Proje detaylarını aç
function projeGoster(proje) {

    const modal = document.getElementById("projeModal");

    const baslik = document.getElementById("modalBaslik");
    const aciklama = document.getElementById("modalAciklama");
    const teknoloji = document.getElementById("modalTeknoloji");

    const githubLink = document.getElementById("githubLink");
    const demoLink = document.getElementById("demoLink");


    if (proje === "hastane") {

        baslik.innerText =
            "Hastane Randevu Sistemi";

        aciklama.innerText =
            "Hastaların randevu oluşturabildiği, doktorların hasta kayıtlarını, " +
            "randevuları ve reçeteleri yönetebildiği web tabanlı " +
            "hastane yönetim sistemi.";

        teknoloji.innerText =
            "Teknolojiler: React, JavaScript, Firebase";

        githubLink.href =
            "https://github.com/emirerenebcin/hastane-randevu-sistemi";

        demoLink.href =
            "https://hastane-randevu-sistemi-liart.vercel.app";

        demoLink.style.display = "inline-block";

    }

    else if (proje === "dashboard") {

        baslik.innerText =
            "Yönetim Dashboard";

        aciklama.innerText =
            "Verilerin grafikler, tablolar, filtreler ve özet kartları " +
            "üzerinden görüntülenebildiği modern ve etkileşimli yönetim paneli.";

        teknoloji.innerText =
            "Teknolojiler: React, Vite, Chart.js, JavaScript, CSS";

        githubLink.href =
            "https://github.com/emirerenebcin/yonetim-dashboard";

        demoLink.href =
            "https://yonetim-dashboard.vercel.app/";

        demoLink.style.display = "inline-block";

    }


    modal.style.display = "flex";

}


// Modalı kapat
function modalKapat() {

    document.getElementById("projeModal").style.display = "none";

}


// Modal dışına tıklayınca kapat
window.addEventListener("click", function (event) {

    const modal = document.getElementById("projeModal");

    if (event.target === modal) {
        modalKapat();
    }

});


// ESC tuşuyla modal kapat
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        modalKapat();
    }

});


// İletişim formu
function mesajGonder(event) {

    event.preventDefault();

    const isim =
        document.getElementById("isim").value;

    alert(
        "Teşekkürler " + isim + "!\n\n" +
        "Mesajınız başarıyla alındı."
    );

    event.target.reset();

}