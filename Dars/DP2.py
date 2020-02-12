#coding=utf-8

#todo: 

# add sql table of degree/header/course -- manual
# add new insert/update sql
#   insert student
#   insert courses taken
#   update courses taken
#   insert degree courses
#   insert degree headers
# check valid DARS
# 

def updateStudent(student):

    mydb = mysql.connector.connect(
        host="ou-advising.ctabtq2unrra.us-east-2.rds.amazonaws.com",
        user="WCFadmin",
        passwd="WillCodeForF00d"
    )

    if student.pid == "":
        print("something is wrong")
        return

    mycursor = mydb.cursor()

    try:
        studentDegreeAccurate = "SELECT PID from etm.working_towards where (PID = '{}') AND degreeCode = ('{}')".format(student.pid, student.degreeCode)
        mycursor.execute(studentDegreeAccurate)
        myresult = mycursor.fetchall()
    except Exception as e:
            print (e)
            pass

    if not myresult:

        selectDegreeExists = "SELECT degreeCode from etm.degree where degreeCode = '{}'".format(student.degreeCode)
        mycursor.execute(selectDegreeExists)
        myresult = mycursor.fetchall()

        if not myresult:
            print('degree not found')
            try:
                insertNewDegreeString = "INSERT INTO etm.degree (degreeCode, name) VALUES ('{}', '{}')".format(student.degreeCode, 'missing degree name')
                mycursor.execute(insertNewDegreeString)
                mydb.commit()
            except Exception as e:
                print(e)
                pass
        try:
            updateStudentDegree = "UPDATE etm.working_towards SET degreeCode = '{}' WHERE PID = '{}'".format(student.degreeCode, student.pid)
            mycursor.execute(updateStudentDegree)
            mydb.commit()
        except Exception as e:
            print(e, '1')
            pass

    try:
        studentAdvisorAccurate = "SELECT PID from etm.advises where PID = '{}' AND advisorid = '{}'".format(student.pid, student.advisorID)
        mycursor.execute(studentAdvisorAccurate)
        myresult = mycursor.fetchall()
    except Exception as e:
        print(e)
        pass

    if not myresult:

        if student.advisor is not None:
            advisorTuple =  student.advisor.split(" ")
            
            adLname = advisorTuple[1]
            adFname = advisorTuple[0]

            selectAdvisorIDString = "SELECT ID FROM etm.advisor WHERE afname = '{}' AND alname = '{}'".format(adFname, adLname)

            mycursor.execute(selectAdvisorIDString)
            myresult = mycursor.fetchall()

            if not myresult:
                print('advisor not found')
                try:
                    insertAdvisorString = "INSERT INTO etm.advisor (ID, afname, alname) VALUES ('{}', '{}', '{}')".format(student.advisorID, adFname, adLname)
                    mycursor.execute(insertAdvisorString)
                    mydb.commit()
                except Exception as e:
                    print(e)
                    pass
            try:
                updateStudentAdvisor = "UPDATE etm.advises SET advisorid = '{}' WHERE PID = '{}'".format(student.advisorID, student.pid)
                mycursor.execute(updateStudentAdvisor)
                mydb.commit()
            except Exception as e:
                print(e)
                pass  

    studentCatalogAccurate = "SELECT PID from etm.studentCatalog where PID = '{}' AND year = '{}'".format(student.pid, student.catalog)
    mycursor.execute(studentCatalogAccurate)
    myresult = mycursor.fetchall()


    if not myresult:

        selectCatalogExists = "SELECT year from etm.catalog where year = '{}'".format(student.catalog)
        mycursor.execute(selectCatalogExists)
        myresult = mycursor.fetchall()

        if not myresult:
            print('catalog not found')
            try:
                insertNewCatalogString = "INSERT INTO etm.catalog (year) VALUES ('{}')".format(student.catalog)
                mycursor.execute(insertNewCatalogString)
                mydb.commit()

            except Exception as e:
                print(e)
                pass

            try:
                insertNewHeadingString = "INSERT INTO etm.studentCatalog (PID, year) VALUES ('{}', '{}')".format(student.pid, student.catalog)
                mycursor.execute(insertNewCatalogString)
                mydb.commit()

            except Exception as e:
                print(e)
                pass


        insertCatalogString = "INSERT INTO etm.studentCatalog (PID, year) VALUES ('{}', '{}')".format(student.pid, student.catalog)

        try:
            mycursor.execute(insertCatalogString)
            mydb.commit()
        except Exception as e:
            print (e)
            pass

        try:
            updateStudentCatalog = "UPDATE etm.studentCatalog SET year = '{}'' WHERE PID = '{}'".format(student.catalog, student.pid)
            mycursor.execute(updateStudentCatalog)
            mydb.commit()
        except Exception as e:
            print(e)
            pass

    for c in student.courses:

        checkGradeAccurate = "SELECT grade from etm.enrolled_in where (PID = '{}') AND (courseName = '{}')".format(student.pid, c.shortName)
        try:
            mycursor.execute(checkGradeAccurate)
            myresult = mycursor.fetchall()
        except Exception as e:
            print (e, '1')
            pass

        if not myresult:

            print('course not found')
            try:
                if c.hours == 0:
                    insertCourseString = "INSERT INTO etm.course (shortName) VALUES ('{}')".format(c.shortName)
                else:
                    insertCourseString = "INSERT INTO etm.course (shortName, hours) VALUES ('{}', '{}')".format(c.shortName, c.hours)
                mycursor.execute(insertCourseString)
                mydb.commit()
            except Exception as e:
                pass

            try:
                insertOfferedInString = "INSERT INTO etm.offered_in (catalogYear, courseName) VALUES ('{}', '{}')".format(student.catalog, c.shortName)
                mycursor.execute(insertOfferedInString)
                mydb.commit()
            except Exception as e:
                pass

            try:
                insertPlaceholderString = "INSERT INTO etm.placeholder (courseCode, catalog) VALUES ('{}', '{}')".format(c.shortName, student.catalog)
                mycursor.execute(insertPlaceholderString)
                mydb.commit()
            except Exception as e:
                pass

            insertEnrolledString = "INSERT INTO etm.enrolled_in (PID, courseName, grade, semester) VALUES ('{}', '{}', '{}', '{}')".format(student.pid, c.shortName, c.grade, c.semester)
            
            try:

                mycursor.execute(insertEnrolledString)
                mydb.commit()   

            except Exception as e:
                print (e)
                pass

        elif myresult != c.grade:

            updateGradeString = "UPDATE etm.enrolled_in SET grade = '{}' WHERE (PID = '{}') and ('courseName' = '{}')".format(c.grade, student.pid, c.shortName)
            try:
                mycursor.execute(updateGradeString)
                mydb.commit()
            except Exception as e:
                pass

        else:

            continue


