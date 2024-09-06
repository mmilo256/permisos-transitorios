import Container from "./Container"

const Navbar = () => {
    return (
        <header className="py-2 shadow bg-white">
            <Container>
                <a href="https://municipalidadchonchi.cl/web/"><img className="h-14" src="/logo-municipalidad-de-chonchi.png" alt="logo municipalidad de chonchi" /></a>
            </Container>
        </header>
    )
}

export default Navbar