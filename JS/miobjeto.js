const productos = [

    {
        id: 1,
        nombre: "Laptop", 
        precio: 12000
    },


    {
        id: 2, 
        nombre: "Mouse", 
        precio: 300
    },


    {
        id: 3, 
        nombre: "Teclado", 
        precio: 800
    }

];

    console.log('Voy a recorrer el array');
    const long = productos.length;
   
    setTimeout(() => {
    console.log(`El tamaño del arrqay es de: ${long}`);
    console.table(productos,["nombre"]);

   productos.forEach((valor, index)=>{
        console.log(index, valor.nombre, valor.precio);
    })

    let mensaje_estado = document.querySelector('#mensaje_estado')
    console.log(mensaje_estado.textContent);

    mensaje_estado.textContent = `Recorrí ${long} elementos`;
    },5000);