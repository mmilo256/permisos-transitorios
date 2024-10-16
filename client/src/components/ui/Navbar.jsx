import { logout } from "../../services/authServices"
import logo from '../../assets/logo.png'
import Container from "./Container"
import { NavLink, useNavigate } from 'react-router-dom'

const navigation = [
    { label: "Inicio", to: "/" },
    { label: "Solicitudes", to: "/solicitudes" }
]

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/login")

    }

    return (
        <header className="py-2 shadow bg-white">
            <Container>
                <div className="flex justify-between items-center">
                    <a href="https://municipalidadchonchi.cl/web/"><img className="h-14" src={logo} alt="logo municipalidad de chonchi" /></a>
                    <button onClick={handleLogout} className="hover:bg-slate-200 p-2 rounded-full">Cerrar sesión</button>
                </div>
            </Container>
            <nav className="border-t mt-2 pt-2">
                <Container>
                    <ul className="flex gap-2">
                        {navigation.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                end
                                className={({ isActive }) => `px-4 py-2 hover:bg-slate-200 rounded-full ${isActive ? 'bg-slate-200' : ''}`}
                            >{item.label}</NavLink>
                        ))}
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar