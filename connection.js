const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'school'
});

module.exports = connection;

// connection.connect((error)=> {
//     if (error) throw error;
//     console.log('connect')
// })