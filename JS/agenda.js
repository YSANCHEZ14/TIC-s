document.write('Una agenda');
let seguir= true;
let datos= [];

while(seguir) { 
    let opcion= parseInt(prompt('Escoge una opcion: \n 1:Agregar \n 2:Listar \n 3: Salir'));
    switch(opcion) {
        case 1:
            alert('Escogiste la opcion 1');
            let nombre =prompt('Ingresa tu nombre');
            //ingresar el nombre al array
            datos.push(nombre);
            console.table(datos);
            seguir = false
            break;
        case 2:
            alert('Escogiste la opcion 2');
            break;
        case 3:
            alert('Escogiste 3: Salir');
            break;
        default:
            alert('No recibí una opción valida');
            break;}
} 