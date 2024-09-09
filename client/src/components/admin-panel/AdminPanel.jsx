import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Applications from "./Applications"
import ApplicationDetail from "./ApplicationDetail"

const AdminPanel = () => {
    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="solicitudes" element={<Applications />} />
                <Route path="solicitudes/:id" element={<ApplicationDetail />} />
            </Routes>
        </>
    )
}

export default AdminPanel