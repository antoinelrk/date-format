const format = (date, pattern) => {
    const pad = (value, length) => {
        let str = String(value);
        while (str.length < length) {
        str = `0${str}`;
        }
        return str;
    };

    const monthsArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const daysArray = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    
    const dateFormat = {
        yyyy: date.getFullYear(),
        MM: pad(date.getMonth() + 1, 2),
        dd: pad(date.getDate(), 2),
        HH: pad(date.getHours(), 2),
        mm: pad(date.getMinutes(), 2),
        ss: pad(date.getSeconds(), 2),
        d: date.getDate(),
        MONTH: monthsArray[date.getMonth()],
        DAY: daysArray[date.getDay()]
    };
    
    return pattern.replace(/([a-z]+)/ig, (m, key) => {
        return dateFormat[key] || m;
    });
}

/**
 * The format: 'dd/MM/yyyy HH:mm:ss'
 * 
 * @param {*} format 
 * @returns 
 */
const getDateByFormat = (format) => {
    return new Date(format.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1'));
}

export default {
    format,
    getDateByFormat
}