const expect = require('chai').expect;
const db = require('../db/index');
const songs = require('../db/songs');
const fakeData = require('./fixtures');

describe('#playlists', function() {

  beforeEach(function(done) {
    // this function runs before *each* test in this file
    // you may want to reset the database so you know
    // what to expect for each test
  });

  describe('#getAll', function() {
    it('should get all playlists', function(done) {
      // YOUR CODE HERE
    });

    it('should have all playlist columns', function(done) {
      // YOUR CODE HERE
    });

    it('should have all playlist properties', function(done) {
      // YOUR CODE HERE
    });
    
  });

  describe('#getById', function() {
    it('should get a single object', function(done) {
      // YOUR CODE HERE
    });

    it('should have all playlist columns', function(done) {
      // YOUR CODE HERE
    });

    it('should have all playlist properties', function(done) {
      // YOUR CODE HERE
    });

    it('should have all songs on a song property', function(done) {
      // YOUR CODE HERE
    });
  });

  describe('#createOne', function() {
    // YOUR CODE HERE
  });

  describe('#addSong', function() {
    // YOUR CODE HERE
  });

  describe('#removeSong', function() {
    // YOUR CODE HERE
  });

});
