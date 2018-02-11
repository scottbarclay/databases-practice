const db = require('./index');

const getAll = (/*YOUR CODE HERE*/) => {
  // This function should get all basic playlist info
  // ie - title, user, shared
};

const getById = (/*YOUR CODE HERE*/) => {
  // getbById gets the FULL playlist info and
  // should create an object with the following information
  // {
  //   title: 
  //   user:
  //   shared:
  //   songs: [ {title: , artist: }, ... ]
  // }
};

const createOne = (/*YOUR CODE HERE*/) => {
  // createOne creates a new playlist with no songs
};

const addSong = (/*YOUR CODE HERE*/) => {
  // add song adds a song to the specified playlist
  // don't worry about order
};

const removeSong = (/*YOUR CODE HERE*/) => {
  // remove song removes a song from the particular playlist
  // (don't worry about order)
};

module.exports = {
  getAll,
  getById,
  createOne,
  addSong,
  removeSong
}
