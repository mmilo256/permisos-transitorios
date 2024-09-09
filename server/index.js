import e from 'express'
import cors from 'cors'
import applicationRouter from './modules/applications/applicationRoutes.js'

import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const app = e()

app.use(cors())
// Quita la marca de express del header
app.disable('x-powered-by')
// Muestra como JSON las peticiones POST con el Content Type = application/json
app.use(e.json())

app.use("/api/solicitudes", upload.array('files', 12), applicationRouter)

app.listen(3000, () => {
    console.log("Running...")
})