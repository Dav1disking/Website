const toggleButton = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

function toggle() {
    menu.classList.toggle("open");
    toggleButton.classList.toggle("open");

    if (menu.classList.contains("open")) {
        toggleButton.innerHTML = `<i class="fa-solid fa-xmark fa-xl"></i>`;
    } else {
        toggleButton.innerHTML = `<i class="fa-solid fa-bars fa-xl"></i>`;
    }
}

toggleButton.addEventListener("click", toggle);