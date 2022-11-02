import { getProduct } from "./api.js";

const URL_PRODUCT = 'http://localhost:3006/item/:itemId';

getProduct(URL_PRODUCT)
    .then(data => showProduct(data))
    .catch(err => console.log(err));

function showProduct(data) {
    const productCard = document.querySelector('.product-card');
    productCard.classList.add('container');

    const product = document.createElement('div');
    product.classList.add('product-card__wrapper');
    product.innerHTML = `
        <div class="product-card__img">
            <img src="./assets/img/product-m.png" width="149px" height="200px" alt="${data.content.picture.alt}">
        </div>
        <div class="product-card__info">
            <h2 class="card__title">${data.content.name}</h2>
            <p class="card__text">${data.content.info}</p>
            <h3 class="card__subtitle">Details</h3>
            <p class="card__text">${data.content.details}</p>
            <div class="card__option">
                <p class="card__price">$${data.content.price.value}</p>
                <div class="card__count">
                    <button class="count__btn" id="remove">
                        <img src="./assets/img/remove.svg" alt="Минус">
                    </button>
                    <input class="count__number" type="amount" value="1">
                    <button class="count__btn" id="add">
                        <img src="./assets/img/add.svg" alt="Плюс">
                    </button>
                </div>
                <button class="card__btn">Add to cart</button>
                <div class="product__favorite ${data.content.like ? 'fav-active' : ''}">
                    <img src="./assets/img/favorite_border.png" alt="Любимый">
                    <img src="./assets/img/favorite.png" alt="Любимый">
                </div>
            </div>
        </div>
    `;

    productCard.appendChild(product);

    const favoriteBtn = document.querySelectorAll('.product__favorite');

    favoriteBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            if (el.classList.contains('fav-active')) {
                el.classList.remove('fav-active');
            } else {
                el.classList.add('fav-active');
            }
        });
    });

    const countBtn = document.querySelector('.count__number');
    const countRemoveBtn = document.getElementById('remove');
    const countAddBtn = document.getElementById('add');

    countRemoveBtn.addEventListener('click', function () {
        countBtn.value--;
        if (countBtn.value < 0) {
            countBtn.value = 0;
        }
    });

    countAddBtn.addEventListener('click', function () {
        countBtn.value++;
    });
};