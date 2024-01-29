document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function (e) {
        e.stopPropagation();
        navMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
        const isClickInsideNav = navMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);

        if (!isClickInsideNav && !isClickOnHamburger) {
            navMenu.classList.remove("show");
        }
    });
});


window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const dropDown = document.querySelectorAll("#dropdown-menu");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#000";
        dropDown.forEach((element) => {
            element.style.backgroundColor = "#000";
        });
    } else {
        navbar.style.backgroundColor = "#00000081";
        dropDown.forEach((element) => {
            element.style.backgroundColor = "#00000081";
        });
    }
});

const searchButton = document.querySelector("#search");
const searchBox = document.querySelector("#search-popup");
const searchInput = document.querySelector("#search-input");

function popSearchBox() {
    searchBox.style.display = "block";
}

function closeSearchBox() {
    searchBox.style.display = "none";
}

function exitSearch(e) {
    if (!searchInput.contains(e.target)) {
        closeSearchBox();
        document.removeEventListener("click", exitSearch);
    }
}

searchButton.addEventListener("click", (e) => {
    popSearchBox();
    document.addEventListener("click", exitSearch);
    e.stopPropagation();
});

searchBox.style.display = "none";
