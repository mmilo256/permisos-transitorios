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