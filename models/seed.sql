-- do not change the order of insertion as games and user must be populated first in order to populate challenges
-- and scores.
USE exampledb;


Insert into users (email,password,createdAt,updatedAt) VALUES
("Amica@berkeley.edu","$2a$10$J84GphQYgdvQ3lJEZaPPXenbvr9z./9GSxA4EAfCs4z5szgqTpit.","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("David@berkeley.edu","$2a$10$37OHeWr3onhHOkn9vTPJBewDR22ZGX9ESCYWQckKjgQMMGp90PZim","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("Sim@berkeley.edu","$2a$10$9PZ1B1Jg.rBsaQa2Wrsf.untcbH3jBxWUl73QaukvYga4db5dSb0a","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("Suhaani@berkeley.edu","$2a$10$jK/3ZXoPtnNvnS7HGnUvpO2YQCKFiCrH1sllTziDV8uN6HVDGdCPG","2018-09-15 23:30:23","2018-09-15 23:30:23"),
("isaac@berkeley.edu","$2a$10$XWfxoGfYFakNy9LttmjJUu157m.yXLOEtsWjpI18ieZIoNCARjXOW","2018-09-15 23:30:23","2018-09-15 23:30:23");

INSERT INTO sales (address, city, state,  zipcode, date, createdAt, updatedAt, userId) 
VALUES ("12 Marr Ave"," Oakland","CA","94611","Fri 10/12", "2018-09-15 23:30:23","2018-09-15 23:30:23", 1),
("1621 Sacramento St"," Berkeley","CA","94702","Fri 10/12", "2018-09-15 23:30:23","2018-09-15 23:30:23",2),
("7010 Manila Ave"," El Cerrito","CA","94530","Sat 10/13", "2018-09-15 23:30:23","2018-09-15 23:30:23",3),
("1581 Boulevard Way"," Walnut Creek","CA","94595","Tue 10/16", "2018-09-15 23:30:23","2018-09-15 23:30:23",4),
("1855 Gateway Blvd", "Concord","CA","94520","Fri 10/19", "2018-09-15 23:30:23","2018-09-15 23:30:23",5);


