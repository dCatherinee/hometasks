import { getProduct } from "./js/api.js";
import { showCatalog } from "./js/render-catalog.js";
import './js/search.js';
import './catalog.html';
import './css/base.css';
import './css/catalog.css';
import './img/favorite.png';
import './img/favorite_border.png';
import './img/product-s.png';

const URL_PRODUCTS = 'http://localhost:3006/item';

getProduct(URL_PRODUCTS)
    .then(data => showCatalog(data))
    .catch(err => console.log(err));