const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'belladona',
    port: 3306,
    database: 'quixote'
});

global.db = pool;