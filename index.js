const PRODUCTS = [
    {
        nombre: "Camiseta",
        precio: 9580,
        descripcion: "Una camiseta cómoda para el uso diario.",
        categoria: "Ropa para hombres",
        color: ["blue", "white", "black"],
        tallas: ["S", "M", "L", "XL"],
        material: "Algodón",
        imagenes: {
            blue: ['./assets/camiseta-azul.jpg', './assets/camiseta-azul-2.jpg'],
            white: ['./assets/camiseta-blanca.jpg', "url_imagen_camiseta_blanco_2"],
            black: ['./assets/camiseta-negra.jpg', "url_imagen_camiseta_negro_2"]
        },
        id: "001"
    },
    {
        nombre: "Pantalón",
        precio: 18720,
        descripcion: "Un pantalón elegante y duradero.",
        categoria: "Ropa para hombres",
        color: ["black", "grey"],
        tallas: ["S", "M", "L", "XL"],
        material: "Mezclilla",
        imagenes: {
            black: ['./assets/pantalon-cargo-negro.jpg', "url_imagen_pantalon_negro_2"],
            brown: ['./assets/pantalon-cargo-marron.png', "url_imagen_pantalon_gris_2"]
        },
        id: "002"
    },
    {
        nombre: "Campera deportiva",
        precio: 29370,
        descripcion: "Una campera para realizar ejercicio físico.",
        categoria: "Ropa para hombres",
        color: ["grey", "black", "green"],
        tallas: ["S", "M", "L", "XL"],
        material: "Poliéster",
        imagenes: {
            grey: ['./assets/campera-deportiva-gris.webp', './assets/campera-deportiva-gris.jpg'],
            black: ['./assets/campera-deportiva-negro.jpg', './assets/campera-deportiva-negro2.jpg'],
            green: ['./assets/campera-deportiva-verde.jpg', './assets/campera-deportiva-verde.jpg']
        },
        id: "003"
    },
    {
        nombre: "Campera de invierno",
        precio: 43950,
        descripcion: "Una campera cómoda para los días frescos.",
        categoria: "Ropa para mujeres",
        color: ["grey", "black", "blue"],
        tallas: ["S", "M", "L", "XL"],
        material: "Poliéster",
        imagenes: {
            grey: ['./assets/campera-invierno-gris.jpg', "url_imagen_campera_gris_2"],
            black: ['./assets/campera-invierno-negra.webp', "url_imagen_campera_negro_2"],
            blue: ['./assets/campera-invierno-azul.jpg', "url_imagen_campera_azul_2"]
        },
        id: "004"
    },
    {
        nombre: "Zapatillas Deportivas",
        precio: 75040,
        descripcion: "Zapatillas cómodas y resistentes para el deporte.",
        categoria: "Calzado",
        color: ["white", "black", "red"],
        tallas: ["40", "42", "44"],
        material: "Cuero sintético",
        imagenes: {
            grey: ['./assets/zapatilla-deportiva-gris.jpg', '../assets/Zapatilla.jpg'],
            black: ["../assets/zapatilla-deportiva-negra.png", "../assets/Zapatilla.jpg"],
            red: ["../assets/zapatilla-deportiva-roja.png", "../assets/Zapatilla.jpg"]
        },
        id: "005"
    }
];

let shopping_cart = [];

const PRODUCT_CONTAINER = document.getElementById("product-container");
const CARRITO_CONTAINER = document.getElementById("shopping-cart");

const SHOW_PRODUCTS = () => {
    PRODUCTS.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        const colors = Object.keys(producto.imagenes);

        card.innerHTML =
            `
                <div class="img-container">
                    <img src="${producto.imagenes[colors[0]][0]}" class="product-img" />
                    <div class="color-selector">
                        ${colors.map(color => `
                            <div class="color-circle" style="background-color: ${color};"></div>
                        `).join('')}
                    </div>
                </div>
                <div class="card-body">                
                    <div class="title-card">
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class="description-card">
                        <p>${producto.descripcion}</p>
                    </div>
                    <div class="price-card">
                        <p>$ ${producto.precio}</p>
                    </div>  
                    <div class="button-card-container">   
                        <button class="button-card-shop" id="boton${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
        `;
        PRODUCT_CONTAINER.appendChild(card);

        const COLOR_CIRCLES = card.querySelectorAll(".color-circle");
        COLOR_CIRCLES.forEach((circle, index) => {
            circle.addEventListener("click", () => {
                const selectedProduct = PRODUCTS.find(product => product.id === producto.id);
                selectedProduct.selectedColor = colors[index];

                // Cambiar la imagen del producto
                const productImg = card.querySelector(".product-img");
                productImg.src = selectedProduct.imagenes[selectedProduct.selectedColor][0];

                // Agregar la clase "selected" al círculo seleccionado
                COLOR_CIRCLES.forEach(c => c.classList.remove("selected"));
                circle.classList.add("selected");
            });
        });

        const BUTTON = document.getElementById(`boton${producto.id}`);
        BUTTON.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });
    });
}

const agregarAlCarrito = (productId) => {
    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    // Si el producto no tiene la propiedad selectedColor, establecerla en el primer color disponible
    if (!selectedProduct.selectedColor) {
        selectedProduct.selectedColor = Object.keys(selectedProduct.imagenes)[0];
    }

    // Verifica si el producto ya está en el carrito con el mismo color
    const existingProductIndex = shopping_cart.findIndex(item => item.id === selectedProduct.id && item.selectedColor === selectedProduct.selectedColor);

    if (existingProductIndex !== -1) {
        shopping_cart[existingProductIndex].quantity += 1;
    } else {
        shopping_cart.push({ ...selectedProduct, quantity: 1 });
    }

    // Actualizar el carrito en el localStorage
    actualizarCarritoLocalStorage();

    console.log("Producto agregado al carrito:", selectedProduct);
};

const actualizarCarritoLocalStorage = () => {
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
    mostrarCarrito();
};

const mostrarCarrito = () => {
    const carritoContainer = document.getElementById("shopping-cart");
    carritoContainer.innerHTML = "";

    const tituloCarrito = document.createElement("div");
    tituloCarrito.innerHTML = '<h2>Carrito de compras</h2>';
    carritoContainer.appendChild(tituloCarrito);

    shopping_cart.forEach((item, index) => {
        const carritoItem = document.createElement("div");
        carritoItem.classList.add("cart-item");
        carritoItem.innerHTML = `
            <div class="img-container">
                <img src="${item.imagenes[item.selectedColor][0]}" class="product-img" />
            </div>
            <div class="description-card">
                <h3>${item.nombre}</h3>
                <p>Color: ${item.selectedColor}</p>
            </div>
            <div class="product-cart-quantity">
                <h3>Unidades: ${item.quantity}</h3>
            </div>
            <div class="price-card">
                <p>$${item.precio * item.quantity}</p>
            </div>
            <div class="delete-product-container">
                <img src="./assets/Icons/delete-icon.svg" alt="icono eliminar producto" onclick="eliminarDelCarrito(${index})">
            </div>
        `;
        carritoContainer.appendChild(carritoItem);
    });
};

const eliminarDelCarrito = (index) => {
    // Eliminar el producto del carrito
    shopping_cart.splice(index, 1);

    // Actualizar el carrito en el localStorage
    actualizarCarritoLocalStorage();

    // Volver a mostrar el carrito
    mostrarCarrito();
};

window.addEventListener("load", () => {
    shopping_cart = JSON.parse(localStorage.getItem("shopping_cart")) || [];
    mostrarCarrito();
});

SHOW_PRODUCTS();
