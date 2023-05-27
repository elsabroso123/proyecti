const { Pool } = require("pg");
// import Pool from 'pg'

const countFields = (str) => {
  const numOfSpaces = str.split(" ").length - 1;
  return numOfSpaces + 1;
};

const config = {
  user: "postgres",
  host: "localhost",
  password: "root",
  database: "veterinaria",
};

const pool = new Pool(config);

const dbquery = async (query, values) => {
  const response = await pool.query(query, values);
  console.log(response);
};

const getData = async (table) => {
  try {
    const response = await pool.query(`SELECT * FROM ${table}`);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

const insertData = async (table, fields, values) => {
  try {
    const spaces = countFields(fields);
    let valuesdb = "";
    let count = 0;

    if (spaces > 1) {
      for (let i = 1; i < spaces; i++) {
        valuesdb += `$${i}, `;
        count = i;
      }

      valuesdb += `$${count + 1}`;
    } else {
      valuesdb = "$1";
    }

    const query = `INSERT INTO ${table}(${fields}) VALUES (${valuesdb})`;

    dbquery(query, values);
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (table, columns, fieldNameId, id) => {
  const query = `UPDATE ${table} SET ${columns} WHERE ${fieldNameId}=${id}`
  
  const response = await pool.query(query)
  console.log(response)
}

const deleteData = async (table, fieldNameId, id) => {
  const query = `DELETE FROM ${table} WHERE ${fieldNameId}=${id}`

  const response = await pool.query(query)
  console.log(response)
}

// ejemplo de data cliente
const clientData = [
  "Javier",
  "Torres Perez",
  "7845321278",
  "javier@gmail.es"
]

// ejemplo de data mascota
const petData = [
  "Perry",
  "2022-01-23",
  "Ornitorrinco",
  "Agente secreto",
  "Macho",
  2
]


// Ejemplos de uso

// insertData("Cliente", "Nombre, Apellido, Telefono, Correo", clientData)
// insertData("Mascota", "Nombre, FechaNacimiento, Especie, Raza, Genero, ClienteId", petData)

// getData("Cliente").then(data => console.log(data))
// getData("Mascota").then(data => console.log(data))

// updateData("Cliente", "Nombre='Francisco', Correo='francisco@gmail.com'", "ClienteId", 1)

// deleteData("Mascota", "MascotaId", 2)