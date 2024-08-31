import { getProducts } from "../api.js";

let cardContainer = document.querySelector("#template-card");

export function createCards() {
    getProducts().then((data) => {
        data.map((product) => {
            let card = `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100 border">
        <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}" style="height: 250px; object-fit: contain;">
        <div class="card-body d-flex flex-column justify-content-end">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
        </div>
    </div>
</div>
`;
            cardContainer.innerHTML += card;
        });
    });
}
