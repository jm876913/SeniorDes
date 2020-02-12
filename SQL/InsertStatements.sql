INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100244529', 'Holly', 'Fox');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100254081', 'Jordan', 'Zenisek');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100270523', 'Kevin', 'Godenswager');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('0', 'Test', 'Student');

INSERT INTO `etm`.`catalog` (`year`) VALUES ('2018-19');
INSERT INTO `etm`.`catalog` (`year`) VALUES ('2017-18');
INSERT INTO `etm`.`catalog` (`year`) VALUES ('2016-17');
INSERT INTO `etm`.`catalog` (`year`) VALUES ('2015-16');

INSERT INTO `etm`.`advisor` (`ID`, `fname`, `lname`) VALUES ('1', 'Curtis', 'Cohenour');
INSERT INTO `etm`.`advisor` (`ID`, `fname`, `lname`) VALUES ('2', 'Mustafa', 'Shraim');

INSERT INTO `etm`.`degree` (`degreeCode`, `type`, `name`) VALUES ('BS7256', 'Bachelor of Science', 'Engineering Technology and Management');

INSERT INTO `etm`.`advises` (`advisorid`, `pid`) VALUES ('1', 'P100244529');

  insert into `etm`.`course` (`longName`, `shortName`, `hours`)
  values ('Intro to Engineering Technology and Mgt.', 'ETM1000', 0.5),
  ('Engineering Graphics Fundamentals', 'ETM1100', 2),
              ('Enterprise Computer Methods', 'ETM1030', 3),
              ('Introduction to Manufacturing Operations', 'ETM1120', 3),
              ('Industrial Plastics', 'ETM2080', 3),
              ('Metal Fabricating and Castings', 'ETM2180', 3),
              ('Applied Mechatronics', 'ETM2210', 3),
              ('Production Metal Machining', 'ETM2510', 3),
              ('Apps of Obj Oriented Programming', 'ETM3030', 3),
              ('Product Design', 'ETM3100', 3),
              ('Hydraulics & Pneumatics', 'ETM3200', 3),
              ('Database Applications & Analytics', 'ETM3310', 3),
              ('Electronics & Micro-controllers', 'ETM3320', 3),
              ('Production Tooling', 'ETM3510', 3),
              ('Quality Management Systems', 'ETM3630', 3),
              ('Enterprise Project Management', 'ETM3830', 3),
              ('Senior Seminar', 'ETM4000', 0.5),
              ('Lean Enterprise Methods', 'ETM4320', 3),
              ('Automation, Robotics & Control Systems',  'ETM4350', 3),
              ('Operations MGT Capstone I', 'ETM4621', 2);

 insert into `etm`.`course` (`longName`, `shortName`, `hours`)
 values ('Operations MGT Capstone II', 'ETM4622', 3),
 ('Metal Casting', 'ETM2150', 3),
 ('Welding Technology', 'ETM2190', 3),
 ('Computer Graphics', 'ETM3020', 3),
 ('Plastics Molding Processes', 'ETM3470', 3),
 ('Plastics Forming and Composites Fabrication', 'ETM3480', 3),
 ('Plastics Tooling', 'ETM3490', 3),
 ('Automatic Identification and Data Capture', 'ETM3540', 3),
 ('Industrial Materials', 'ETM3900', 3),
 ('Dimensional Analysis', 'ETM4010', 3),
 ('Enterprise Supply Chain Logistics', 'ETM4300', 3),
 ('Radio Frequency Identification for the Supply Chain', 'ETM4330', 3),
 ('Safety Management', 'ETM4830', 3),
 ('Maintenance Systems', 'ETM4840', 3),
 ('Independent Study in Engineering Technology Management', 'ETM4930', 3),
 ('Fundamentals of Public Speaking', 'COMS1030', 3),
 ('General Psychology', 'PSY1010', 3),
 ('Pre-Calculus', 'MATH1300', 4),
 ('Survey of Calculus', 'MATH1350', 4),
 ('Calculus I', 'MATH2301', 4),
 ('Accounting For Business', 'ACCT1010', 3),
 ('Freshman Composition', 'ENG1510', 3),
 ('Career Orientation', 'ET1500', 0.5),
 ('Junior English', 'ENG3090', 3);
 
 insert into `etm`.`course` (`longName`, `shortName`, `hours`)
 values('Fundamentals of Statistics', 'ISE3040', 3),
  ('Introduction to Statistics', 'MATH2500', 4),
  ('Principles of Chemistry I', 'CHEM1210', 4),
  ('Concepts in Chemistry', 'CHEM1500', 4),
  ('Fundamentals of Chemistry I', 'CHEM1510', 4),
  ('Introduction to Physics', 'PHYS2001', 4),
  ('General Physics', 'PHYS2051', 5),
  ('Accounting for Business Activities', 'ACCT1005', 3),
  ('Introduction to Corporate Finance', 'FIN3000', 3),
  ('Introduction to Management', 'MGT2000', 3),
  ('Business Information Systems Nonmajor', 'MIS2021', 3),
  ('Marketing Principles', 'MKT2020', 3),
  ('Aesthetics Of Architecture and Design', 'ART1600', 3),
  ('Supervision and Leadership', 'ETM3620', 3),
  ('Junior English', 'ENG3090J', 3),
  ('Intro to German', 'GER1110', 4),
  ('Business Information Systems Non-Majors', 'MIS2020', 3);
  