def newStudent(student):

    mydb = mysql.connector.connect(
        host="ou-advising.ctabtq2unrra.us-east-2.rds.amazonaws.com",
        user="WCFadmin",
        passwd="WillCodeForF00d"
    )

    if student.pid == "":
        print("something is wrong")
        return

    mycursor = mydb.cursor()

    selectStudentExists = "SELECT PID from etm.student where PID = '{}'".format(student.pid)
    mycursor.execute(selectStudentExists)
    myresult = mycursor.fetchall()

    if not myresult:
        print('student not found')
        # add student to database
        try:
            insertNewStudentString = "INSERT INTO etm.student (PID, fname, lname) VALUES ('{}', '{}', '{}')".format(student.pid, student.fName, student.lName)
            mycursor.execute(insertNewStudentString)
            mydb.commit()
        except Exception as e:
            print(e)
            pass

        # if degree doesn't exist create it
        selectDegreeExists = "SELECT degreeCode from etm.degree where degreeCode = '{}'".format(student.degreeCode)
        mycursor.execute(selectDegreeExists)
        myresult = mycursor.fetchall()

        if not myresult:
            print('degree not found')
            try:
                insertNewDegreeString = "INSERT INTO etm.degree (degreeCode, name) VALUES ('{}', '{}')".format(student.degreeCode, 'missing degree name')
                mycursor.execute(insertNewDegreeString)
                mydb.commit()
            except Exception as e:
                print(e)
                pass

        # add student working towards degree
        insertDegreeString = "INSERT INTO etm.working_towards (PID, degreeCode) VALUES ('{}', '{}')".format(student.pid, student.degreeCode)

        try:
            mycursor.execute(insertDegreeString)
            mydb.commit()
        except Exception as e:
            print (e)
            pass
        
        # if catalog doesnt exist create it
        selectCatalogExists = "SELECT year from etm.catalog where year = '{}'".format(student.catalog)
        mycursor.execute(selectCatalogExists)
        myresult = mycursor.fetchall()

        if not myresult:
            print('catalog not found')
            try:
                insertNewCatalogString = "INSERT INTO etm.catalog (year) VALUES ('{}')".format(student.catalog)
                mycursor.execute(insertNewCatalogString)
                mydb.commit()

            except Exception as e:
                print(e)
                pass

        # add student to catalog
        insertCatalogString = "INSERT INTO etm.studentCatalog (PID, year) VALUES ('{}', '{}')".format(student.pid, student.catalog)

        try:
            mycursor.execute(insertCatalogString)
            mydb.commit()
        except Exception as e:
            print (e)
            pass


        # create advisor ID
        if student.advisor is not None:
            advisorTuple =  student.advisor.split(" ")
            
            adLname = advisorTuple[1]
            adFname = advisorTuple[0]

            selectAdvisorIDString = "SELECT ID FROM etm.advisor WHERE afname = '{}' AND alname = '{}'".format(adFname, adLname)

            mycursor.execute(selectAdvisorIDString)
            myresult = mycursor.fetchall()

            # if advisor doesn't exist add to database
            if not myresult:
                print('advisor not found')
                try:
                    insertAdvisorString = "INSERT INTO etm.advisor (ID, afname, alname) VALUES ('{}', '{}', '{}')".format(student.advisorID, adFname, adLname)
                    mycursor.execute(insertAdvisorString)
                    mydb.commit()
                except Exception as e:
                    pass


            # add student advisor relation ship
            try:
                insertAdvisesString = "INSERT INTO etm.advises (advisorid, pid) VALUES ('{}', '{}')".format(student.advisorID, student.pid)
                mycursor.execute(insertAdvisesString)
                mydb.commit()   

            except Exception as e:
                print (e)
                pass

        # add courses

        for c in student.courses:

            selectCourseExists = "SELECT hours from etm.course where shortName = '{}'".format(c.shortName)
            mycursor.execute(selectCourseExists)
            myresult = mycursor.fetchall()

            if not myresult:
                print('course not found')
                try:
                    if c.hours == 0:
                        insertCourseString = "INSERT INTO etm.course (shortName) VALUES ('{}')".format(c.shortName)
                    else:
                        insertCourseString = "INSERT INTO etm.course (shortName, hours) VALUES ('{}', '{}')".format(c.shortName, c.hours)
                    mycursor.execute(insertCourseString)
                    mydb.commit()
                except Exception as e:
                    pass

                try:
                    insertOfferedInString = "INSERT INTO etm.offered_in (catalogYear, courseName) VALUES ('{}', '{}')".format(student.catalog, c.shortName)
                    mycursor.execute(insertOfferedInString)
                    mydb.commit()
                except Exception as e:
                    pass

                try:
                    insertPlaceholderString = "INSERT INTO etm.placeholder (courseCode, catalog) VALUES ('{}', '{}')".format(c.shortName, student.catalog)
                    mycursor.execute(insertPlaceholderString)
                    mydb.commit()
                except Exception as e:
                    pass

            insertEnrolledString = "INSERT INTO etm.enrolled_in (PID, courseName, grade, semester) VALUES ('{}', '{}', '{}', '{}')".format(student.pid, c.shortName, c.grade, c.semester)
            
            try:

                mycursor.execute(insertEnrolledString)
                mydb.commit()   

            except Exception as e:
                print (e)
                pass

    else: 

        updateStudent(student)        

