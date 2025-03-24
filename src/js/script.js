const btn = document.getElementById("menu-btn");
const navbar = document.getElementById("menu");

btn.addEventListener("click", () =>{
    btn.classList.toggle("open");
    navbar.classList.toggle("flex");
    navbar.classList.toggle("hidden");
})