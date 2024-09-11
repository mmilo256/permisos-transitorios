import e from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors'
import applicationRouter from './modules/applications/applicationRoutes.js'
import multer from 'multer'
const app = e()

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

app.use(cors())

// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración para servir archivos estáticos
app.use('/uploads', e.static(path.join(__dirname, 'uploads')));



// Quita la marca de express del header
app.disable('x-powered-by')
// Muestra como JSON las peticiones POST con el Content Type = application/json
app.use(e.json())

app.use("/api/solicitudes", upload.array('files', 12), applicationRouter)

app.listen(3000, () => {
    console.log("Running...")
})