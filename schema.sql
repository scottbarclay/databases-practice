-- Use this file to define schemas!
-- Remember you can run this file by running
-- mysql -u root < schema.sql in the terminal
-- * Note * You might have to modify the above
-- statement if you have a different user than
-- the root user or if you have a password

DROP DATABASE IF EXISTS mytunes;
CREATE DATABASE mytunes;
USE mytunes;

CREATE TABLE songs (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title text NOT NULL,
  artist text NOT NULL
); 

-- more tables here!
