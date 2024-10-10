import { API_URL } from "../constants/constants";

export const sendEmail = async (to, subject, html) => {
    try {
        const response = await fetch(`${API_URL}/api/email/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ to, subject, html })
        });
        if (!response.ok) {
            console.log("Error al enviar correo"); // Muestra un mensaje de error si la respuesta no es satisfactoria
        }
    } catch (error) {
        console.log("Error al enviar correo", error); // Muestra un mensaje de error si ocurre un problema durante la solicitud
    }
};