const expect = require('chai').expect;
const db = require('../db/index');
const songs = require('../db/songs');
const fakeData = require('./fixtures');

describe('#songs', function() {

  beforeEach(function(done) {
    db.query('TRUNCATE TABLE songs', function(err) {
      expect(err).to.not.exist;
      db.query(fakeData.addSongs, (err, result) => {
        done(err);
      });
    });
  });

  describe('#getAll', function() {
    it('should get all songs', function(done) {
      songs.getAll((err, results) => {
        expect(results).to.have.lengthOf(3);
        done();
      });
    });

    it('should have all song columns', function(done) {
      songs.getAll((err, results) => {
        expect(results[0]).to.have.property('title');
        expect(results[0]).to.have.property('artist');
        expect(results[0]).to.have.property('id');
        done();
      });
    });

    it('should have all song properties', function(done) {
      songs.getAll((err, results) => {
        expect(results[0]).to.have.property('title', 'Take it all back');
        expect(results[0]).to.have.property('artist', 'Judah and the Lion');
        done();
      });
    });
    
  });

  describe('#getById', function() {
    it('should get a single object', function(done) {
      songs.getById(2, (err, results) => {
        expect(results).to.not.be.an.instanceof(Array);
        done();
      });
    });

    it('should have all song columns', function(done) {
      songs.getById(2, (err, results) => {
        expect(results).to.have.property('title');
        expect(results).to.have.property('artist');
        expect(results).to.have.property('id');
        done();
      });
    });

    it('should have all song properties', function(done) {
      songs.getById(2, (err, results) => {
        expect(results).to.have.property('title', 'Down in the Valley');
        expect(results).to.have.property('artist', 'The Head and the Heart');
        done();
      });
    });
  });

  describe('#getAllByArtist', function() {
    it('should get all songs by an artist', function(done) {
      songs.getAllByArtist('The Head and the Heart', (err, results) => {
        expect(results).to.have.lengthOf(2);
        done();
      });
    });

    it('should have all song columns', function(done) {
      songs.getAllByArtist('The Head and the Heart', (err, results) => {
        expect(results[0]).to.have.property('title');
        expect(results).to.have.property('artist');
        expect(results).to.have.property('id');
        done();
      });
    });

    it('should have all song properties', function(done) {
      songs.getAllByArtist('The Head and the Heart', (err, results) => {
        expect(results[0]).to.have.property('title', 'Down in the Valley');
        expect(results[0]).to.have.property('artist', 'The Head and the Heart');
        done();
      });
    });
  });

  describe('#createOne', function() {
    it('should add a song to the song table', function(done) {
      songs.createOne('Angela', 'The Lumineers', (err, results) => {
        expect(err).to.be.null;
        db.query('SELECT * FROM songs', (err, results) => {
          expect(results[0]).to.have.property('title', 'Angela');
          expect(results[0]).to.have.property('artist', 'The Lumineers');
          done();
        });
      });
    });
  });

});
