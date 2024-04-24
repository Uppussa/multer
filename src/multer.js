import multer from 'multer'

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: async function (req, file, cb) {
    // Cambiar el nombre del archivo usando la fecha
    const nombreNuevo = `${Date.now()}-${file.originalname}`
    cb(null, nombreNuevo)
  }
})

function imageFilter (req, file, cb) {
  const permitidos = ['image/jpeg', 'image/png']
  if (permitidos.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(console.log('solo se permite subir images'), false)
  }
}

function pdfFilter (req, file, cb) {
  const permitidos = ['application/pdf']
  if (permitidos.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(console.log('solo se permite subir pdf'), false)
  }
}

export const imagenMulter = multer({ storage, imageFilter })
export const pdfMulter = multer({ storage, pdfFilter })
