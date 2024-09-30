import Container from "./Container"
import { NavLink } from 'react-router-dom'

const navigation = [
    { label: "Inicio", to: "/admin" },
    { label: "Solicitudes", to: "solicitudes" }
]

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

export default NavbarAdmin