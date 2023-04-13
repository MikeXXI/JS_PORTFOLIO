//Recupère les modals
const overlay1 = document.querySelector("#overlay1");
const overlay2 = document.querySelector("#overlay2");
const overlay4 = document.querySelector("#overlay4");

const modalBtn1 = document.getElementById("modal-btn1");
const modalBtn2 = document.getElementById("modal-btn2");
const modalBtn4 = document.getElementById("modal-btn4");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal4 = document.getElementById("modal4");

const open_modal1 = document.getElementById("open1");
const open_modal2 = document.getElementById("open2");
const open_modal4 = document.getElementById("open4");

//Fonction pour ouvrir et fermer les modals
// const openPopup = (openLaModal, openOverlay) => {
//     openLaModal.style.opacity = "80%";
//     openOverlay.style.opacity = "1";
// };
// const closePopup = (closeLaModal, closeOverlay) => {
//     closeLaModal.style.opacity = "0";
//     closeOverlay.style.opacity = "0";
// };

// Modal BIO
if (localStorage.getItem("popupClosedBio")) {
    modal1.style.display = "none";
    overlay1.style.display = "none";
}
modalBtn1.addEventListener("click", (e) => {
    localStorage.setItem("popupClosedBio", true);
    e.preventDefault();
    modal1.style.opacity = "0";
    overlay1.style.opacity = "0";
});
open_modal1.addEventListener("click", (e) => {    
    localStorage.setItem("popupClosedBio", false);
    e.preventDefault();
    modal1.style.opacity = "80%";
    overlay1.style.opacity = "1";
});

// Modal Projet 
if (localStorage.getItem("popupClosedProjet")) {
    modal2.style.display = "none";
    overlay2.style.display = "none";
}
modalBtn2.addEventListener("click", (e) => {
    localStorage.setItem("popupClosedProjet", true);
    e.preventDefault();
    modal2.style.opacity = "0";
    overlay2.style.opacity = "0";
});
open_modal2.addEventListener("click", (e) => {    
    localStorage.setItem("popupClosedProjet", false);
    e.preventDefault();
    modal2.style.opacity = "80%";
    overlay2.style.opacity = "1";
});

// Modal contact 
if (localStorage.getItem("popupClosedContact")) {
    modal4.style.display = "none";
    overlay4.style.display = "none";
}
modalBtn4.addEventListener("click", (e) => {
    localStorage.setItem("popupClosedContact", true);
    e.preventDefault();
    modal4.style.opacity = "0";
    overlay4.style.opacity = "0";
});
open_modal4.addEventListener("click", (e) => {    
    localStorage.setItem("popupClosedContact", false);
    e.preventDefault();
    modal4.style.opacity = "80%";
    overlay4.style.opacity = "1";
});

