const mysql = require('mysql');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{

    if(err)throw err;
    connection.release();
    console.log('BASE DE DATOS CONECTADA');
    return
});

module.exports = pool;
