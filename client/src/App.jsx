import Footer from "./components/ui/Footer"
import { Routes, Route } from "react-router-dom"
import WebForm from "./components/webform/WebForm"
import AdminPanel from "./components/admin-panel/AdminPanel"

const App = () => {
  return (
    <div className="bg-slate-50 min-h-svh text-slate-800">
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta para el formulario web */}
        <Route path="*" element={<WebForm />} />
        {/* Ruta para el panel de administración */}
        <Route path="admin/*" element={<AdminPanel />} />
      </Routes>

      {/* Componente del pie de página */}
      <Footer />
    </div>
  )
}

export default App
