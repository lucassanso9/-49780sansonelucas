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
            darkblue: ['./assets/campera-invierno-azul.jpg', "url_imagen_campera_azul_2"]
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
    },
    {
        nombre: "Bermuda con bolsillos",
        precio: 8240,
        descripcion: "Bermuda de algodón con bolsillos, muy cómodas y facheras.",
        categoria: "Calzado",
        color: ["orange", "red", "black", "grey"],
        tallas: ["S", "M", "L", "XL"],
        material: "Algodón",
        imagenes: {
            orange: ['./assets/bermuda-algodon-naranja.jpg', './assets/bermuda-algodon-naranja-2.jpg'],
            red: ['./assets/bermuda-algodon-roja.jpg', './assets/bermuda-algodon-roja-2.jpg'],
            black: ['./assets/bermuda-algodon-negro.jpg', './assets/bermuda-algodon-negro-3.jpg'],
            grey: ['./assets/bermuda-algodon-gris.jpg', "../assets/Zapatilla.jpg"]
        },
        id: "006"
    },
    {
        nombre: "Remera Estampada",
        precio: 12990,
        descripcion: "Remera con estampado urbano, ideal para un look casual.",
        categoria: "Ropa para hombres",
        color: ["black", "white", "grey"],
        tallas: ["S", "M", "L", "XL"],
        material: "Algodón",
        imagenes: {
            pink: ['./assets/remera-estampada-oldpink.jpg', './assets/remera-estampada-oldpink-2.jpg'],
            green: ['./assets/remera-estampada-verde.jpg', './assets/remera-estampada-verde-2.jpg'],
            purple: ['./assets/remera-estampada-morada.jpg', './assets/remera-estampada-morada-2.jpg']
        },
        id: "007"
    },
    {
        nombre: "Gorra Urbana",
        precio: 6990,
        descripcion: "Gorra estilo urbano para complementar tu outfit diario.",
        categoria: "Accesorios para hombres",
        color: ["black", "blue", "red"],
        tallas: ["Única"],
        material: "Poliéster",
        imagenes: {
            brown: ['./assets/gorra-urbana-marron.jpg', './assets/gorra-urbana-marron-2.jpg'],
            blue: ['./assets/gorra-urbana-azul.jpg', './assets/gorra-urbana-azul-2.jpg'],
            green: ['./assets/gorra-urbana-verde.jpg', './assets/gorra-urbana-verde-2.jpg']
        },
        id: "008"
    },
    {
        nombre: "Buzo Streetwear",
        precio: 24950,
        descripcion: "Buzo con diseño urbano, perfecto para días frescos.",
        categoria: "Ropa para hombres",
        color: ["grey", "black", "green"],
        tallas: ["S", "M", "L", "XL"],
        material: "Algodón",
        imagenes: {
            grey: ['./assets/buzo-streetwear-gris.jpg', './assets/buzo-streetwear-gris-2.jpg'],
            lightblue: ['./assets/buzo-streetwear-celeste.jpg', './assets/buzo-streetwear-celeste-2.jpg'],
            orange: ['./assets/buzo-streetwear-salmon.jpg', './assets/buzo-streetwear-salmon-2.jpg']
        },
        id: "009"
    },
    {
        nombre: "Riñonera Urbana",
        precio: 7990,
        descripcion: "Riñonera práctica y con estilo para llevar tus pertenencias.",
        categoria: "Accesorios para hombres",
        color: ["black", "grey", "blue"],
        tallas: ["Única"],
        material: "Nylon",
        imagenes: {
            red: ['./assets/rinonera-urbana-roja.jpg', './assets/rinonera-urbana-roja-2.jpg'],
            grey: ['./assets/rinonera-urbana-gris.jpg', './assets/rinonera-urbana-gris-2.jpg'],
            blue: ['./assets/rinonera-urbana-azul.jpg', './assets/rinonera-urbana-azul-2.jpg'],
            yellow: ['./assets/rinonera-urbana-amarilla.jpg', './assets/rinonera-urbana-amarilla-2.jpg']
        },
        id: "010"
    },
    {
        nombre: "Gorro de Invierno Urbano",
        precio: 10990,
        descripcion: "Gorro abrigado con diseño urbano para los días más fríos.",
        categoria: "Accesorios para hombres",
        color: ["black", "grey", "brown"],
        tallas: ["Única"],
        material: "Lana",
        imagenes: {
            purple: ['./assets/gorro-invierno-urbano-violeta.jpg', './assets/gorro-invierno-urbano-violeta-2.jpg'],
            grey: ['./assets/gorro-invierno-urbano-gris.jpg', './assets/gorro-invierno-urbano-gris-2.jpg'],
            brown: ['./assets/gorro-invierno-urbano-marron.jpg', './assets/gorro-invierno-urbano-marron-2.jpg']
        },
        id: "011"
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
                    <div class="size-buttons">
                        ${producto.tallas.map(talla => `
                            <button class="size-button" id="size${producto.id}-${talla}" onclick="selectSize('${producto.id}', '${talla}')">${talla}</button>
                        `).join('')}
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

                const productImg = card.querySelector(".product-img");
                productImg.src = selectedProduct.imagenes[selectedProduct.selectedColor][0];

                COLOR_CIRCLES.forEach(c => c.classList.remove("selected"));
                circle.classList.add("selected");
            });
        });

        const BUTTON = document.getElementById(`boton${producto.id}`);
        BUTTON.addEventListener("click", () => {
            const selectedSizeElement = card.querySelector(".size-button.selected");
            const selectedSize = selectedSizeElement ? selectedSizeElement.innerText : null;
        
            if (!selectedSize) {
                Swal.fire({
                        title:"Por favor, selecciona un talle antes de agregar al carrito.",
                        icon:"warning",
                        toast: true,
                        fontsize:"2rem",
                        iconColor:"orange",
                        confirmButtonText:"Entendido",
                        confirmButtonColor: "green"
                    })
                return;
            }
        
            agregarAlCarrito(producto.id, selectedSize);
            Toastify({
                text: "Se agregó el producto al carrito",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){}
            }).showToast();
        });

        const SIZE_BUTTONS = card.querySelectorAll(".size-button");
        SIZE_BUTTONS.forEach(button => {
            button.addEventListener("click", () => {
                const selectedSize = button.innerText;
                selectSize(producto.id, selectedSize);
            });
        });
    });
}


