const toggleButton = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

const nav = document.querySelector("nav")

// varibles

function toggle() {
    menu.classList.toggle("open");
    toggleButton.classList.toggle("open");

    if (menu.classList.contains("open")) {
        toggleButton.innerHTML = `<i class="fa-solid fa-xmark fa-xl"></i>`;
    } else {
        toggleButton.innerHTML = `<i class="fa-solid fa-bars fa-xl"></i>`;
    }
}

function onScroll() {
    if (window.scrollY > 80) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
}


// functions / takses

toggleButton.addEventListener("click", toggle);
window.addEventListener("scroll", onScroll)

// Eventlistener / Call function 