def getName(tmp_student, lines):
    nameFound = 0

    for line in lines:
        if 'CATALOG' in line:
            name = line.partition('CATALOG')
            name = name[0].strip()
            nameFound = 1
        if nameFound != 0:
            nameTuple = name.split(' ')
            tmp_student.fName = nameTuple[1].title()
            tmp_student.lName = nameTuple[0].replace(",", "").title()
            break

    if nameFound == 0:
        tmp_student.fName = "Missing"
        tmp_student.lName = "Name"

def getPID(tmp_student, text):
    PIDRegex = re.compile('[P][0-9]{9}');
    PID = PIDRegex.findall(text)
    try:
        tmp_student.pid = PID[0]
    except:
        tmp_student.pid = None

def getDegree(tmp_student, text):
    planCodeRegex = re.compile('[A-Z]{2}\\d{4}')
    try:
        degreeCode = planCodeRegex.findall(text)
        tmp_student.degreeCode = degreeCode[0]
    except:
        tmp_student.degreeCode = None

def getAdvisor(tmp_student, text):
    advisorRegex = re.compile('[A][D][V][I][S][O][R][:].+[(].+[o][h][i][o][.][e][d][u][)]')
    try:
        advisor = advisorRegex.findall(text)[0].replace("ADVISOR: ", "")
        advisor = advisor.split(" (")
        advisorID = advisor[1].replace(")", "")

        tmp_student.advisor = advisor[0]
        tmp_student.advisorID = advisorID
    except:
        tmp_student.advisor = None
        tmp_student.advisorID = None

