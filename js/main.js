/* const CARD_PRODUCTO = document.getElementById("cardProductos");

CARD_PRODUCTO.innerHTML = `
            <div class="producto">
                    <img src="./Imagenes/Remera_Nik_marron.jpeg" alt="remera beige">
                <div class="producto_descripcion">
                    <h1>Remera Just do it</h1>
                    <p>Remera de algodón</p>
                <div class="price">
                    <p class="price">$5000</p>
                </div>
                <div class="button_content">
                    <a class="button_text" href="">Agregar</a>
            </div>
`;


function Producto(nombre, especificaciones, identificador, precio, stock) {
    this.nombre = nombre.toUpperCase();
    this.especificaciones = especificaciones;
    this.identificador = identificador;
    this.precio = parseFloat(precio);
    this.stock = stock;
}

// Genera un stock aleatorio entre 30 y 45 unidades para cada producto
function generarStockAleatorio() {
    return Math.floor(Math.random() * (45 - 30 + 1)) + 30;
}

const PRODUCTO1 = new Producto("Producto1", "Remera", "01", "2000", generarStockAleatorio());
const PRODUCTO2 = new Producto("Producto2", "Short", "02", "1500", generarStockAleatorio());
const PRODUCTO3 = new Producto("Producto3", "Medias", "03", "3500", generarStockAleatorio());
const PRODUCTO4 = new Producto("Producto4", "Campera", "04", "8000", generarStockAleatorio());
const PRODUCTO5 = new Producto("Producto5", "Pantalón", "05", "12000", generarStockAleatorio());

const INVENTARIO = [PRODUCTO1, PRODUCTO2, PRODUCTO3, PRODUCTO4, PRODUCTO5];
const CARRITO = [];

function mostrarInventario() {
    console.log("Inventario de productos:");
    for (let i = 0; i < INVENTARIO.length; i++) {
        console.log(`${i + 1}. Producto: ${INVENTARIO[i].nombre}, Precio: $${INVENTARIO[i].precio}, Stock: ${INVENTARIO[i].stock}`);
    }
}

mostrarInventario(); // Mostrar el inventario al inicio

function realizarCompra() {
    const seleccion = prompt("Elija un producto (1-5) o escriba 'salir' para finalizar la compra:");

    if (seleccion.toLowerCase() === 'salir') {
        finalizarCompra();
    } else {
        const indice = parseInt(seleccion) - 1;
        if (!isNaN(indice) && indice >= 0 && indice < INVENTARIO.length) {
            const productoElegido = INVENTARIO[indice];
            const cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));

            if (cantidad > productoElegido.stock) {
                alert("Stock insuficiente. Por favor, elija una cantidad menor o igual al stock disponible.");
            } else {
                agregarAlCarrito(productoElegido, cantidad);
            }

            realizarCompra();
        } else {
            console.log("Selección no válida. Por favor, elija un producto válido.");
            realizarCompra();
        }
    }
}

function agregarAlCarrito(producto, cantidad) {
    CARRITO.push({
        producto: producto,
        cantidad: cantidad,
        total: producto.precio * cantidad,
    });
    producto.stock -= cantidad;
    console.log(`Se agregaron ${cantidad} unidades de ${producto.nombre} al carrito.`);
}

function finalizarCompra() {
    console.log("Carrito de compras:");
    for (const item of CARRITO) {
        console.log(`${item.cantidad} unidades de ${item.producto.nombre} - Total: $${item.total}`);
    }

    const precioTotal = calcularPrecioTotal();
    console.log("Precio total: $" + precioTotal);
}

function calcularPrecioTotal() {
    let total = 0;
    for (const item of CARRITO) {
        total += item.total;
    }
    return total;
}

// Iniciar la simulación de compra
realizarCompra(); */

