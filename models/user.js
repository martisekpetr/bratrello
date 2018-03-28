'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);
    models.User.hasMany(models.Reminder);
  };

  return User;
};
