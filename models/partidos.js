const { pool } = require('./../utils/db');

const create = async (obj) =>
  (await pool()).collection('equipo').insertOne(obj);

const get = async () => {};

module.exports = { create };
