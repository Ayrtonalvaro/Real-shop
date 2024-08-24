//Función para renderizar productos
function renderProducts(products) {
    //Obtiene el elemento del DOM donde se insertarán las tarjetas de producto
    const productList = document.getElementById('product-list');

    //Itera sobre cada producto en la lista de productos
    products.forEach(product => {
        //Crea una cadena de HTML para cada tarjeta de producto
        const productCard = `
            <article class="col" onclick="openModal('${product.title}', '${product.image}', '${product.price}', '${product.description}')">
                <figure class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" width="150px">
                    <figcaption class="card-body">
                        <h5 class="card-title flex-grow-1">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                    </figcaption>
                </figure>
            </article>
        `;
        //Inserta la tarjeta de producto en el final del contenedor
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}

 //Función para inicializar la aplicación
 function init() {
    //Realiza una solicitud a la API para obtener los productos
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())//Convierte la respuesta a formato JSON
        .then(products => {
            //Llama a la función renderProducts para mostrar los productos
            renderProducts(products);
        });
}

 //Ejecutar cuando el DOM esté completamente cargado
 document.addEventListener('DOMContentLoaded', init);

 //Función para abrir el modal con la información del producto
function openModal(title, image, price, description) {
     //Aquí se debe implementar la lógica para mostrar el modal
}

