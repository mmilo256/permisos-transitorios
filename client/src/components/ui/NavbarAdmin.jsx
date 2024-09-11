import Container from "./Container"
import { NavLink } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <header className="py-2 shadow bg-white">
            <div>
                <Container>
                    <a href="https://municipalidadchonchi.cl/web/"><img className="h-14" src="/logo-municipalidad-de-chonchi.png" alt="logo municipalidad de chonchi" /></a>
                </Container>
            </div>
            <nav className="border-t mt-2 pt-2">
                <Container>
                    <ul className="flex gap-2">
                        <NavLink
                            to="/admin"
                            end
                            className={({ isActive }) => `px-4 py-2 hover:bg-slate-200 rounded-full ${isActive ? 'bg-slate-200' : ''}`}
                        >Inicio</NavLink>
                        <NavLink to="solicitudes" className={({ isActive }) => `px-4 py-2 hover:bg-slate-200 rounded-full ${isActive ? 'bg-slate-300' : ''}`}>Solicitudes</NavLink>
                        <NavLink to="organizaciones" className={({ isActive }) => `px-4 py-2 hover:bg-slate-200 rounded-full ${isActive ? 'bg-slate-300' : ''}`}>Organizaciones</NavLink>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default NavbarAdmin