import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Applications from "./Applications"
import ApplicationDetail from "./ApplicationDetail"
import NavbarAdmin from "../ui/NavbarAdmin"
import AddOrganization from "./AddOrganization"
import OrganizationDetail from "./OrganizationDetail"
import DocsManager from "./DocsManager"
import ApproveRequest from "./ApproveRequest"

const AdminPanel = () => {
    return (


        <>
            <NavbarAdmin />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="agregar-organizacion" element={<AddOrganization />} />
                <Route path=":id" element={<OrganizationDetail />} />
                <Route path=":id/docs" element={<DocsManager />} />
                <Route path="solicitudes" element={<Applications />} />
                <Route path="solicitudes/:id" element={<ApplicationDetail />} />
                <Route path="solicitudes/:id/aprobar-solicitud" element={<ApproveRequest />} />
            </Routes>
        </>
    )
}

export default AdminPanel