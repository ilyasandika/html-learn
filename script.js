// Kelompok 14 - Tugas 2 Pemrograman Web I

// NIM     : 220401070205
// Nama    : Ilyas Andika

// NIM     : 220401010058
// Nama    : Aan Fadillah Riwahuda

// NIM     : 220401070206
// Nama    : Triani Purnama Sari

const talkBtn = document.getElementById("talkBtn");
const structureBtn = document.getElementById("structureBtn");
const tagBtn = document.getElementById("tagBtn");
const attributeBtn = document.getElementById("attributeBtn");
const semanticBtn = document.getElementById("semanticBtn");
const formBtn = document.getElementById("formBtn");
const mmBtn = document.getElementById("mmBtn");
const dialog = document.getElementById("dialog");
const talk = document.getElementById("talk");
const talkForm = document.getElementById("talkForm");
const headerDialog = document.getElementById("headerDialog");
const iframe = document.getElementById("iframe");
const firstProfile = document.getElementById("firstProfile");
const secondProfile = document.getElementById("secondProfile");
const thirdProfile = document.getElementById("thirdProfile");
const profile = document.getElementById("profile");
const tableProfile = document.getElementById("tableProfile");
const fullName = document.getElementById("fullName");
const nim = document.getElementById("nim");
const address = document.getElementById("address");
const audioBtn = document.getElementById("audioBtn");
const audio = document.getElementById("audio");

structureBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/U4nbKMJRVaw");
});

tagBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/cUWBYzA6M-8");
});

attributeBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/29IbTXYRo5U");
});

semanticBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/o3m15BWi2HM");
});

formBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/LQf_Jj7jbCI");
});

mmBtn.addEventListener("click", function () {
    dialog.showModal();
    headerDialog.innerHTML = this.innerHTML;
    iframe.setAttribute("src", "https://www.youtube.com/embed/SQMruNuafHk");
});

talkBtn.addEventListener("click", function () {
    talk.showModal();
    headerDialog.innerHTML = this.innerHTML;
});

talkForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "/index.html";
});

firstProfile.addEventListener("click", function () {
    profile.showModal();
    fullName.innerHTML = "Ilyas Andika";
    nim.innerHTML = "220401070205";
    address.innerHTML = "Indonesia";
});

secondProfile.addEventListener("click", function () {
    profile.showModal();
    fullName.innerHTML = "Triani Purnama Sari";
    nim.innerHTML = "220401070206";
    address.innerHTML = "Indonesia";
});

thirdProfile.addEventListener("click", function () {
    profile.showModal();
    fullName.innerHTML = "Aan Fadillah Riwahuda";
    nim.innerHTML = "220401010058";
    address.innerHTML = "Japan";
});

audioBtn.addEventListener("click", function () {
    let attribute = audioBtn.getAttribute("src");
    if (attribute == "img/play.png") {
        audioBtn.setAttribute("src", "img/pause.png");
        audio.play();
    } else {
        audioBtn.setAttribute("src", "img/play.png");
        audio.pause();
    }
});
