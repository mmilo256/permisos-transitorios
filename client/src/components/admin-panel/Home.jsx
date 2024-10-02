import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import OrganizationsTable from "./OrganizationsTable"

const Home = () => {
    return (
        <div>
            <Container>
                <Heading variant="h1">Organizaciones</Heading>
                <div className="mb-4 w-52">
                    <Button href="agregar-organizacion" type="link">Agregar organización</Button>
                </div>
                <OrganizationsTable />
            </Container>
        </div>
    )
}

export default Home