insert into `etm`.`course` (`longName`, `shortName`)
 values('Advanced Standing', 'AS');
 
INSERT INTO `etm`.`belongs_to` (`degreeCode`, `CatalogID`) VALUES ('BS7256', '2018-19');
INSERT INTO `etm`.`belongs_to` (`degreeCode`, `CatalogID`) VALUES ('BS7256', '2017-18');
INSERT INTO `etm`.`belongs_to` (`degreeCode`, `CatalogID`) VALUES ('BS7256', '2016-17');
INSERT INTO `etm`.`belongs_to` (`degreeCode`, `CatalogID`) VALUES ('BS7256', '2015-16');

insert into `etm`.`enrolled_in` 
values ('P100254081', 'ETM1000', 'IP', 'Fa18'),
('P100254081', 'ETM1100', 'IP', 'Fa18'),
('P100254081', 'ETM1030', 'IP', 'Fa18'),
('P100254081', 'ETM1120', 'IP', 'Fa18'),
('P100254081', 'COMS1030', 'IP', 'Fa18'),
('P100254081', 'PHYS2001', 'IP', 'Fa18'),
('P100244529', 'ETM1000', 'A', 'Fa15'),
('P100244529', 'ETM1100', 'A-', 'Fa15'),
('P100244529', 'ETM1030', 'B+', 'Fa15'),
('P100244529', 'ETM1120', 'A', 'Fa15'),
('P100244529', 'COMS1030', 'B-', 'Fa15'),
('P100244529', 'PHYS2001', 'D', 'Fa15'),
('P100244529', 'ENG1510', 'A', 'Sp16'),
('P100244529', 'CHEM1210', 'C-', 'Sp16'),
('P100244529', 'MATH1300', 'B', 'Sp16'),
('P100244529', 'ET1500', 'B', 'Sp16'),
('P100244529', 'ACCT1010', 'A-', 'Sp16'),
('P100244529', 'ETM2080', 'A', 'Fa16'),
('P100244529', 'ETM2210', 'B', 'Fa16'),
('P100244529', 'ETM3030', 'C', 'Fa16'),
('P100244529', 'PSY1010', 'A', 'Fa16'),
('P100244529', 'FIN3000', 'B-', 'Fa16'),
('P100244529', 'ETM2180', 'B', 'Sp17'),
('P100244529', 'ETM2510', 'B', 'Sp17'),
('P100244529', 'ETM3100', 'B', 'Sp17'),
('P100244529', 'ART1600', 'A', 'Sp17'),
('P100244529', 'ETM3620', 'A', 'Sp17'),
('P100244529', 'ETM3310', 'C', 'Fa17'),
('P100244529', 'ETM3320', 'A', 'Fa17'),
('P100244529', 'ETM3200', 'B', 'Fa17'),
('P100244529', 'ISE3040', 'A', 'Fa17'),
('P100244529', 'ENG3090J', 'A-', 'Fa17'),
('P100244529', 'GER1110', 'A-', 'Sp18'),
('P100244529', 'ETM2150', 'B', 'Sp18'),
('P100244529', 'ETM3510', 'A', 'Sp18'),
('P100244529', 'MIS2020', 'A', 'Sp18'),
('P100244529', 'ETM3630', 'IP', 'Fa18'),
('P100244529', 'ETM3830', 'IP', 'Fa18'),
('P100244529', 'ETM4000', 'IP', 'Fa18'),
('P100244529', 'ETM4320', 'IP', 'Fa18');

INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM1100');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM1000');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM1030');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM1120');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2080');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2180');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2210');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2510');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3030');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3100');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3200');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3310');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3320');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3510');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3620');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3630');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3830');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4000');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4320');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4350');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4621');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4622');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2150');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM2190');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3020');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3470');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3480');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3490');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3540');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM3900');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4010');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4300');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4330');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4830');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4840');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ETM4930');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'COMS1030');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'PSY1010');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MATH1300');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MATH1350');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MATH2301');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ISE3040');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MATH2500');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'CHEM1210');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'CHEM1500');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'CHEM1510');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'PHYS2001');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'PHYS2051');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'ACCT1005');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'FIN3000');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MGT2000');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MIS2021');
INSERT INTO `etm`.`degreeREQS` (`degreeCode`, `courseName`) VALUES ('BS7256', 'MKT2020');
INSERT INTO `etm`.`working_towards` (`PID`, `degreeCode`) VALUES ('P100244529', 'BS7256');
INSERT INTO `etm`.`studentCatalog` (`PID`, `year`) VALUES ('P100244529', '2015-16');


 insert into `etm`.`courseREQS` (`courseName`, `reqCourseName`, `type`)
 values ('ETM2080', 'CHEM1210', 'pre'),
('ETM2080', 'AS', 'pre'),
('ETM2180', 'CHEM1210', 'pre'),
('ETM2180', 'AS', 'pre'),
('ETM2210', 'AS', 'pre'),
('ETM2210', 'PHYS2001', 'pre'),
('ETM2510', 'AS', 'pre'),
('ETM3030', 'AS', 'pre'),
('ETM3030', 'ETM1030', 'pre'),
('ETM3100', 'AS', 'pre'),
('ETM3100', 'ETM2080', 'pre'),
('ETM3200', 'AS', 'pre'),
('ETM3200', 'ETM2210', 'pre'),
('ETM3310', 'AS', 'pre'),
('ETM3310', 'ETM3030', 'pre'),
('ETM3320', 'AS', 'pre'),
('ETM3320', 'ETM3030', 'pre'),
('ETM3320', 'PHYS2001', 'pre'),
('ETM3510', 'AS', 'pre'),
('ETM3510', 'ETM2510', 'pre'),
('ETM3510', 'ETM3100', 'pre'),
('ETM3630', 'AS', 'pre'),
('ETM3630', 'ETM2080', 'pre'),
('ETM3630', 'ETM2180', 'pre'),
('ETM3630', 'MATH2500', 'pre'),
('ETM3630', 'ENG3090J', 'pre'),
('ETM3830', 'AS', 'pre'),
('ETM3830', 'ETM1030', 'pre'),
('ETM3830', 'MGT2000', 'pre'),
('ETM4000', 'AS', 'pre'),
('ETM4320', 'AS', 'pre'),
('ETM4320', 'ETM1030', 'pre'),
('ETM4320', 'MGT2000', 'pre'),
('ETM4350', 'AS', 'pre'),
('ETM4350', 'ETM3030', 'pre'),
('ETM4350', 'ETM3200', 'pre'),
('ETM4350', 'ETM3320', 'pre'),
('ETM4621', 'AS', 'pre'),
('ETM4621', 'ETM2210', 'pre'),
('ETM4621', 'ETM2510', 'pre'),
('ETM4621', 'ETM3030', 'pre'),
('ETM4621', 'ETM3100', 'pre'),
('ETM4622', 'AS', 'pre'),
('ETM4622', 'ETM4621', 'pre'),
('ETM4622', 'ETM3510', 'pre'),
('ETM4622', 'ETM3630', 'pre'),
('ETM3620', 'AS', 'pre'),
('ETM3620', 'COMS1030', 'pre'),
('ETM3620', 'MGT2000', 'pre'),
('FIN3000', 'ACCT1010', 'pre');


INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100456789', 'Full', 'Student');
insert into `etm`.`enrolled_in` 
values ('P100456789', 'ETM1000', 'A', 'Fa15'),
('P100456789', 'ETM1100', 'A-', 'Fa15'),
('P100456789', 'ETM1030', 'B+', 'Fa15'),
('P100456789', 'ETM1120', 'A', 'Fa15'),
('P100456789', 'COMS1030', 'B-', 'Fa15'),
('P100456789', 'PHYS2001', 'D', 'Fa15'),
('P100456789', 'ENG1510', 'A', 'Sp16'),
('P100456789', 'CHEM1210', 'C-', 'Sp16'),
('P100456789', 'MATH1300', 'B', 'Sp16'),
('P100456789', 'ET1500', 'B', 'Sp16'),
('P100456789', 'ACCT1010', 'A-', 'Sp16'),
('P100456789', 'ETM2080', 'A', 'Fa16'),
('P100456789', 'ETM2210', 'B', 'Fa16'),
('P100456789', 'ETM3030', 'C', 'Fa16'),
('P100456789', 'PSY1010', 'A', 'Fa16'),
('P100456789', 'FIN3000', 'B-', 'Fa16'),
('P100456789', 'ETM2180', 'B', 'Sp17'),
('P100456789', 'ETM2510', 'B', 'Sp17'),
('P100456789', 'ETM3100', 'B', 'Sp17'),
('P100456789', 'ART1600', 'A', 'Sp17'),
('P100456789', 'ETM3620', 'A', 'Sp17'),
('P100456789', 'ETM3310', 'C', 'Fa17'),
('P100456789', 'ETM3320', 'A', 'Fa17'),
('P100456789', 'ETM3200', 'B', 'Fa17'),
('P100456789', 'ISE3040', 'A', 'Fa17'),
('P100456789', 'ENG3090J', 'A-', 'Fa17'),
('P100456789', 'GER1110', 'A-', 'Sp18'),
('P100456789', 'ETM2150', 'B', 'Sp18'),
('P100456789', 'ETM3510', 'A', 'Sp18'),
('P100456789', 'MIS2020', 'A', 'Sp18'),
('P100456789', 'ETM3630', 'IP', 'Fa18'),
('P100456789', 'ETM3830', 'IP', 'Fa18'),
('P100456789', 'ETM4000', 'IP', 'Fa18'),
('P100456789', 'ETM4350', 'IP', 'Fa18'),
('P100456789', 'ETM4621', 'IP', 'Fa18'),
('P100456789', 'ETM4622', 'IP', 'Fa18'),
('P100456789', 'ETM4320', 'IP', 'Sp18');
('P100456789', 'COMS1030', 'IP', 'Sp18'),
('P100456789', 'PHYS2001', 'IP', 'Sp18'),
('P100254081', 'ETM1000', 'IP', 'Sp18');