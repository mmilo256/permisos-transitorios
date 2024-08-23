import { Routes, Route } from "react-router-dom"
import Form01 from "./Form01"
import Form02 from "./Form02"
import Form03 from "./Form03"
import Form04 from "./Form04"
import FormGuide from "./FormGuide"
import FormCompleted from "./FormCompleted"
const WebForm = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<FormGuide />} />
                <Route path="datos-organizacion" element={<Form01 />} />
                <Route path="datos-representante" element={<Form02 />} />
                <Route path="detalles-permiso" element={<Form03 />} />
                <Route path="antecedentes" element={<Form04 />} />
                <Route path="solicitud-enviada" element={<FormCompleted />} />
            </Routes>
        </div>
    )
}

export default WebForm