def getCatalog(tmp_student, text):
    catalogRegex = re.compile('[C][A][T][A][L][O][G][:][ ][0-9]{4}[-][0-9]{2}')
    try: 
        tmp_student.catalog = catalog = catalogRegex.findall(text)[1].replace("CATALOG: ", "").strip()
    except:
        tmp_student.catalog = None

def getCourses(tmp_student, text):
    semester = re.compile('[A-Z][a-z]\\d{2}')
    courseCode = re.compile('[A-Z]{1,4}\\s*\\d{1,4}')
    hoursGrade = re.compile('\\d\\.\\d\\s[A-Z]{1,4}\\S?')
    courseRegex = re.compile('[A-Z][a-z]\\d\\d\\s*[A-Z]{1,4}\\s*\\d{3,4}\\s*\\d\\.\\d\\s*\\d?\\.?\\d?\\s*.{1,4}')

    allCourses = courseRegex.findall(text)
    distinctCourses = list(set(allCourses))

    for course in distinctCourses:

        tmp_course = Course()

        tmp_course.shortName = courseCode.findall(course)[0].replace(" ", "")
        coHoursGrade = hoursGrade.findall(course)[0].split(" ")
        sem = semester.findall(course)[0]
        coHours = coHoursGrade[0]
        coGrade = coHoursGrade[1]

        tmp_course.hours = coHours
        tmp_course.grade = coGrade
        tmp_course.semester = sem

        tmp_student.courses.append(tmp_course)

import os
import sys
import re
import csv
from urllib import pathname2url
import collections
import webbrowser
import glob
import mysql.connector
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
from io import BytesIO
import tabula
import pandas

class Student(object):
    
    def __init__(self):
            self.fName = ""
            self.lName = ""
            self.pid = ""
            self.degreeCode = ""
            self.catalog = None
            self.advisor = ""
            self.advisorID = ""
            self.courses = []

class Course(object):

    def __init__(self):
            self.shortName = ""
            self.hours =  None
            self.grade = ""
            self.semester = ""

class Degree(object):

    def __init__(self):
            self.degreeCode = ""
            self.degreeName = ""
            self.catalog = ""
            self.requirements = collections.defaultdict(dict)

def main():

    students = []
    
    for filepath in glob.iglob('*.pdf'):

        print(filepath)
        sys.stdout.flush()

        tmp_student = Student()

        rsrcmgr = PDFResourceManager()
        retstr = BytesIO()
        codec = 'utf-8'
        laparams = LAParams()
        device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)

        print(filepath)
        #fp = open(filepath, 'rb')
        with open(filepath, 'rb') as fp:
            interpreter = PDFPageInterpreter(rsrcmgr, device)
            password = ""
            maxpages = 0
            caching = True
            pagenos=set()

            for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages, password=password,caching=caching, check_extractable=True):
                interpreter.process_page(page)

            text = retstr.getvalue()

            #fp.close()
            
            # from http://survivalengineer.blogspot.com/2014/04/parsing-pdfs-in-python.html

            lines = retstr.getvalue().splitlines()

            device.close()
            retstr.close()

            # name
            getName(tmp_student, lines)

            # PID
            getPID(tmp_student, text)

            # degree code
            getDegree(tmp_student, text)
            
            # advisor, advisorID
            getAdvisor(tmp_student, text)

            # catalog year
            getCatalog(tmp_student, text)

            # courses & degree
            getCourses(tmp_student, text)

        students.append(tmp_student)

    for s in students:
        newStudent(s)

if __name__== "__main__":
  main()
