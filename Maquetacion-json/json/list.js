document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('listaa');
    const listaGuardada = JSON.parse(localStorage.getItem('misCharlas')) || [];

    if (listaGuardada.length === 0) {
        contenedor.innerHTML = "<p>No hay nadie registrado todavía.</p>";
        return;
    }

    let acumuladorDeHTML = "<ul>";

    listaGuardada.forEach((registro) => {
        acumuladorDeHTML += `
            <li>
                <bold>${registro.nombre}</bold> Charla: 
                <bold>${registro.charla}</bold> Cupo: ${registro.cupo}
            </li><br>`;
    });

    acumuladorDeHTML += "</ul>";
    contenedor.innerHTML = acumuladorDeHTML;
});
