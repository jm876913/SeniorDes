import os
import sys
import re
from urllib import pathname2url
import collections
import webbrowser
import glob
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
from io import BytesIO
import unittest
from DP2 import getName, getPID, getDegree, getAdvisor, getCatalog, getCourses

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

class TestHolly(unittest.TestCase):

    def setUp(self):

    	rsrcmgr = PDFResourceManager()
        retstr = BytesIO()
        codec = 'utf-8'
        laparams = LAParams()
        device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)

    	self.testfile = open('myDARS.pdf')

    	interpreter = PDFPageInterpreter(rsrcmgr, device)
        password = ""
        maxpages = 0
        caching = True
        pagenos=set()

        for page in PDFPage.get_pages(self.testfile, pagenos, maxpages=maxpages, password=password,caching=caching, check_extractable=True):
            interpreter.process_page(page)

        self.text = retstr.getvalue()

        self.lines = retstr.getvalue().splitlines()

        device.close()
        retstr.close()

    def tearDown(self):
       self.testfile.close()
    	
    def test_name(self):

        tmp_student = Student()
        getName(tmp_student, self.lines)
        self.assertEqual(tmp_student.fName, 'Holly')
        self.assertEqual(tmp_student.lName, 'Fox')

    def test_PID(self):

        tmp_student = Student()
        getPID(tmp_student, self.text)
        self.assertEqual(tmp_student.pid, 'P100244529')

    def test_degree(self):

        tmp_student = Student()
        getDegree(tmp_student, self.text)
        self.assertEqual(tmp_student.degreeCode, 'BS7260')

    def test_advisor(self):

        tmp_student = Student()
        getAdvisor(tmp_student, self.text)
        self.assertEqual(tmp_student.advisor, 'David Chelberg')
        self.assertEqual(tmp_student.advisorID, 'chelberg@ohio.edu')

    def test_catalog(self):

        tmp_student = Student()
        getCatalog(tmp_student, self.text)
        self.assertEqual(tmp_student.catalog, '2015-16')

    def test_courses(self):
    	tmp_student = Student()
        getCourses(tmp_student, self.text)
        self.assertEqual(tmp_student.courses[0].shortName, 'CHEM1520')
        self.assertEqual(tmp_student.courses[0].hours, '4.0')
        self.assertEqual(tmp_student.courses[0].grade, 'C+')
        self.assertEqual(tmp_student.courses[0].semester, 'Sp18')

class TestSample(unittest.TestCase):

    def setUp(self):

    	rsrcmgr = PDFResourceManager()
        retstr = BytesIO()
        codec = 'utf-8'
        laparams = LAParams()
        device = TextConverter(rsrcmgr, retstr, codec=codec, laparams=laparams)

    	self.testfile = open('new_student.pdf')

    	interpreter = PDFPageInterpreter(rsrcmgr, device)
        password = ""
        maxpages = 0
        caching = True
        pagenos=set()

        for page in PDFPage.get_pages(self.testfile, pagenos, maxpages=maxpages, password=password,caching=caching, check_extractable=True):
            interpreter.process_page(page)

        self.text = retstr.getvalue()

        self.lines = retstr.getvalue().splitlines()

        device.close()
        retstr.close()

    def tearDown(self):
       self.testfile.close()
    	
    def test_name(self):

        tmp_student = Student()
        getName(tmp_student, self.lines)
        self.assertEqual(tmp_student.fName, 'Student')
        self.assertEqual(tmp_student.lName, 'Sample')

    def test_PID(self):

        tmp_student = Student()
        getPID(tmp_student, self.text)
        self.assertEqual(tmp_student.pid, 'P999999999')

    def test_degree(self):

        tmp_student = Student()
        getDegree(tmp_student, self.text)
        self.assertEqual(tmp_student.degreeCode, 'BS7256')

    def test_advisor(self):

        tmp_student = Student()
        getAdvisor(tmp_student, self.text)
        self.assertEqual(tmp_student.advisor, None)
        self.assertEqual(tmp_student.advisorID, None)

    def test_catalog(self):

        tmp_student = Student()
        getCatalog(tmp_student, self.text)
        self.assertEqual(tmp_student.catalog, '2017-18')

    def test_courses(self):
    	tmp_student = Student()
        getCourses(tmp_student, self.text)
        self.assertEqual(tmp_student.courses, [])

if __name__ == '__main__':
    unittest.main()
