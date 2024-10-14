import Container from "./Container"

const Navbar = () => {
    return (
        <header className="py-2 shadow bg-white">
            <Container>
                <div className="grid grid-cols-2">
                    <a href="https://municipalidadchonchi.cl/web/"><img className="h-14" src="/logo-municipalidad-de-chonchi.png" alt="logo municipalidad de chonchi" /></a>
                </div>
            </Container>
        </header>
    )
}

export default Navbar