async function getProduct(url) {
    try {
        const resp = await fetch(url);
        const respData = await resp.json();
        return respData;
    } catch (e) {
        console.error(e);
    }
};

export { getProduct };