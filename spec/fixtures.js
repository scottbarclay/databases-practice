module.exports = {
  addSongs: [
    'INSERT INTO songs (title, artist) VALUES ("Take it all back", "Judah and the Lion");',
    'INSERT INTO songs (title, artist) VALUES ("Down in the Valley", "The Head and the Heart");',
    'INSERT INTO songs (title, artist) VALUES ("Rivers and Roads", "The Head and the Heart");'
  ].join(' '),
  addUsers: [
    'INSERT INTO users (username, firstname, lastname) VALUES ("no1b0ss", "Michael", "Scott");',
    'INSERT INTO users (username, firstname, lastname) VALUES ("drawingGurl", "Pam", "Beesley");',
    'INSERT INTO users (username, firstname, lastname) VALUES ("mrsVance", "Phyllis", "Vance");',
    'INSERT INTO users (username, firstname, lastname) VALUES ("bbb", "Dwight", "Schrute");',
  ]
}