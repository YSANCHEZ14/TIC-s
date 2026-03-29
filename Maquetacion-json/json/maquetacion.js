
document.addEventListener('DOMContentLoaded', () => {
    const participante = document.getElementById('participante');
    const cuenta = document.getElementById('cuenta');
    const charla = document.getElementById('charla');
    const cupo = document.getElementById('cupo');
    const registrar = document.getElementById('btnRegistrar');

    registrar.addEventListener('click', () => {
        if (participante.value && cuenta.value && charla.value && cupo.value) {
            const nuevoRegistro = {
                nombre: participante.value,
                cuenta: cuenta.value,
                charla: charla.value,
                cupo: cupo.value
            };

            let listaEnLaLibreta = JSON.parse(localStorage.getItem('misCharlas')) || [];
            listaEnLaLibreta.push(nuevoRegistro);
            localStorage.setItem('misCharlas', JSON.stringify(listaEnLaLibreta));
            participante.value = cuenta.value = charla.value = cupo.value = '';
            
        } else {
            alert("Llena todos los campos, por favor.");
        }
    });
});