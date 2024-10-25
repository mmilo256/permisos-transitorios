import User from "./usersModel.js";
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex')
}

export const register = async (req, res) => {
    try {
        const { username, password } = req.body
        const userExists = await User.findOne({ where: { username } })
        // Comprueba si el usuario ya existe en el sistema
        if (userExists) {
            return res.json({ message: "El usuario ya existe" })
        }
        // Crea el nuevo usuario
        const hash = hashPassword(password)
        const newUser = await User.create({ username, password: hash })
        res.status(200).json({ message: "El usuario se ha creado exitosamente", newUser })
    } catch (error) {
        res.status(400).json({ message: "No se pudo crear el usuario", error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        // Comprobar si el usuario existe
        const userExists = await User.findOne({ where: { username } })
        if (!userExists) {
            return res.status(404).json({ message: "El usuario no existe" })
        }
        // Comparar contraseñas
        const hash = hashPassword(password)
        if (userExists.password !== hash) {
            return res.status(400).json({ message: "Las contraseñas no coinciden" })
        }
        // JWT
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        res.status(200).json({ message: "Inicio de sesión exitoso", token })
    } catch (error) {
        res.status(400).json({ message: "No se pudo iniciar sesión", error: error.message })
    }
}