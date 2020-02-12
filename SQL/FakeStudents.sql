INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100159690', 'Freddie', 'Mercury');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100297843', 'John', 'Denver');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100381943', 'Toby', 'Keith');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100678910', 'LL', 'Cooliay');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P100678933', 'Prince', 'Fresh');
INSERT INTO `etm`.`student` (`PID`, `fname`, `lname`) VALUES ('P123456789`', 'Castellano', 'Richie');


insert into `etm`.`course` (`longName`, `shortName`, `hours`)
 values('Mechanical Engineering - Gateway Course', 'ME1010', 3),
  ('Learning Community', 'UC1900', 1),
  ('Western Civilization: Modernity from 1500', 'HIST1220', 3),
  ('Introduction to Computer Engineering', 'EE1024', 4),
  ('Fundamentals of Philosophy', 'PHIL1010', 3);

insert into `etm`.`enrolled_in` 
values ('P100159690', 'MATH1300', 'D', 'Sp12'),
values ('P100159690', 'UC1900', 'C', 'Fa13'),

values ('P100297843', 'CHEM1500', 'C', 'Fa16'),
values ('P100297843', 'ETM1000', 'CR', 'Sp16'),

values ('P100381943', 'COMS1030', 'C', 'Fa16'),
values ('P100381943', 'UC1900', 'C', 'Fa16'),

values ('P100678910', 'HIST1220', 'B', 'Sp16'),
values ('P100678910', 'ART1100', 'A', 'Fa16'),

values ('P100678933', 'ET1100', 'TA-', 'Fa14'),
values ('P100678933', 'EE1024', 'TA-', 'Fa15'),


values ('P123456789', 'ME1010', 'B-', 'Fa18'),
values ('P123456789', 'PHIL1010', 'C', 'Fa18');