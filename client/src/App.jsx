import Home from "./components/admin-panel/Home"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import { Routes, Route } from "react-router-dom"
import WebForm from "./components/webform/WebForm"

const App = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Componente de navegación principal */}
      <Navbar />
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta para el formulario web */}
        <Route path="*" element={<WebForm />} />
        {/* Ruta para el panel de administración */}
        <Route path="admin" element={<Home />} />
      </Routes>
      {/* Componente del pie de página */}
      <Footer />
    </div>
  )
}

export default App
