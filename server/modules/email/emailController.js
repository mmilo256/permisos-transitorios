import { sendMail } from '../../config/mailer.js'

export const sendEmail = async (req, res) => {
    const { to, subject, html, attachments } = req.body
    console.log(attachments)
    try {
        const info = await sendMail(to, subject, html, attachments)
        res.status(200).json({ message: 'Email enviado con éxito', info })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error al enviar el email', error })
    }
}