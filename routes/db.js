var mysql = require('mysql');

const pool = mysql.createPool({
    host: 'ou-advising.ctabtq2unrra.us-east-2.rds.amazonaws.com',
    user: 'WCFadmin',
    database: 'etm',
    password: 'WillCodeForF00d'
});

function getConnection() {
    return pool;
}

module.exports = pool;