const agregarAlCarrito = (productId, selectedSize) => {
    const selectedProduct = PRODUCTS.find(product => product.id === productId);

    if (!selectedProduct.selectedColor) {
        selectedProduct.selectedColor = Object.keys(selectedProduct.imagenes)[0];
    }

    if (!selectedSize) {
        alert("Por favor, selecciona un tamaño antes de agregar al carrito.");
        return;
    }

    const existingProductIndex = shopping_cart.findIndex(item => item.id === selectedProduct.id && item.selectedColor === selectedProduct.selectedColor && item.selectedSize === selectedSize);

    if (existingProductIndex !== -1) {
        shopping_cart[existingProductIndex].quantity += 1;
    } else {
        shopping_cart.push({ ...selectedProduct, selectedSize, quantity: 1 });
    }

    actualizarCarritoLocalStorage();

    console.log("Producto agregado al carrito:", selectedProduct);
};

const selectSize = (productId, selectedSize) => {
    const sizeButtons = document.querySelectorAll(`.size-button`);

    sizeButtons.forEach(button => {
        button.classList.remove("selected");
    });

    const selectedButton = document.getElementById(`size${productId}-${selectedSize}`);
    selectedButton.classList.add("selected");
};

const actualizarCarritoLocalStorage = () => {
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
    mostrarCarrito();
};

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const shoppingCart = document.getElementById("shopping-cart");

    cartIcon.addEventListener("click", function () {
        shoppingCart.style.display = (shoppingCart.style.display === "block") ? "none" : "block";
    });
});

