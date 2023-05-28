const { Pool } = require("pg");

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

const getData = async (req, res) => {
  const response = await pool.query(`SELECT * FROM ${req.params.tableName}`);
  res.status(200).json(response.rows);
};

const insertData = async (req, res) => {
  const { table, fields, values } = req.body;

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

  await pool.query(query, values);
  res.status(201).json({
    message: "Datos insertados",
  });
};

const deleteData = async (req, res) => {
  const query = `DELETE FROM ${req.params.tableName} WHERE ${req.params.tableName}Id=${req.params.id}`
  await pool.query(query)
  res.status(204).json({
    message: "Datos eliminados",
  });
}

const updateData = async (req, res) => {
  const { table, fields, values } = req.body;
  let str = ""

  for (let i = 1; i < values.length; i++) {
    if (i === values.length - 1) {
      str += `${fields[i - 1]}='${values[i]}'`
    } else {
      str += `${fields[i - 1]}='${values[i]}', `
    }
  }

  const query = `UPDATE ${req.params.tableName} SET ${str} WHERE ${table}Id=${values[0]}`
  await pool.query(query)

  res.status(200).json({
    message: "Datos actualizados"
  })
}

module.exports = {
  getData,
  insertData,
  deleteData,
  updateData,
};
