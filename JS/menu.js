let menu_opciones = document.querySelector("#menu_nav");
console.log(menu_opciones);
let opcion1 = "Tormentas";
let opcion2 = "Otoño";
let opcion3 = "Invierno";
let texto_sitio = "Ofertas del día";

let titulo_principal = document.querySelectorAll("#texto_principal");
console.log(menu_opciones);
console.log(titulo_principal[0])
let menu_nuevo = `<nav class="menu_items" id="menu_nav"> 
    <li><a>${opcion1}</a></li>
    <li><a>${opcion2}</a></li>
    <li><a>${opcion3}</a></li>
    </nav>`;
menu_opciones.innerHTML = '';
menu_opciones.innerHTML = menu_nuevo;