import { useState } from "react"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { login } from "../../services/authServices"
import { Navigate, useNavigate } from "react-router-dom"
import { validateToken } from "../../utils/utils"

const Login = () => {

    const token = validateToken()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(username, password)
            navigate("/")
        } catch (error) {
            console.log("No se pudo iniciar sesión.", error.message)
        }
    }

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div className="h-svh bg-teal-600 flex justify-center items-center">
            <div className="bg-white max-w-96 w-[95%]  rounded p-4 shadow">
                <h2 className="text-center text-2xl border-b border-slate-300 mb-2 pb-2">Iniciar sesión</h2>
                <form onSubmit={handleSubmit} action="">
                    <Input value={username} onChange={(e) => { setUsername(e.target.value) }} label="Nombre de usuario" />
                    <Input value={password} onChange={(e) => { setPassword(e.target.value) }} label="Contraseña" />
                    <div className="mt-4">
                        <Button fullWidth type="submit">Ingresar</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login