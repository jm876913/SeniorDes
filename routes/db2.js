const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'ou-advising.ctabtq2unrra.us-east-2.rds.amazonaws.com',
    user: 'WCFadmin',
    database: 'etm',
    password: 'WillCodeForF00d',
    multipleStatements: true
});

function getConnection() {
    return pool;
}

module.exports = pool;