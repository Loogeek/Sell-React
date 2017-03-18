export function formatDate(date, fmt) {
    const dateObj = new Date(date);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    const oDate = {
        'M+': dateObj.getMonth() + 1,
        'd+': dateObj.getDate(),
        'h+': dateObj.getHours(),
        'm+': dateObj.getMinutes(),
        's+': dateObj.getSeconds()
    };

    for (let i in oDate) {
        if (new RegExp(`(${i})`).test(fmt)) {
            const k = (oDate[i] + '').length > 1 ? oDate[i] + '' : '0' + oDate[i];
            fmt = fmt.replace(RegExp.$1, k);
        }
    }

    return fmt;
}
