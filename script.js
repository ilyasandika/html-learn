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