const PRODUCTOS = [
    {
        nombre: "Camiseta",
        precio: 2000,
        descripcion: "Una camiseta cómoda para el uso diario.",
        categoria: "Ropa para hombres",
        colores: ["Azul", "Blanco", "Negro"],
        tallas: ["S", "M", "L"],
        material: "Algodón",
        imagenes: {
            azul: ["url_imagen_camiseta_azul_1", "url_imagen_camiseta_azul_2"],
            blanco: ["url_imagen_camiseta_blanco_1", "url_imagen_camiseta_blanco_2"],
            negro: ["url_imagen_camiseta_negro_1", "url_imagen_camiseta_negro_2"]
        },
        inventarioDisponible: {
            azul: { S: 10, M: 15, L: 20 },
            blanco: { S: 5, M: 10, L: 12 },
            negro: { S: 8, M: 12, L: 18 }
        },
        sku: "CAM001"
    },
    {
        nombre: "Pantalón",
        precio: 3000,
        descripcion: "Un pantalón elegante y duradero.",
        categoria: "Ropa para hombres",
        colores: ["Negro", "Gris"],
        tallas: ["M", "L", "XL"],
        material: "Mezclilla",
        imagenes: {
            negro: ["url_imagen_pantalon_negro_1", "url_imagen_pantalon_negro_2"],
            gris: ["url_imagen_pantalon_gris_1", "url_imagen_pantalon_gris_2"]
        },
        inventarioDisponible: {
            negro: { M: 10, L: 8, XL: 5 },
            gris: { M: 15, L: 12, XL: 10 }
        },
        sku: "PAN002"
    },
    {
        nombre: "Campera deportiva",
        precio: 3900,
        descripcion: "Una campera para realizar ejercicio físico.",
        categoria: "Ropa para hombres",
        colores: ["Gris", "Negro", "Verde"],
        tallas: ["S", "M", "L"],
        material: "Poliéster",
        imagenes: {
            gris: ["url_imagen_campera_gris_1", "url_imagen_campera_gris_2"],
            negro: ["url_imagen_campera_negro_1", "url_imagen_campera_negro_2"],
            verde: ["url_imagen_campera_verde_1", "url_imagen_campera_verde_2"]
        },
        inventarioDisponible: {
            gris: { S: 12, M: 15, L: 18 },
            negro: { S: 10, M: 12, L: 15 },
            verde: { S: 8, M: 10, L: 12 }
        },
        sku: "CAM003"
    },
    {
        nombre: "Campera con Capucha",
        precio: 3400,
        descripcion: "Una campera cómoda para los días frescos.",
        categoria: "Ropa para mujeres",
        colores: ["Gris", "Negro", "Azul"],
        tallas: ["S", "M", "L"],
        material: "Poliéster",
        imagenes: {
            gris: ["url_imagen_campera_gris_1", "url_imagen_campera_gris_2"],
            negro: ["url_imagen_campera_negro_1", "url_imagen_campera_negro_2"],
            azul: ["url_imagen_campera_azul_1", "url_imagen_campera_azul_2"]
        },
        inventarioDisponible: {
            gris: { S: 12, M: 15, L: 18 },
            negro: { S: 10, M: 12, L: 15 },
            azul: { S: 8, M: 10, L: 12 }
        },
        sku: "CAM004"
    },
    {
        nombre: "Zapatillas Deportivas",
        precio: 5000,
        descripcion: "Zapatillas cómodas y resistentes para el deporte.",
        categoria: "Calzado",
        colores: ["Blanco", "Negro", "Rojo"],
        tallas: ["40", "42", "44"],
        material: "Cuero sintético",
        imagenes: {
            blanco: ['./assets/Zapatilla.jpg', '../assets/Zapatilla.jpg'],
            negro: ["../assets/Zapatilla.jpg", "../assets/Zapatilla.jpg"],
            rojo: ["../assets/Zapatilla.jpg", "../assets/Zapatilla.jpg"]
        },
        inventarioDisponible: {
            blanco: { "40": 5, "42": 8, "44": 10 },
            negro: { "40": 3, "42": 5, "44": 7 },
            rojo: { "40": 7, "42": 10, "44": 12 }
        },
        sku: "ZAP005"
    }
];

const CARD_PRODUCTO = document.getElementById("producto-card");

