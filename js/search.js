document.querySelector('.search').oninput = function () {
    let val = this.value.trim().toLowerCase();
    let productItems = document.querySelectorAll('.product');

    if (val != '') {
        productItems.forEach(function (el) {
            const itemName = el.querySelector('.product__name').innerText.toLowerCase();

            if (itemName.includes(val)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    } else {
        productItems.forEach(function (el) {
            el.style.display = '';
        });
    }
};