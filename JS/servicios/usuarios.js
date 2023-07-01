const pool = require("./mysql");

const creaUsuario = async (usuario) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO usuario (nombre, edad, rut,telefono, direccion ) VALUES ('${usuario.nombre}', '${usuario.edad}', '${usuario.rut}', '${usuario.telefono}', '${usuario.direccion}' )`;
    pool.query(sql, (err) => {
      if (err) {
        reject({
          error: err.code,
          numero: err.errno,
          mensaje: err.sqlMessage,
          sql: err.sql,
        });
      } else {
        resolve("usuario creado exitosamente");
      }
    });
  });
};

const getAll = async (req, res) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM usuario`;
    pool.query(sql, (err, result) => {
      if (err) {
        reject({
          error: err.code,
          numero: err.errno,
          mensaje: err.sqlMessage,
          sql: err.sql,
        });
      } else {
        resolve(result);
      }
    });
  });
};

const actualizaUsuario = async (usuario) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE usuario SET nombre = '${usuario.nombre}', edad = '${usuario.edad}', rut='${usuario.rut}', telefono='${usuario.telefono}', direccion='${usuario.direccion}' WHERE id='${usuario.id}';`;
    pool.query(sql, (err, result) => {
      if (err) {
        reject({
          error: err.code,
          numero: err.errno,
          mensaje: err.sqlMessage,
          sql: err.sql,
        });
      } else {
        resolve("usuario actualizado correctamente");
      }
    });
  });
};

const eliminaUsuario = async (idUsuario) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM usuario WHERE id='${idUsuario}'`;
    pool.query(sql, (err) => {
      if (err) {
        reject({
          error: err.code,
          numero: err.errno,
          mensaje: err.sqlMessage,
          sql: err.sql,
        });
      } else {
        resolve("usuario eliminado correctamente");
      }
    });
  });
};

module.exports = { creaUsuario, getAll, actualizaUsuario, eliminaUsuario };
