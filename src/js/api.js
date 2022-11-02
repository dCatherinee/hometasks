import axios from 'axios';

async function getProduct(url) {
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        alert(e);
    }
};

export { getProduct };