PRODUCTOS.forEach(producto => {
    // Crear un nuevo div para cada producto
    const PRODUCTO_DIV = document.createElement("div");
    PRODUCTO_DIV.classList.add("producto");

    

    // Obtener la primera imagen y el primer color (si existen)
    const PRIMER_COLOR = producto.colores && producto.colores[0];
    const PRIMERA_IMAGEN = PRIMER_COLOR && producto.imagenes && producto.imagenes[PRIMER_COLOR] && producto.imagines[PRIMER_COLOR][0];

    const RUTA_IMAGEN = PRIMERA_IMAGEN || './assets/default.webp';


    // Agregar el contenido generado a ese div
    PRODUCTO_DIV.innerHTML = `
        <img src="${PRIMERA_IMAGEN || RUTA_IMAGEN}" alt="${producto.nombre}">
        <div class="producto-info">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripción}</p>
            <span class="precio">$${producto.precio}</span>
            <button class="boton-agregar">Agregar al Carrito</button>
        </div>
    `;

    // Agregar el div del producto al contenedor principal
    CARD_PRODUCTO.appendChild(PRODUCTO_DIV);
});


const CARRITO = [];

function mostrarInventario() {
    console.log("Inventario de productos:");
    for (let i = 0; i < PRODUCTOS.length; i++) {
        const producto = PRODUCTOS[i];
        console.log(`${i + 1}. Producto: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${obtenerStock(producto)}`);
    }
}

function obtenerStock(producto) {
    // Calcular el stock total sumando los stocks de todos los colores y talles
    let stockTotal = 0;

    for (const color in producto.inventarioDisponible) {
        for (const talle in producto.inventarioDisponible[color]) {
            stockTotal += producto.inventarioDisponible[color][talle];
        }
    }

    return stockTotal;
}

mostrarInventario(); // Mostrar el inventario al inicio

function realizarCompra() {
    const seleccion = prompt("Elija un producto (1-5) o escriba 'salir' para finalizar la compra:");

    if (seleccion.toLowerCase() === 'salir') {
        finalizarCompra();
    } else {
        const INDICE = parseInt(seleccion) - 1;
        if (!isNaN(INDICE) && INDICE >= 0 && INDICE < PRODUCTOS.length) {
            const productoElegido = PRODUCTOS[INDICE];
            const coloresDisponibles = Object.keys(productoElegido.inventarioDisponible);
            const tallesDisponibles = Object.keys(productoElegido.inventarioDisponible[coloresDisponibles[0]]);

            // Mostrar colores y talles disponibles
            console.log(`Colores disponibles: ${coloresDisponibles.join(', ')}`);
            console.log(`Talles disponibles: ${tallesDisponibles.join(', ')}`);

            const color = prompt("Ingrese el color deseado:");
            const talle = prompt("Ingrese el talle deseado:");

            if (
                coloresDisponibles.includes(color.toLowerCase()) &&
                tallesDisponibles.includes(talle.toUpperCase())
            ) {
                const cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));

                if (cantidad > obtenerStockPorColorYTalle(productoElegido, color, talle)) {
                    alert("Stock insuficiente. Por favor, elija una cantidad menor o igual al stock disponible.");
                } else {
                    agregarAlCarrito(productoElegido, color, talle, cantidad);
                }

                realizarCompra();
            } else {
                alert("Selección no válida. Por favor, elija un color y talle disponibles.");
                realizarCompra();
            }
        } else {
            alert("Selección no válida. Por favor, elija un producto válido.");
            realizarCompra();
        }
    }
}

function obtenerStockPorColorYTalle(producto, color, talle) {
    return producto.inventarioDisponible[color.toLowerCase()][talle.toUpperCase()] || 0;
}

function agregarAlCarrito(producto, color, talle, cantidad) {
    CARRITO.push({
        producto: producto,
        color: color.toLowerCase(),
        talle: talle.toUpperCase(),
        cantidad: cantidad,
        total: producto.precio * cantidad,
    });
    producto.inventarioDisponible[color.toLowerCase()][talle.toUpperCase()] -= cantidad;
    console.log(`Se agregaron ${cantidad} unidades de ${producto.nombre} (${color}, Talle: ${talle}) al carrito.`);
}

function finalizarCompra() {
    console.log("Carrito de compras:");
    for (const item of CARRITO) {
        console.log(`${item.cantidad} unidades de ${item.producto.nombre} (${item.color}, Talle: ${item.talle}) - Total: $${item.total}`);
    }

    const precioTotal = calcularPrecioTotal();
    console.log("Precio total: $" + precioTotal);
}

function calcularPrecioTotal() {
    let total = 0;
    for (const item of CARRITO) {
        total += item.total;
    }
    return total;
}

// Iniciar la simulación de compra
realizarCompra();
