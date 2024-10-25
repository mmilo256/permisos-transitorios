import api from "./api.js";

export const sendEmail = async (to, subject, html, attachments = "") => {
    try {
        const response = await api.post("/email/send-email", { to, subject, html, attachments }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = response.data
        return data
    } catch (error) {
        console.log("Error al enviar correo", error); // Muestra un mensaje de error si ocurre un problema durante la solicitud
    }
}