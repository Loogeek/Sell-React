export function saveStorage(key, value) {
    JSON.stringify(window.localStorage.setItem(key, value));
}

export function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}