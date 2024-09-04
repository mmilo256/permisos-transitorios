import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Applications from "./Applications"

const AdminPanel = () => {
    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="solicitudes" element={<Applications />} />
            </Routes>
        </>
    )
}

export default AdminPanel