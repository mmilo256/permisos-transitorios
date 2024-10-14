import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Applications from "./Applications"
import ApplicationDetail from "./ApplicationDetail"
import NavbarAdmin from "../ui/NavbarAdmin"
import AddOrganization from "./AddOrganization"
import OrganizationDetail from "./OrganizationDetail"
import DocsManager from "./DocsManager"
import ApproveRequest from "./ApproveRequest"
import PrivateRoute from "./PrivateRoute"

const AdminPanel = () => {
    return (
        <>
            <NavbarAdmin />
            <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="agregar-organizacion" element={<PrivateRoute><AddOrganization /></PrivateRoute>} />
                <Route path=":id" element={<PrivateRoute><OrganizationDetail /></PrivateRoute>} />
                <Route path=":id/docs" element={<PrivateRoute><DocsManager /></PrivateRoute>} />
                <Route path="solicitudes" element={<PrivateRoute><Applications /></PrivateRoute>} />
                <Route path="solicitudes/:id" element={<PrivateRoute><ApplicationDetail /></PrivateRoute>} />
                <Route path="solicitudes/:id/aprobar-solicitud" element={<PrivateRoute><ApproveRequest /></PrivateRoute>} />
            </Routes>
        </>
    )
}

export default AdminPanel