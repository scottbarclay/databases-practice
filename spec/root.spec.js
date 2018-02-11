const db = require('../db/index');

// this file creates a root level hook
// see: https://mochajs.org/#root-level-hooks

after(function(done) {
  console.log('after all');
  db.end(done);
});
