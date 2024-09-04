import e from 'express'
import cors from 'cors'
import applicationRouter from './modules/applications/applicationRoutes.js'

const app = e()

app.use(cors())
// Quita la marca de express del header
app.disable('x-powered-by')
// Muestra como JSON las peticiones POST con el Content Type = application/json
app.use(e.json())

app.use("/api/solicitudes", applicationRouter)

app.listen(3000)