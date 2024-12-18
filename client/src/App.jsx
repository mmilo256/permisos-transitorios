import { Routes, Route } from "react-router-dom"
import Login from "./components/admin-panel/Login"
import PrivateRoute from "./components/admin-panel/PrivateRoute"
import AddOrganization from "./components/admin-panel/AddOrganization"
import OrganizationDetail from "./components/admin-panel/OrganizationDetail"
import DocsManager from "./components/admin-panel/DocsManager"
import Applications from "./components/admin-panel/Applications"
import ApplicationDetail from "./components/admin-panel/ApplicationDetail"
import ApproveRequest from "./components/admin-panel/ApproveRequest"
import Home from "./components/admin-panel/Home"
import FormLayout from "./components/admin-panel/FormLayout"
import PermissionDetail from "./components/admin-panel/PermissionDetail"
import EditOrganization from "./components/admin-panel/EditOrganization"
import { useEffect, useState } from "react"
import { getAllApplications } from "./services/webFormServices"

const App = () => {

  const [req, setReq] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getAllApplications()
      setReq(data)
    })()
  }, [])

  console.log(req.requests)

  return (
    <div className="bg-slate-50 min-h-svh text-slate-800">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><FormLayout><Home /></FormLayout></PrivateRoute>} />
        <Route path="permisos/:id" element={<PrivateRoute><FormLayout><PermissionDetail /></FormLayout></PrivateRoute>} />
        <Route path="agregar-organizacion" element={<PrivateRoute> <FormLayout><AddOrganization /></FormLayout> </PrivateRoute>} />
        <Route path=":id/editar" element={<PrivateRoute> <FormLayout><EditOrganization /></FormLayout> </PrivateRoute>} />
        <Route path=":id" element={<PrivateRoute> <FormLayout><OrganizationDetail /></FormLayout> </PrivateRoute>} />
        <Route path=":id/docs" element={<PrivateRoute><FormLayout><DocsManager /></FormLayout></PrivateRoute>} />
        <Route path="solicitudes" element={<PrivateRoute><FormLayout><Applications /></FormLayout></PrivateRoute>} />
        <Route path="solicitudes/:id" element={<PrivateRoute><FormLayout><ApplicationDetail /></FormLayout></PrivateRoute>} />
        <Route path="solicitudes/:id/aprobar-solicitud" element={<PrivateRoute><FormLayout><ApproveRequest /></FormLayout></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App
