import express from 'express'
import { imagenMulter, pdfMulter } from './multer.js'
import { cargar, mostrar, handleErrors, eliminarArchivo } from './controller.js'

const app = express()
const port = 3000

app.post('/upload-imagen', imagenMulter.single('imagen'), cargar)

app.get('/upload-imagen/:nombreArchivo', mostrar)

app.post('/upload-pdf', pdfMulter.single('pdf'), cargar)

app.get('/upload-pdf/:nombreArchivo', mostrar)

app.delete('/upload/:nombreArchivo', eliminarArchivo)

app.use(handleErrors)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
