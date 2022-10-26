import { debounce } from './debounce.js';

const inputSearch = document.querySelector('.search');
const debounceHandle = debounce(handelInput, 250, inputSearch);

inputSearch.addEventListener('input', debounceHandle);

function handelInput(e) {
    let value = e.value.trim().toLowerCase();
    let productItems = document.querySelectorAll('.product');

    if (value != '') {
        productItems.forEach(function (el) {
            const itemName = el.querySelector('.product__name').innerText.toLowerCase();

            if (itemName.includes(value)) {
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