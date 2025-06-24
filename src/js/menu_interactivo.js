const nav = document.querySelector("#Menu");
const abrir = document.querySelector("#btn_menu_abrir");
const cerrar = document.querySelector("#btn_menu_cerrar");


abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");

})



cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");

})