document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(products=> {
        const productList=document.getElementById('product-list');
        products.forEach(product => {
            const productCard = `
                    <article class="col">
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
    });
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
        productList.querySelector('.row').insertAdjacentHTML('beforeend', productCard);
    });
}
