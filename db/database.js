const mysql = require('mysql');


const mysqlConnection = mysql.createConnection ({
    host: '192.168.1.102',
    user: 'root',
    password: 'root',
    database: 'werchow',
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;