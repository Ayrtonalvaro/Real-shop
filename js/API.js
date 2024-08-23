document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(products=> {
        const productList=document.getElementById('product-list');
        products.forEach(product => {
            const productCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}" width="150px">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">$${product.price}</p>
                            </div>
                        </div>
                    </div>
                `;
            productList.insertAdjacentHTML('beforeend', productCard);                    
        });
    });
})
