let seguir = true;
let datos = [];

while(seguir) {
let option = parseInt(prompt('Escoge una opción: \n 1-Agregar \n 2-Listar \n 3-Salir'));
switch(option){
    case 1:
        alert('Escogiste la opción 1');
        let nombre = prompt('Ingresa tu nombre');
        let id = prompt ('Ingresa tu id');
        let edad = parseInt(prompt('Ingresa tu edad'));
        let telefono = promt ('Ingresa tu teléfono');
      let agenta = (id, nombre, telefono, edad);
      agenda.id = id;
      agenda.nombre = nombre;
      agenda.edad= edad;
      agenda.telefono = telefono;
}
}

        datos.push(agenda);
        alert('Contacto creado');
        break;
    case 2:
        let todos = '';

            for(let i = 0; i < datos.length; i++){
                todos += 'Nombre: ' + datos[i].nombre + '\n';
                todos += 'Apellido: ' + datos[i].apellido + '\n';
                todos += 'Id: ' + datos[i].id + '\n';
                todos += 'Telefono: ' + datos[i].telefono + '\n';
                todos += 'Edad: ' + datos[i].edad + '\n\n';
            }

            if(datos.length === 0){
                alert("No hay contactos registrados");
            } else {
                alert(todos);
            }
            break;
        
    case 3:
        alert('Escogiste 3 salir');
        if (confirm('Desea salir?')){
            seguir = false;
        }   
        break;
    default:
        alert('No recibí una opción válida');
        break;
    }
    console.log(agenda);
}