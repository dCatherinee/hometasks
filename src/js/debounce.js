function debounce(callback, delay, e) {
    console.log(e);
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay, e);
    }
}

export { debounce };