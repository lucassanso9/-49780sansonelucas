///Identificacion de productos y propiedades

/* 
function Producto(nombre, especificaciones, identificador, precio) {
    this.nombre = nombre.toUpperCase();
    this.especificaciones = especificaciones;
    this.identificador = identificador;
    this.precio = parseFloat(precio.replace('$', ''));
}

const PRODUCTO1 = new Producto("Producto1", "Remera", "01", "2000");
const PRODUCTO2 = new Producto("Producto2", "Short", "02", "1500");
const PRODUCTO3 = new Producto("Producto3", "Medias", "03", "3500");

let seleccion;
let productoSeleccionado;

//El siguiente codigo muestra los productos en la consola
console.log(PRODUCTO1);
console.log(PRODUCTO2);
console.log(PRODUCTO3);

//Mostrar el producto seleccionado
do {
    seleccion = prompt("Seleccione un producto escribiendo: 1, 2 o 3");

    if (seleccion === "1") {
        productoSeleccionado = PRODUCTO1;
    } else if (seleccion === "2") {
        productoSeleccionado = PRODUCTO2;
    } else if (seleccion === "3") {
        productoSeleccionado = PRODUCTO3;
    } else {
        console.log("Opción no válida. Por favor, seleccione 1, 2 o 3.");
        continue;
    }

    console.log("Información del Producto seleccionado:");
    console.log("Nombre: " + productoSeleccionado.nombre);
    console.log("Especificaciones: " + productoSeleccionado.especificaciones);
    console.log("Identificador: " + productoSeleccionado.identificador);
    console.log("Precio: $" + productoSeleccionado.precio);

    let seleccionNueva;
    do {
        seleccionNueva = prompt("¿Desea seleccionar otro producto? (Sí/No)").toLowerCase();
    } while (seleccionNueva !== "si" && seleccionNueva !== "sí" && seleccionNueva !== "no");

    if (seleccionNueva !== "si" && seleccionNueva !== "sí") {
        break; // Sale del bucle principal si la respuesta no es "si" o "sí"
    }
} while (true); // Bucle principal infinito



console.log("Gracias por visitar nuestra tienda.");
 */


//No se por que pero al iniciar la consola no se muestran los productos en la consola del navegador, sólo después de haber apretado f5 o "refrescar" la pestaña.
function Producto(nombre, especificaciones, identificador, precio, cantidades) {
    this.nombre = nombre.toUpperCase();
    this.especificaciones = especificaciones;
    this.identificador = identificador;
    this.precio = parseFloat(precio.replace('$', ''));
    this.cantidades = ("");
}

const PRODUCTO1 = new Producto("Producto1", "Remera", "01", "2000", 0);
const PRODUCTO2 = new Producto("Producto2", "Short", "02", "1500");
const PRODUCTO3 = new Producto("Producto3", "Medias", "03", "3500");

let seleccion;
let productoSeleccionado;
let valor;
let cantidadesSeleccionadas;

//El siguiente codigo muestra los productos en la consola

console.log(PRODUCTO1); 
console.log(PRODUCTO2);
console.log(PRODUCTO3);

//Mostrar el producto seleccionado

do {
    seleccion = prompt("Seleccione un producto escribiendo: 1, 2 o 3");

    if (seleccion === "1") {
        console.log(PRODUCTO1);
        productoSeleccionado = PRODUCTO1;       
        cantidadesSeleccionadas = prompt (("¿Cuántas unidades quiere agregar?")) + PRODUCTO1.cantidades;
        valor = PRODUCTO1.precio * cantidadesSeleccionadas;
    } else if (seleccion === "2") {
        productoSeleccionado = PRODUCTO2;
    } else if (seleccion === "3") {
        productoSeleccionado = PRODUCTO3;
    } else {
        console.log("Opción no válida. Por favor, seleccione 1, 2 o 3.");
        continue;
    }
    
    console.log("Información del Producto seleccionado:");
    console.log("Nombre: " + productoSeleccionado.nombre);
    console.log("Especificaciones: " + productoSeleccionado.especificaciones);
    console.log("Identificador: " + productoSeleccionado.identificador);
    console.log("Precio: $" + productoSeleccionado.precio);
    console.log("Total: " + valor);

    let seleccionProducto;
    do {
        seleccionProducto = prompt("¿Desea agregar este producto al carrito? (Sí/No)").toLowerCase();
    } while (seleccionProducto !== "si" && seleccionProducto !== "sí" && seleccionProducto !== "no");

    if (seleccionProducto !== "si" && seleccionProducto !== "sí") {
        break; // Sale del bucle principal si la respuesta no es "si" o "sí"
    }
    console.log("agregaste" + seleccionProducto,);
} while (true); // Bucle principal infinito



console.log(cantidadesSeleccionadas + "Gracias por visitar nuestra tienda.");





//Usar un continue para recrear una seccion donde hay cards de productos disponibles con stock y sin stock Mostrar primero las que si y luego las que no.



//Actualizaciones de producto a carrito
//ingrese la cantidad de x producto que quiera sumar al carrito y que se guarde (usar bucle y preguntar si/no seguir agregando de ese producto)
//mostrar la cantidad de x, y, z (productos) que hay de cada uno, mostrar el total y precios


/* if seleccion = si ==> prompt("¿Quiere agregar Remera al carrito?");

    prompt("¿Quiere seguir viendo productos para agregar?");
    else if {}
    else { }
console.log()
 */



//Metodos de pago(pedir datos por ej nombre y devolver alerta si no se da un nombre, o un nuymero y devolver alerta si pone letras)



//Calcular envio

//