const nav = document.getElementById('sidenav');
const toggler = document.getElementById('toggler');
const overlay = document.getElementById('overlay');

toggler.addEventListener('click', function (e) {
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
    toggler.classList.toggle("pull");
    if (toggler.classList.item("pull")) {
        toggler.innerText = "CLOSE"
    }
    else {
        toggler.innerText = "MENU"
    }
})


overlay.addEventListener("click", function (e) {
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
    toggler.classList.toggle("pull");
    if (toggler.classList.item("pull")) {
        toggler.innerText = "CLOSE"
    }
    else {
        toggler.innerText = "MENU"
    }
})