
import random
import string
import sys
import os
import os.path

'''

	Here is the Db File Creation

'''

db1 = '''var mysql = require('mysql');

const pool = mysql.createPool({
    host: \''''
db2 = '''\',
    user: \''''
db3 = '''\',
    database: \''''
db4 = '''\',
    password: \''''
db5 = '''\'
});

function getConnection() {
    return pool;
}

module.exports = pool;'''

'''
    Here is the Db2 File Creation
'''

xdb1 = '''const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: \''''
xdb2 = '''\',
    user: \''''
xdb3 = '''\',
    database: \''''
xdb4 = '''\',
    password: \''''
xdb5 = '''\',
    multipleStatements: true
});

function getConnection() {
    return pool;
}

module.exports = pool;'''


'''
Create a Random number  myxvalue
Replace all Keys in the JSON with myxvalue
Create a final string to write to a file
'''

host = str(sys.argv[1])
dbusername = str(sys.argv[2])
dbname = str(sys.argv[3])
dbpassword = str(sys.argv[4])

'''
	This section of code will create
	the beginning of the JSON file.
'''

db1string = db1 + host + db2 + dbusername + db3 + dbname + db4 + dbpassword + db5

db2string = xdb1 + host + xdb2 + dbusername + xdb3 + dbname + xdb4 + dbpassword + xdb5


text_file = open('./routes/db.js', "w")
text_file.write(db1string)
text_file.close()

text_file = open('./routes/db2.js', "w")
text_file.write(db2string)
text_file.close()