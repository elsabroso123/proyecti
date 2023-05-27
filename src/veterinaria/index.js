const { Pool } = require("pg");
// import Pool from 'pg'

const express = require("express")
const cors = require('cors');
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./src/routes/index"))


app.listen(8000)
console.log("siiuuu")

// const updateData = async (table, columns, fieldNameId, id) => {
//   const query = `UPDATE ${table} SET ${columns} WHERE ${fieldNameId}=${id}`
  
//   const response = await pool.query(query)
//   console.log(response)
// }

// const deleteData = async (table, fieldNameId, id) => {
//   const query = `DELETE FROM ${table} WHERE ${fieldNameId}=${id}`

//   const response = await pool.query(query)
//   console.log(response)
// }

// // ejemplo de data cliente
// const clientData = [
//   "Javier",
//   "Torres Perez",
//   "7845321278",
//   "javier@gmail.es"
// ]

// // ejemplo de data mascota
// const petData = [
//   "Perry",
//   "2022-01-23",
//   "Ornitorrinco",
//   "Agente secreto",
//   "Macho",
//   2
// ]

// updateData("Cliente", "Nombre='Francisco', Correo='francisco@gmail.com'", "ClienteId", 1)

// deleteData("Mascota", "MascotaId", 2)