import Container from "../ui/Container"
import Heading from "../ui/Heading"
import OrganizationsTable from "./OrganizationsTable"

const Home = () => {
    return (
        <div>
            <Container>
                <Heading variant="h1">Organizaciones</Heading>
                <OrganizationsTable />
            </Container>
        </div>
    )
}

export default Home