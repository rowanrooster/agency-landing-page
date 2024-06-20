const menuBtn = document.getElementById("menu-btn");
const menuBox = document.getElementById("main-nav");
const menuDec = document.getElementById("triangle");

function toggleMenu() {
    if (menuBox.style.display === "flex") {
        menuBox.style.display = "none";
        menuDec.style.display = "none";
    } else {
        menuBox.style.display = "flex";
        menuDec.style.display = "block";
    }
};

menuBtn.addEventListener("click", toggleMenu);

