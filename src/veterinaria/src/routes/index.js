//API NO RESTFULL :C

const { Router } = require("express")
const router = Router()

const { getData, insertData, deleteData } = require("../controllers/index.controller")

router.get("/getData/:tableName", getData)
// ejemplos get data
// http://localhost:8000/getData/Cliente/
// http://localhost:8000/getData/Mascota/

router.post("/insertData", insertData)
// ejemplos post data
// http://localhost:8000/insertData/

// const clientData = [
//   "Javier",
//   "Torres Perez",
//   "7845321278",
//   "javier@gmail.es"
// ]

// en el body poner:
// {
//    "table": "Cliente",
//    "fields": "Nombre, Apellido, Telefono, Correo",
//    "values": clienteData (tiene que ser un arreglo)
// }

router.delete("/deleteData/:tableName/:id", deleteData)
// http://localhost:8000/deleteData/Cliente/4/

module.exports = router
