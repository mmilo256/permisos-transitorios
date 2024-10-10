// Formatear rut
export const formatRut = (value) => {
    // Remover todos los caracteres que no sean dígitos o 'k'/'K'
    let cleanValue = value.replace(/[^0-9kK]/g, "").toUpperCase();

    // Si el RUT tiene más de un dígito, agregar el guion antes del dígito verificador
    if (cleanValue.length > 1) {
        cleanValue = cleanValue.slice(0, -1) + "-" + cleanValue.slice(-1);
    }

    // Separar la parte numérica del dígito verificador
    const parts = cleanValue.split("-");
    const numericPart = parts[0];
    const verifier = parts[1] ? `-${parts[1]}` : "";

    // Agregar puntos cada tres dígitos a la parte numérica desde el final
    let result = "";
    let count = 0;
    for (let i = numericPart.length - 1; i >= 0; i--) {
        result = numericPart[i] + result;
        count++;
        if (count === 3 && i > 0) {
            result = "." + result;
            count = 0;
        }
    }

    return result + verifier;
};

export const onlyNumberInput = (value) => {
    // Remover todos los caracteres que no sean dígitos
    let cleanValue = value.replace(/[^0-9]/g, "");
    return cleanValue
}


export const formatDate = (date, format) => {

    const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

    const newDate = new Date(date)
    const day = newDate.getUTCDate() <= 9 ? `0${newDate.getUTCDate()}` : newDate.getUTCDate()
    const month = newDate.getUTCMonth() + 1 <= 9 ? `0${newDate.getUTCMonth() + 1}` : newDate.getUTCMonth() + 1
    const monthName = monthNames[month - 1]
    const year = newDate.getUTCFullYear()
    const hour = newDate.getUTCHours() <= 9 ? `0${newDate.getHours()}` : newDate.getHours()
    const minutes = newDate.getUTCMinutes() <= 9 ? `0${newDate.getUTCMinutes()}` : newDate.getUTCMinutes()
    let dateString
    switch (format) {
        case 1:
            dateString = `${day} de ${monthName} de ${year}`
            break;
        case 2:
            dateString = `${day} de ${monthName} de ${year} a las ${hour}:${minutes}`
            break;
        case 3:
            dateString = `${day}/${month}/${year} ${hour}:${minutes}`
            break;
        default:
            dateString = `${day}/${month}/${year}`
            break;
    }
    return dateString
}


export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}