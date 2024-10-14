import { Routes, Route } from "react-router-dom"
import WebForm from "./components/webform/WebForm"
import AdminPanel from "./components/admin-panel/AdminPanel"
import Login from "./components/admin-panel/Login"
import PrivateRoute from "./components/admin-panel/PrivateRoute"

const App = () => {
  return (
    <div className="bg-slate-50 min-h-svh text-slate-800">
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta para el formulario web */}
        <Route path="*" element={<WebForm />} />
        <Route path="/login" element={<Login />} />
        {/* Ruta para el panel de administración */}
        <Route path="admin/*" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App