const mostrarCarrito = () => {
    const carritoContainer = document.getElementById("shopping-cart");
    carritoContainer.innerHTML = "";

    const cartHeader = document.createElement("div");
    cartHeader.innerHTML = `
        <div class="cart-header">
            <div class="cart-title-container">
                <h2>Carrito de compras</h2>
            </div>
            <div class="cart-cancel-container">
                <img src="./assets/Icons/cancel.svg" alt="icono cerrar carrito"  onclick="HIDE_CART()"/>
            </div>
        </div>
    `;

    carritoContainer.appendChild(cartHeader);

    const cartItemsContainer = document.createElement("div");
    cartItemsContainer.classList.add("cart-items-container");

    let total = 0;

    shopping_cart.forEach((item, index) => {
        const carritoItem = document.createElement("div");
        carritoItem.classList.add("cart-item");
        carritoItem.innerHTML = `
            <div class="cart-img-container">
                <img src="${item.imagenes[item.selectedColor][0]}" class="product-img" />
            </div>
            <div class="cart-description-card">
                <h3>${item.nombre}</h3>
                <p>Color: ${item.selectedColor}</p>
                <p>Talla: ${item.selectedSize}</p>
            </div>
            <div class="cart-product-quantity">
                <h3>Unidades: ${item.quantity}</h3>
            </div>
            <div class="cart-price-card">
                <p>$${item.precio * item.quantity}</p>
            </div>
            <div class="delete-product-container">
                <img src="./assets/Icons/delete-icon.svg" alt="icono eliminar producto" onclick="eliminarDelCarrito(${index})">
            </div>
        `;
        cartItemsContainer.appendChild(carritoItem);

        total += item.precio * item.quantity;
    });

    carritoContainer.appendChild(cartItemsContainer);

    const CART_FOOTER = document.createElement("div");
    CART_FOOTER.classList.add("footer-cart-container");
    CART_FOOTER.innerHTML = `

            <div class="cart-total-container">
                <h3>Total:</h3> <h3>$${total}
            </div>        
        <div class="action-btn-container">
            <button type="button" class="btn acept">
                <a href="#" onclick="CONTINUE_BUYING();">Continuar compra</a>
            </button>
            <button type="button" class="btn cancel">
                <a href="#" onclick="EMPTY_CART();">Vaciar carrito</a>
            </button>

        </div>
    `;

    carritoContainer.appendChild(CART_FOOTER);
};

const EMPTY_CART = () => {
    shopping_cart = [];
    actualizarCarritoLocalStorage();
    mostrarCarrito();
    Toastify({
        text: "Se ha vaciado el carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #FF0000, #FF6600)",
        },
        onClick: function(){}
    }).showToast();
};

const HIDE_CART = () => {
    const carritoContainer = document.getElementById("shopping-cart");
    carritoContainer.style.display = "none";
};

const eliminarDelCarrito = (index) => {
    shopping_cart.splice(index, 1);
    Toastify({
        text: "Se eliminó el producto del carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #FF0000, #FF6600)",
        },
        onClick: function(){}
    }).showToast();

    actualizarCarritoLocalStorage();

    mostrarCarrito();
};

window.addEventListener("load", () => {
    shopping_cart = JSON.parse(localStorage.getItem("shopping_cart")) || [];
    mostrarCarrito();
});

SHOW_PRODUCTS();

const CONTINUE_BUYING = () => {
    if (shopping_cart.length === 0) {
        Swal.fire({
            title: "El carrito está vacío",
            text: "Agrega productos antes de continuar.",
            icon: "warning",
            toast: true,
            iconColor: "orange",
            confirmButtonText: "Entendido",
            confirmButtonColor: "green",
        });
        return;
    }

    const total = shopping_cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    const summary = shopping_cart.map(item => `${item.nombre} (${item.quantity} unidades) - $${item.precio * item.quantity}`).join('\n');

    Swal.fire({
        title: "Confirmar compra",
        text: `¿Estás seguro de que deseas realizar la compra?\n\nResumen de la compra:\n${summary}\n\nTotal: $${total}`,
        icon: "question",
        toast: true,
        iconColor: "blue",
        showCancelButton: true,
        confirmButtonText: "Sí, realizar compra",
        cancelButtonText: "No, revisar carrito",
        confirmButtonColor: "green",
        cancelButtonColor: "red",
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: "Compra realizada con éxito",
                text: `¡Gracias por tu compra!\n\nResumen de la compra:\n${summary}\n\nTotal: $${total}`,
                icon: "success",
                toast: true,
                iconColor: "green",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "green",
            });

            EMPTY_CART();
        }
    });
};

