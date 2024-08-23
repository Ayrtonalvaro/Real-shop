document.addEventListener('DOMContentLoaded', function () {
    
})


// Función para renderizar productos
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <article class="col" onclick="openModal('${product.title}', '${product.image}', '${product.price}', '${product.description}')">
                <figure class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" width="150px">
                    <figcaption class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                    </figcaption>
                </figure>
            </article>
        `;
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}

 // Función para inicializar la aplicación
 function init() {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(products => {
            renderProducts(products);
        });
}

 // Ejecutar cuando el DOM esté completamente cargado
 document.addEventListener('DOMContentLoaded', init);

 // Función para abrir el modal con la información del producto
function openModal(title, image, price, description) {
    console.log("hola");
}

