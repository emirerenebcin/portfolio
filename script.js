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
            "Hastaların kayıt olabildiği, randevu oluşturabildiği, " +
            "doktorların randevuları ve reçeteleri yönetebildiği " +
            "web tabanlı hastane yönetim sistemi.";

        teknoloji.innerText =
            "Teknolojiler: React, JavaScript, Firebase";

        githubLink.href =
            "https://github.com/emirerenebcin";

        demoLink.href = "#";

    }


    else if (proje === "dashboard") {

        baslik.innerText =
            "Yönetim Dashboard";

        aciklama.innerText =
            "Verilerin grafikler, tablolar ve özet kartları " +
            "üzerinden görüntülenebildiği modern yönetim paneli.";

        teknoloji.innerText =
            "Teknolojiler: React, Chart.js, CSS";

        githubLink.href =
            "https://github.com/emirerenebcin";

        demoLink.href = "#";

    }


    modal.style.display = "flex";

}


// Modalı kapat
function modalKapat() {

    document.getElementById("projeModal").style.display = "none";

}


// İletişim formu
function mesajGonder(event) {

    event.preventDefault();

    const isim =
        document.getElementById("isim").value;

    alert(
        "Teşekkürler " + isim + "!\n\n" +
        "Mesajınız başarıyla alındı."
    );

}