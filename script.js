const translations = {
    tr: {
        name: "Süleyman Emre",
        title: "Kurumsal İletişim Uzmanı",
        rehber: "Rehbere<br>Ekle",
        email: "E-Posta",
        call: "Ara",
        location: "Konum",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        linkedin: "LinkedIn"
    },
    en: {
        name: "Süleyman Emre",
        title: "Corporate Communication Specialist",
        rehber: "Add<br>to Contacts",
        email: "E-Mail",
        call: "Call",
        location: "Location",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        linkedin: "LinkedIn"
    },
    ru: {
        name: "Сулейман Эмре",
        title: "Специалист по корпоративным коммуникациям",
        rehber: "Добавить<br>в контакты",
        email: "Эл. адрес",
        call: "Звонок",
        location: "Местоположение",
        instagram: "Инстаграм",
        facebook: "Фейсбук",
        youtube: "Ютуб",
        linkedin: "Линкедин"
    },
    de: {
        name: "Süleyman Emre",
        title: "Spezialist für Unternehmenskommunikation",
        rehber: "Zum<br>Kontakte hinzufügen",
        email: "E-Mail",
        call: "Anrufen",
        location: "Standort",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        linkedin: "LinkedIn"
    },
    fr: {
        name: "Süleyman Emre",
        title: "Spécialiste en communication d'entreprise",
        rehber: "Ajouter<br>aux contacts",
        email: "E-Mail",
        call: "Appeler",
        location: "Emplacement",
        instagram: "Instagram",
        facebook: "Facebook",
        youtube: "YouTube",
        linkedin: "LinkedIn"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById("language-dropdown").value;
    const content = translations[selectedLanguage];

    // Kontrol: Eğer çeviri mevcut değilse hata vermemesi için
    if (content) {
        document.getElementById("name").innerHTML = content.name;
        document.getElementById("title").innerHTML = content.title;
        document.getElementById("rehber").innerHTML = content.rehber;
        document.getElementById("email").innerHTML = content.email;
        document.getElementById("call").innerHTML = content.call;
        document.getElementById("location").innerHTML = content.location;
        document.getElementById("social-instagram").innerHTML = content.instagram;
        document.getElementById("social-facebook").innerHTML = content.facebook;
        document.getElementById("social-youtube").innerHTML = content.youtube;
        document.getElementById("social-linkedin").innerHTML = content.linkedin;
    }
}
