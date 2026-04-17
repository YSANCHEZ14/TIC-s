const form = document.getElementById("formProducto");
const tabla = document.getElementById("tablaProductos");
const contenedor = document.getElementById("contenedorTabla");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const descripcion = document.getElementById("descripcion").value;
    const departamento = document.getElementById("departamento").value;

    if (id === "" || descripcion === "" || departamento === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const producto = { id, descripcion, departamento };

    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    productos.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));

    form.reset();

    alert("Producto guardado");

    renderizar();
});

function renderizar(filtro = "Todos") {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    tabla.innerHTML = "";

    if (filtro !== "Todos") {
        productos = productos.filter(p => p.departamento === filtro);
    }

    productos.forEach(p => {
        tabla.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.descripcion}</td>
                <td>${p.departamento}</td>
            </tr>
        `;
    });
}

function toggleLista() {
    if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }
}

renderizar();