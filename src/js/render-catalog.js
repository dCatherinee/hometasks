export function showCatalog(data) {
    const catalog = document.querySelector('.catalog-wrapper');

    data.content.forEach((product) => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
        <div class="product__img">
            <img src="./img/product-s.png" width="59px" height="79px" alt="${product.picture.alt}">
        </div>
        <p class="product__name">${product.name}</p>
        <p class="product__price">$${product.price.value}</p>
        <div class="product__favorite ${product.like ? 'fav-active' : ''}">
            <img src="./img/favorite_border.png" alt="Любимый">
            <img src="./img/favorite.png" alt="Любимый">
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