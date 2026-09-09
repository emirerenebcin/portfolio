function projelerGit() {

    document.getElementById("projeler").scrollIntoView({
        behavior: "smooth"
    });

}


function projeGoster(proje) {

    const modal = document.getElementById("projeModal");

    const baslik = document.getElementById("modalBaslik");

    const aciklama = document.getElementById("modalAciklama");

    const teknoloji = document.getElementById("modalTeknoloji");

    const githubLink = document.getElementById("githubLink");

    const demoLink = document.getElementById("demoLink");


    if (proje === "hastane") {

        baslik.innerText = "Hastane Randevu Sistemi";

        aciklama.innerText =
            "Hastaların randevu oluşturabildiği, " +
            "doktorların randevuları yönetebildiği " +
            "web tabanlı hastane yönetim sistemi.";

        teknoloji.innerText =
            "Teknolojiler: React, JavaScript, Firebase";

        githubLink.href = "#";

        demoLink.href = "#";

    }


    else if (proje === "dashboard") {

        baslik.innerText = "Yönetim Dashboard";

        aciklama.innerText =
            "Verilerin grafikler ve tablolar üzerinden " +
            "görüntülenebildiği modern yönetim paneli.";

        teknoloji.innerText =
            "Teknolojiler: React, Chart.js, CSS";

        githubLink.href = "#";

        demoLink.href = "#";

    }


    modal.style.display = "flex";

}


function modalKapat() {

    document.getElementById("projeModal").style.display = "none";

}
function mesajGonder(event) {

    event.preventDefault();

    const isim = document.getElementById("isim").value;

    alert(
        "Teşekkürler " + isim + "!\n\n" +
        "Mesajınız başarıyla alındı."
    );

}