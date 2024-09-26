import e from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors'
import requestRouter from './modules/requests/requestsRoutes.js'
import organizationRouter from './modules/organizations/organizationsRoutes.js'
import presidentRouter from './modules/presidents/presidentsRoutes.js'
import permissionRouter from './modules/permissions/permissionsRoutes.js'
import multer from 'multer'
import User from './modules/users/usersModel.js';
import Organization from './modules/organizations/organizationsModel.js';
import President from './modules/presidents/presidentsModel.js';
import Permission from './modules/permissions/permissionsModel.js';
import Request from './modules/requests/requestsModel.js';
const app = e()
app.use(cors())

// Creación de tablas al inicializar la aplicación por primera vez
await User.sync()
await Organization.sync()
await President.sync()
await Permission.sync()
await Request.sync()

// Configura el almacenamiento de Multer para renombrar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Directorio donde se guardarán los archivos subidos
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Genera un nombre único para el archivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Extrae la extensión del archivo
        const ext = path.extname(file.originalname);
        // Crea el nombre del archivo con extensión
        cb(null, uniqueSuffix + ext);
    }
});

const upload = multer({ storage: storage });


// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración para servir archivos estáticos
app.use('/uploads', e.static(path.join(__dirname, 'uploads')));



// Quita la marca de express del header
app.disable('x-powered-by')
// Muestra como JSON las peticiones POST con el Content Type = application/json
app.use(e.json())

app.use("/api/solicitudes", upload.array('files', 12), requestRouter)
app.use("/api/organizaciones", upload.array('files', 12), organizationRouter)
app.use("/api/presidentes", presidentRouter)
app.use("/api/permisos", permissionRouter)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Running...")
})