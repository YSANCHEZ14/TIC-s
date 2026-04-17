document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('listaa');
    const listaGuardada = JSON.parse(localStorage.getItem('misProductos')) || [];

    if (listaGuardada.length === 0) {
        contenedor.innerHTML = "<p>No hay nadie registrado todavía.</p>";
        return;
    }

    let acumuladorDeHTML = "<ul>";

    listaGuardada.forEach((registro) => {
        acumuladorDeHTML += `
            <li>
                <bold>${registro.idg}</bold> Charla:<bold>${registro.description}</bold> Cupo: ${registro.departamento}
            </li><br>`;
    });

    acumuladorDeHTML += "</ul>";
    contenedor.innerHTML = acumuladorDeHTML;
});