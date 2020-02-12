import mysql.connector
##Aaron Lopez(100%), 10/20/18
##SPECIFICALLY ONLY FOR QUICK SETUP OF EXAMPLE DB. DO NOT USE REPEATEDLY.
##create_db() will return the db to db_init, who will return it to whoever called it.
##create_tables() will create the tables, and if successful will call populate_data()
##pop_data() will populate the database.
def db_init():
	db = create_db()
	create_tables(db)
	return db

def create_db():
	GRSI = mysql.connector.connect(user = "root",
								host = "localhost",
								password = "root")
	cursor = GRSI.cursor()
	db = cursor.execute(
            "CREATE DATABASE team15 DEFAULT CHARACTER SET 'utf8'")
	cursor.execute("USE team15")
	return GRSI


def create_tables(db):##we use email for primary key.
	TABLES = {}
	TABLES['mentor'] = (
		"CREATE TABLE `mentor` ("
		"  `name` varchar(56) NOT NULL,"
		"  `country` varchar(56) NOT NULL,"
		"  `timezone` varchar(14) NOT NULL,"
		"  `experience` varchar(16) NOT NULL,"
		"  `phone` varchar(11) NOT NULL,"
		"  `language` varchar(56) NOT NULL,"
		"  `preferred_platform` varchar(56) NOT NULL,"
		"  `sponsorship_stage` varchar(56) NOT NULL,"
		"  `expertise` varchar(56) NOT NULL,"
		"  `email` varchar(56) NOT NULL,"
		"  `bio` varchar(56) NOT NULL,"
		"  PRIMARY KEY (`email`)"
		") ENGINE=InnoDB")

	TABLES['mentee'] = (
		"  `name` varchar(56) NOT NULL,"
		"  `country` varchar(56) NOT NULL,"
		"  `timezone` varchar(14) NOT NULL,"
		"  `experience` varchar(16) NOT NULL,"
		"  `phone` varchar(11) NOT NULL,"
		"  `language` varchar(56) NOT NULL,"
		"  `preferred_platform` varchar(56) NOT NULL,"
		"  `sponsorship_stage` varchar(56) NOT NULL,"
		"  `expertise` varchar(56) NOT NULL,"
		"  `email` varchar(56) NOT NULL,"
		"  `bio` varchar(56) NOT NULL,"
		"  PRIMARY KEY (`email`)"
		") ENGINE=InnoDB")
	cursor = db.cursor()
	for table_name in TABLES:
		table_desc = TABLES[table_name]
		cursor.execute(table_desc)

	pop_data()

def pop_data(db):##for faster processing, loop and submit values here.
	cursor = db.cursor()
	mentorInsert = ("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Ashley', 'US', 'EST', 2, '5555555', 'english', 'twitter', 'just arriving', 'housing', 'ash@google.com', 'lorem ipsum')")
	mentorInsert1 =  ("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Brook', 'UK', 'GMT', 2, '112345124', 'french', 'facebook', 'just arriving', 'immigration', 'bklyn@google.com', 'lorem ipsum')")
	mentorInsert2 = ("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Kevin', 'GER', 'EMT', 4, '902393939', 'german', 'snapchat', 'sponsoring', 'legal', 'kev@google.com', 'lorem ipsum')")
	mentorInsert3 = ("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Austin', 'AUS', 'AUT', 2, '14981547', 'chinese', 'twitter', 'just arriving', 'housing', 'aus@google.com', 'lorem ipsum')")
	mentorInsert4 =("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Renee', 'US', 'EMT', 5, '14981547', 'portugese', 'facebook', 'awaiting', 'housing', 'reneenee@google.com', 'lorem ipsum')")
	mentorInsert5 =("INSERT INTO mentor "
                    "(idmentee, name, country, timezone, experience, phone, language, preferred_platform, sponsorship_stage, expertise, email, bio)"
                    "VALUES ('Rebecca', 'CA', 'EST', 3, '124898732', 'spanish', 'facebook', 'just arriving', 'immigration', 'rebeqqa@google.com', 'lorem ipsum')")
	cursor.execute(mentorInsert)
	cursor.execute(mentorInsert1)
	cursor.execute(mentorInsert2)
	cursor.execute(mentorInsert3)
	cursor.execute(mentorInsert4)
	cursor.execute(mentorInsert5)
	db.commit()
	cursor.close()

db_init()
