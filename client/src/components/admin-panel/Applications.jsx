import Container from "../ui/Container"
import Heading from "../ui/Heading"
import ApplicationsTable from "./ApplicationsTable"

const Applications = () => {
    return (
        <div>
            <Container>
                <Heading variant="h1">Solicitudes de permisos</Heading>
                <ApplicationsTable />
            </Container>
        </div>
    )
}
export default Applications