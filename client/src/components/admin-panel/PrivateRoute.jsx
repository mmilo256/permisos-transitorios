import { validateToken } from "../../utils/utils"
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const token = validateToken()

    if (!token) {
        return <Navigate to="/login" />
    }


    return children
}

export default PrivateRoute