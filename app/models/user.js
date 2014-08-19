var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');

// Come back and look at bcrypt ***

var User = db.Model.extend({
  username: "anonymous",
  password: "password",
  tableName: 'users',
  hasTimestamps: true,

  initialize: function(){
    // function(model, attrs, options){
      var shasum = crypto.createHash('sha1');
      shasum.update(this.get('password'));
      this.set('password', shasum.digest('hex'));
    // }();
  },
});

module.exports = User;
