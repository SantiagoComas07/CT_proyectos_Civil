const img1 = document.querySelector("#Ing_1");
const img2 = document.querySelector("#Ing_2");
const textos = document.querySelectorAll(".contenido-seccion");
const contenedor = document.querySelector("#Imagenes_cambiantes");
let contador = 0;

contenedor.addEventListener("mouseover", () => {
    img1.classList.remove("visible");
    img1.classList.add("hidden");
    img2.classList.add("visible");
    textos.forEach((texto) => texto.classList.add("visible"));

});

contenedor.addEventListener("mouseout", () => {
    img1.classList.add("visible");
    img1.classList.remove("hidden");
    img2.classList.remove("visible");
    textos.forEach((texto) => texto.classList.remove("visible"));

});



