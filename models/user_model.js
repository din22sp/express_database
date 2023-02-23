const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user_table', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user_table where id_user=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, cryptedPassword) {
      return db.query('insert into user_table (username, password) values(?,?)',
      [user.username, cryptedPassword], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from user_table where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, cryptedPassword) {
      return db.query('update user_table set username=?, password=? where id_user=?',
      [user.username, cryptedPassword, id], callback);
    });
  }

}
          
module.exports = user;