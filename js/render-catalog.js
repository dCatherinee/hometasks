import { getProduct } from "./api.js";

const URL_PRODUCTS = 'http://localhost:3006/item';

getProduct(URL_PRODUCTS)
    .then(data => showCatalog(data))
    .catch(err => console.log(err));

function showCatalog(data) {
    const catalog = document.querySelector('.catalog-wrapper');

    data.content.forEach((product) => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
        <div class="product__img">
            <img src="./assets/img/product-s.png" width="59px" height="79px" alt="${product.picture.alt}">
        </div>
        <p class="product__name">${product.name}</p>
        <p class="product__price">$${product.price.value}</p>
        <div class="product__favorite ${product.like ? 'fav-active' : ''}">
            <img src="./assets/img/favorite_border.svg" alt="Любимый">
            <img src="./assets/img/favorite.svg" alt="Любимый">
        </div>
        `;

        catalog.appendChild(productEl);
    });

    const favoritesBtn = document.querySelectorAll('.product__favorite');

    favoritesBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            if (el.classList.contains('fav-active')) {
                el.classList.remove('fav-active');
            } else {
                el.classList.add('fav-active');
            }
        });
    });
};