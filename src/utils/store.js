export function saveStorage(key, value) {
    window.localStorage.setItem(key, value);
}

export function getStorage(key) {
    return window.localStorage.getItem(key);
}