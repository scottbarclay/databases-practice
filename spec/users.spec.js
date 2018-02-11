const expect = require('chai').expect;
const db = require('../db/index');
const users = require('../db/users');
const fakeData = require('./fixtures');

describe('#users', function() {
  
  beforeEach(function(done) {
    db.query('TRUNCATE TABLE users', function(err) {
      expect(err).to.not.exist;
      db.query(fakeData.addUsers, (err, result) => {
        done(err);
      });
    });
  });

  describe('#getAll', function() {
    it('should get all users', function(done) {
      users.getAll((err, results) => {
        expect(results).to.have.lengthOf(4);
        done();
      });
    });

    it('should have all users columns', function(done) {
      users.getAll((err, results) => {
        expect(results[0]).to.have.property('username');
        expect(results[0]).to.have.property('firstname');
        expect(results[0]).to.have.property('lastname');
        expect(results[0]).to.have.property('id');
        done();
      });
    });

    it('should have all user properties', function(done) {
      users.getAll((err, results) => {
        expect(results[0]).to.have.property('username', 'no1b0ss');
        expect(results[0]).to.have.property('firstname', 'Michael');
        expect(results[0]).to.have.property('lastname', 'Scott');
        done();
      });
    });
    
  });

  describe('#getById', function() {
    it('should get a single object', function(done) {
      users.getById(4, (err, results) => {
        expect(results).to.not.be.an.instanceof(Array);
        done();
      });
    });

    it('should have all user columns', function(done) {
      users.getById(4, (err, results) => {
        expect(results).to.have.property('username');
        expect(results).to.have.property('firstname');
        expect(results).to.have.property('lastname');
        expect(results).to.have.property('id');
        done();
      });
    });

    it('should have all user properties', function(done) {
      users.getById(4, (err, results) => {
        expect(results).to.have.property('username', 'bbb');
        expect(results).to.have.property('firstname', 'Dwight');
        expect(results).to.have.property('lastname', 'Schrute');
        done();
      });
    });
  });

  describe('#getByUsername', function() {
    it('should get just one object', function(done) {
      users.getByUsername('mrsVance', (err, results) => {
        expect(results).to.not.be.an.instanceof(Array);
        expect(results).to.have.property('username', 'mrsVance');
        done();
      });
    });

    it('should have all user columns', function(done) {
      users.getByUsername('mrsVance', (err, results) => {
        expect(results).to.have.property('username');
        expect(results).to.have.property('firstname');
        expect(results).to.have.property('lastname');
        done();
      });
    });

    it('should have all song properties', function(done) {
      users.getByUsername('mrsVance', (err, results) => {
        expect(results).to.have.property('username', 'mrsVance');
        expect(results).to.have.property('firstname', 'Phyllis');
        expect(results).to.have.property('lastname', 'Vance');
        done();
      });
    });
  });

  describe('#createOne', function() {
    it('should add a user to the song table', function(done) {
      users.createOne('catLady', 'Angela', 'Martin', (err, results) => {
        expect(err).to.be.null;
        db.query('SELECT * FROM users', (err, results) => {
          expect(results[0]).to.have.property('username', 'catLady');
          expect(results[0]).to.have.property('firstname', 'Angela');
          expect(results[0]).to.have.property('lastname', 'Martin');
          done();
        });
      });
    });
  });

});
